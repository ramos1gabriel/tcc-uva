# Lista de Compras Inteligente

#### Trabalho de Conclusão de Curso (TCC) de bacharelado em Sistemas de Informação na Universidade Veiga de Almeida.

- Orientadores: Profª. Adriana Aparicio Sicsú Ayres do Nascimento e Prof. André Lucio de Oliveira
- Curso: Sistemas de Informação
- Disciplinas: Projeto Final I (2020) e Projeto Final II (2021)
- Ano: 2021

# [Em construção....]

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Descrição do projeto
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra gravida erat, sit amet efficitur tellus condimentum ac. Mauris laoreet vulputate pulvinar. Phasellus fermentum diam vitae accumsan ultricies. Aliquam fringilla ut enim a imperdiet. Sed efficitur fermentum tortor in eleifend. Morbi in lectus enim. Donec eget tortor sit amet elit convallis ultricies. Sed laoreet molestie elit ac tempor.

## Tecnologia

**Front end:**
- Node.js - Interpretador de JavaScript (utilizado fora do browser);
- Angular 7 - Framework;
- TypeScript -  Linguagem de programação (superset de JavaScript);
- Bootstrap 4

**Back end:**
- Java 8 - Linguagem de programação
- Spring Boot - Framework
- Spring Security
- Spring Data

**Banco de Dados:**
- MySQL

## Ferramentas
**Documentação:**
- Word - Microsoft Office 2013
- Astah Community (UML)

**IDE:**
- Spring Tool Suite 4 (STS4) - Java 
- Visual Studio Code (VSCode) - Angular

**Controle de Versão:**
- Git
- GitHub Desktop

**Banco de Dados:**
- MySQL
- MySQL Workbench (gerar o MER)

**Testes:**
- Postman - Testar endpoints

**Edição de imagem:**
- Adobe Photoshop CS6


## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License
MIT

## Layout
**AdminLTE v2.4.5**
**Author:** Almsaeed Studio
**Website:** Almsaeed Studio <https://adminlte.io>
**License:** Open source - MIT
Please visit http://opensource.org/licenses/MIT for more information

## Icones
*Font Awesome*
https://fontawesome.com/icons?d=gallery

## Bibliotecas Angular:
**SweetAlert**
https://sweetalert.js.org/docs/
**NgxSpinner**
https://napster2210.github.io/ngx-spinner/

## Imagens:
**Icones do perfil**
https://www.flaticon.com/packs/cooking-14
**Icones do cardápio semanal**
https://www.flaticon.com/packs/take-away-22