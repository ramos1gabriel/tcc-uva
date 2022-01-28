# Lista de Compras Inteligente

#### Trabalho de Conclusão de Curso (TCC) de bacharelado em Sistemas de Informação na Universidade Veiga de Almeida.

- Orientadores: Profª. Adriana Aparicio Sicsú Ayres do Nascimento e Prof. André Lucio de Oliveira
- Curso: Sistemas de Informação
- Disciplinas: Projeto Final I (2020) e Projeto Final II (2021)
- Ano: 2021

## Descrição do projeto
A Lista de Compras Inteligente tem como objetivo otimizando gastos com compras, diminuir o desperdício de alimentos, poupar o tempo com compras diárias e planejar um cardápio de refeições mais saudáveis.
O sistema deve abranger:
- As rotinas relacionadas a login e logout.
- As rotinas relacionadas à criação e atualização dos usuários.
- As rotinas relacionadas a criação, consulta, atualização e destruição de dados (CRUD) dos ingredientes.
- As rotinas relacionadas a criação, consulta, atualização e destruição de dados (CRUD) das receitas.
- As rotinas relacionadas a criação, consulta, atualização e destruição de dados (CRUD) dos cardápios semanais.
- Gerar relatórios das listas de compras contendo todos os ingredientes necessários para o preparo de todas as receitas descritas no cardápio semanal selecionado.

## Tecnologias

**Front-end:**
- Node.js - Interpretador de JS (utilizado fora do browser)
- Angular 7 - Framework
- TypeScript - Linguagem de programação (superset de JavaScript)
- Bootstrap 4 - Framework web

**Back-end:**
- Java 8 - Linguagem de programação
- Spring Boot - Framework
- Spring Security
- Spring Data

**Banco de Dados:**
- MySQL

**Gestão:**
- Trello

## Ferramentas
**Documentação:**
- Word - Microsoft Office 2013
- PowerPoint - Microsoft Office 2013
- Astah Community (UML)

**IDE:**
- Spring Tool Suite 4 (STS4) - Java 
- Visual Studio Code (VSCode) - Angular

**Controle de Versão:**
- Git
- GitHub Desktop

**Banco de Dados:**
- MySQL Workbench (gerar o MER)

**Testes:**
- Postman - Testar endpoints

**Edição de imagem:**
- Adobe Photoshop CS6


## Instalação

Lista de Compras Inteligente requer os itens abaixo instalados para ser executado:
- [MySQL](https://dev.mysql.com/downloads/installer/) v8+
- [Java](https://www.oracle.com/java/technologies/downloads/) v8+
- [Node.js](https://nodejs.org/) v10+

#### Instalando o Angular CLI
```sh
npm install -g @angular/cli
```
> Atenção: No **package.json** definir a versão do Angular para `7.2.0`!


#### Instalando as dependências
```sh
npm install sweetalert --save
npm install ngx-spinner --save
```

#### Configurando back-end
Importar o projeto java e rodar um **maven install** para baixar todas dependências e logo após subir o projeto.
> Observação: Não é necessário configurar o banco, pois o java já cria o database e as tabelas (caso não existam).


#### Subir front-end
```sh
ng serve
```
> Acesso via URL: http://localhost:4200/

# Documentação
- **Documentação do Projeto:** DOCUMENTACAO\PF2\tcc_lista_compras_inteligente_v5.pdf
- **Diagramas UML:** DOCUMENTACAO\UML\diagramas.asta *(abrir com Astah Community)*
- **Requests do serviços:** SCRIPTS\TCC.postman_collection.json *(abrir com Postman)*
- **Massa de teste:** SCRIPTS\SCRIPT_FIT_COMPLETO_2021.sql


# Licenses

## Layout
- **AdminLTE v2.4.5**
- **Author:** Almsaeed Studio
- **Website:** [adminlte.io](https://adminlte.io)
- **License:** [Open source - MIT](http://opensource.org/licenses/MIT)

## Fonte/Icones
- [Font Awesome](https://fontawesome.com/icons?d=gallery)

## Bibliotecas Angular:
- [SweetAlert](https://sweetalert.js.org/docs/)
- [NgxSpinner](https://napster2210.github.io/ngx-spinner/)

## Imagens:
- [Imagens do perfil (flaticon)](https://www.flaticon.com/packs/cooking-14/)
- [Imagens do cardápio semanal (flaticon)](https://www.flaticon.com/packs/take-away-22/)
