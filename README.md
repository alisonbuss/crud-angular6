
#### Translation for: **[English](https://github.com/alisonbuss/crud-angular6/blob/master/README_LANG_EN.md)**.

#### Status do Projeto: *(Em Desenvolvimento)*.

<h2 align="center">
    crud-angular6 <br/>
    Criando um simples CRUD em Angular 6 usando (json-server)
</h2>

### Inspirado no projeto:

* **[[angular6-example](https://github.com/only2dhir/angular6-example)]** - por Dhiraj Ray.

### Dependência de ferramentas:

* **[[Node](https://nodejs.org/en/)]** 8.x ou superior...
* **[[NPM](https://www.npmjs.com/)]** 5.x ou superior...
* **[[TypeScript](https://www.typescriptlang.org/)]** 2.7.x
* **[[RxJS](https://rxjs-dev.firebaseapp.com/)]** 6.0.0 ou superior...
* **[[tslib](https://www.npmjs.com/package/tslib)]** 1.9.0
* **[[JSON Server](https://github.com/typicode/json-server)]** 0.14.0 ou superior...
* **[[GNU Make](https://www.gnu.org/software/make/)]** 4.1 ou superior...

> **Nota:**
> - *É necessário ter instalado as dependências citadas acima, para que o projeto funcione.*
> - *A execução desse projeto foi feita através de um **Desktop Ubuntu 17.10 (Artful Aardvark)**.*

### Executar o projeto:

> **Nota:**
> - *O projeto será executado através de um Makefile.*
> - *Para mais informações execute no terminal: $ make help*

#### --Via comando shell:

```bash

# Ambiente:
$ npm -v
$ node -v

# Instalar Angular(6) :
$ npm uninstall -g @angular/cli
$ npm cache clean
$ npm install -g @angular/cli@6.2.9

# Instalar e rodar o (json-server):
$ rpm install -g json-server
$ json-server --help
$ json-server --version
$ json-server --watch ./json-server-mock/db.json
# Acessa: http://localhost:3000/users

# Executar o projeto:

# Info
$ npm ls

# Instalar Dependências
$ npm install 

# Build do projeto
$ npm run build

# Executar projeto local
$ npm run start
# Acessa: http://localhost:4242

```

### Referências:

* Angular - Official Site, Documentation. ***What is Angular?*** <br/>
  Acessado: *Em Julho de 2018 por ai...* <br/>
  Disponível: *[https://angular.io/docs](https://angular.io/docs)*

* Blog - Dhiraj Ray. ***Angular 6 CRUD Example*** <br/>
  Acessado: *Em Julho de 2018 por ai...* <br/>
  Disponível: *[https://www.devglan.com/angular/angular-6-example](https://www.devglan.com/angular/angular-6-example)*

* GitHub, Rep: angular-6-example - Dhiraj Ray. ***Angular 6 CRUD Example*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://github.com/only2dhir/angular6-example](https://github.com/only2dhir/angular6-example)*

* Blog - Tom Cowley. ***Angular Folder Structure*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://medium.com/@motcowley/angular-folder-structure-d1809be95542](https://medium.com/@motcowley/angular-folder-structure-d1809be95542)*

* Blog - Wendel Nascimento. ***Entendendo RxJS Observable com Angular*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://medium.com/tableless/entendendo-rxjs-observable-com-angular-6f607a9a6a00](https://medium.com/tableless/entendendo-rxjs-observable-com-angular-6f607a9a6a00)*

* Blog - Paul Galvin. ***Simple JavaScript Logger in TypeScript Demonstrating Interfaces, Union Types and Rest Parameters*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://blog.hellojs.org/simple-javascript-logger-in-typescript-demonstrating-interfaces-union-types-and-rest-parameters-6efc5aee2c97](https://blog.hellojs.org/simple-javascript-logger-in-typescript-demonstrating-interfaces-union-types-and-rest-parameters-6efc5aee2c97)*

* YouTube, Canal - Hugo Vasconcelos. ***Curso de Angular 6 com TypeScript*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://www.youtube.com/playlist?list=PLxNM4ef1Bpxh9W5wHl-VhFaF9ZrI5Q2zO](https://www.youtube.com/playlist?list=PLxNM4ef1Bpxh9W5wHl-VhFaF9ZrI5Q2zO)*

* YouTube, Canal - Loiane Groner. ***Curso de Angular*** <br/>
  Acessado: *Em Julho de 2017 por ai...* <br/>
  Disponível: *[https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G](https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G)*

* YouTube, Vídeo - Loiane Groner. ***Curso Angular: Novidades Angular v6.1*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://www.youtube.com/watch?v=pl8RB8nGWZ0](https://www.youtube.com/watch?v=pl8RB8nGWZ0)*

* YouTube, Vídeo - Loiane Groner. ***Curso Angular #119: Http: Simulando Servidor REST (json-server)*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://www.youtube.com/watch?v=mczUdRvLBc8&t=3s](https://www.youtube.com/watch?v=mczUdRvLBc8&t=3s)*

* GitHub, Rep: json-server - typicode. ***JSON Server*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://github.com/typicode/json-server](https://github.com/typicode/json-server)*

* Blog - Roy Agasthyan. ***Criando uma API REST Falsa Com json-server*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://code.tutsplus.com/pt/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871](https://code.tutsplus.com/pt/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871)*

* Blog - Sebastian Eschweiler. ***Create A REST API With JSON Server*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d)*

* Blog - Flávio Fagundes. ***JSON-SERVER para mocks de APIs*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://medium.com/@flaviofagundes/mocks-de-apis-com-json-server-d4d180ec80c7](https://medium.com/@flaviofagundes/mocks-de-apis-com-json-server-d4d180ec80c7)*

* Plugin for VS Code - Huachao Mao. ***REST Client*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://marketplace.visualstudio.com/items?itemName=humao.rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)*

* Blog - Danilo Agostinho. ***Criando uma aplicação (Internet Banking) com Angular 6 — na prática e sem complicações*** <br/>
  Acessado: *Em Setembro de 2018 por ai...* <br/>
  Disponível: *[https://medium.com/trainingcenter/criando-uma-aplica%C3%A7%C3%A3o-internet-banking-com-angular-6-na-pr%C3%A1tica-e-sem-complica%C3%A7%C3%B5es-6fcbf98dcc12](https://medium.com/trainingcenter/criando-uma-aplica%C3%A7%C3%A3o-internet-banking-com-angular-6-na-pr%C3%A1tica-e-sem-complica%C3%A7%C3%B5es-6fcbf98dcc12)*

* Blog - Debasis Saha. ***Angular 6, Part 3: Lifecycle of a Component*** <br/>
  Acessado: *Em Março de 2021 por ai...* <br/>
  Disponível: *[https://dzone.com/articles/angular-6-part-3-life-cycle-of-a-component](https://dzone.com/articles/angular-6-part-3-life-cycle-of-a-component)*

* Blog - Tierney Cyren. ***An Absolute Beginner's Guide to Using npm*** <br/>
  Acessado: *Em Março de 2021 por ai...* <br/>
  Disponível: *[https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)*

* Blog - Jacob Neterer. ***Import via Absolute Paths in Angular*** <br/>
  Acessado: *Em Março de 2021 por ai...* <br/>
  Disponível: *[https://jacobneterer.medium.com/import-via-absolute-paths-in-angular-fc4146bf2330](https://jacobneterer.medium.com/import-via-absolute-paths-in-angular-fc4146bf2330)*

* Blog - Chris Sev. ***Reference Angular Imports Absolutely for Easier Development*** <br/>
  Acessado: *Em Março de 2021 por ai...* <br/>
  Disponível: *[https://scotch.io/tutorials/reference-angular-imports-absolutely-for-easier-development](https://scotch.io/tutorials/reference-angular-imports-absolutely-for-easier-development)*


### Licença

[<img width="190" src="https://raw.githubusercontent.com/alisonbuss/my-licenses/master/files/logo-open-source-550x200px.png">](https://opensource.org/licenses)
[<img width="166" src="https://raw.githubusercontent.com/alisonbuss/my-licenses/master/files/icon-license-mit-500px.png">](https://github.com/alisonbuss/crud-angular6/blob/master/LICENSE)
