# API de Busca de Startups (Projeto de Estudos em Express.js)

Este repositório contém o código desenvolvido durante meus estudos introdutórios sobre **Express.js**. O objetivo deste projeto foi compreender os fundamentos da criação de APIs, o funcionamento do protocolo HTTP e a implementação de um CRUD básico utilizando Node.js.

## 🚀 Funcionalidades

A API permite gerenciar um cadastro de startups, oferecendo as operações fundamentais de **CRUD** (Create, Read, Update, Delete):

*   **Listar** todas as startups cadastradas.
*   **Buscar** startups por campos específicos (ex: indústria, nome).
*   **Criar** uma nova startup.
*   **Atualizar** os dados de uma startup existente.
*   **Remover** uma startup do cadastro.

Os dados são persistidos em um arquivo JSON local (`data/data.json`), simulando um banco de dados simples.

## 🛠️ Como Executar

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor:
    ```bash
    npm start
    ```
    Ou para desenvolvimento (com nodemon):
    ```bash
    npm run dev
    ```

O servidor rodará por padrão na porta **8000**.

## 📡 Endpoints da API

Aqui estão as rotas disponíveis na aplicação (Base URL: `/api`):

### 1. Listar todas as Startups
Retorna a lista completa de startups cadastradas.

*   **Método:** `GET`
*   **URL:** `/api`

### 2. Buscar Startups
Permite filtrar startups por um campo específico.

*   **Método:** `GET`
*   **URL:** `/api/:field/:term`
*   **Exemplo:** `/api/industry/AI` (Busca startups da indústria de AI)

### 3. Cadastrar Nova Startup
Adiciona uma nova startup ao "banco de dados".

*   **Método:** `POST`
*   **URL:** `/api/newStartup`
*   **Corpo da Requisição (JSON):**
    ```json
    {
        "name": "Nova Tech",
        "industry": "FinTech",
        "country": "Brasil",
        "continent": "South America",
        "is_seeking_funding": true,
        "has_mvp": true,
        "website": "https://novatech.com.br",
        "description": "Soluções financeiras inovadoras."
    }
    ```
*   **Regras:** Campos como `name`, `industry`, `country`, `continent`, `is_seeking_funding` e `has_mvp` são obrigatórios.

### 4. Atualizar Startup
Atualiza os dados de uma startup existente através do seu ID.

*   **Método:** `PUT`
*   **URL:** `/api/updateStartup/:id`
*   **Exemplo:** `/api/updateStartup/1`
*   **Corpo da Requisição (JSON):** Deve conter o objeto completo atualizado (semelhante ao POST).

### 5. Deletar Startup
Remove uma startup do cadastro.

*   **Método:** `DELETE`
*   **URL:** `/api/deleteStartup/:id`
*   **Exemplo:** `/api/deleteStartup/1`

## 📂 Estrutura do Projeto

*   `controllers/`: Contém a lógica de negócio de cada rota (ler arquivo, filtrar, salvar, validar).
*   `data/`: Armazena o arquivo `data.json` que serve como banco de dados.
*   `routes/`: Define as rotas da API e liga aos seus respectivos controllers.
*   `server.js`: Ponto de entrada da aplicação.
