
# Official image for Node.
FROM node:12-alpine 

# Sets the default working directory of the image for any
# RUN, CMD, ENTRYPOINT, COPY, and ADD statements that come
# with it in the Dockerfile.
WORKDIR /usr/src/app

# Install all dependencies.
RUN npm install --global json-server

# Copies new files or directories from <src> and adds them to
# the filesystem of the container at the path <dest>.
COPY db.json json-server-db.json

ENTRYPOINT ["json-server", "--port", "3000", "--host", "0.0.0.0"]

CMD ["./json-server-db.json"]

# docker build -t image-json-server .
# docker run -p 3000:3000 image-json-server
