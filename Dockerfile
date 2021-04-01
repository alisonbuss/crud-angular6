# Multi-stage:
# 1) Node image for building frontend assets.
# 2) nginx stage to serve frontend assets.

# 1 STAGE: builder

# Official image for Node.
FROM node:12-alpine AS builder

# Sets the default working directory of the image for any
# RUN, CMD, ENTRYPOINT, COPY, and ADD statements that come
# with it in the Dockerfile.
WORKDIR /usr/src/app

# Copies new files or directories from <src> and adds them to
# the filesystem of the container at the path <dest>.
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install all dependencies.
RUN npm install --silent

# Copy source files from host computer to the container.
COPY . .

# Build the app.
# Invoke the build script to transpile code to js.
RUN npm run build-dev

# 2 STAGE: run

# Official image for Nginx.
FROM nginx:1.18.0-alpine AS run

# Set working directory to nginx asset directory.
WORKDIR /usr/share/nginx/html

# Adding bash to Alpine and Remove default nginx static assets.
RUN apk add --no-cache bash && rm -rf ./*

# Copy static assets from builder stage.
COPY --from=builder /usr/src/app/dist/web-application .
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# docker build -t image-nginx-angular .
# docker run -p 8081:80 image-nginx-angular
