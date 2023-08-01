<h3 align="center">
  Back-end Express
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/lucasfdcampos/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Lucas%20Campos-%2329589D">
  </a>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lucasfdcampos/backend-express?color=%2329589D">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucasfdcampos/backend-express?color=%2329589D">
  <a href="https://github.com/lucasfdcampos/backend-express/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasfdcampos/backend-express?color=%2329589D">
  </a>
  <a href="https://github.com/lucasfdcampos/backend-express/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lucasfdcampos/backend-express?color=%2329589D">
  </a>
</p>

<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-end-points">End-points</a>
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=backend-express&uri=https%3A%2F%2Fraw.githubusercontent.com%2Flucasfdcampos%2Fbackend-express%2Fmaster%2Fcollection.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p>

## Sobre

API para um App CRM utilizado por vendedores para registrar Leads.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Axios](https://www.npmjs.com/package/axios)
- [TypeORM](https://typeorm.io/#/)
- [Multer](https://www.npmjs.com/package/multer)
- [Celebrate](https://github.com/arb/celebrate)

## Rodando

### **Docker**

```bash
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### DataBase

```bash
CREATE DATABASE dev
```

### Projeto
> Para start o servidor

```bash
yarn && yarn dev:server
```

## End-points

Importe o `collection.json` no Insomnia ou clique em [Run in Insomnia](#insomniaButton)


### **Usuário**

**Autenticação [POST]**
```bash
/sessions
```

**Register [POST]**
```bash
/users
```

**Update [PUT]**
```bash
/users
```

**Delete [DELETE]**
```bash
/users
```

### **Planos**

**Create [POST]**
```bash
/plans
```

**Update [PUT]**
```bash
/plans
```

**Delete [DELETE]**
```bash
/plans
```

**List [GET]**
```bash
/plans
```

### **Clients**

**Create [POST]**
```bash
/clients
```

**Update [PUT]**
```bash
/clients
```

**Delete [DELETE]**
```bash
/clients
```

**Avatar [PATCH]**
```bash
/clients/avatar
```

**List [GET]**
```bash
/clients
```

**CEP [GET]**
> [BrasilAPI](https://github.com/BrasilAPI/BrasilAPI)
```bash
/cep/:zip
```

### **Leads**

**Create [POST]**
```bash
/leads
```

**Update [PUT]**
```bash
/leads
```

**Delete [DELETE]**
```bash
/leads
```

**List [GET]**
```bash
/leads
```
