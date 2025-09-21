# 🎧 Mini-Player | Aula Prática SENAI/PE

Este projeto é um Mini-Player com sistema de ranking de músicas, desenvolvido como parte da aula prática de Desenvolvimento Web com Integração de Banco de Dados no SENAI/PE.

O sistema simula um ranking dinâmico de músicas baseado em reproduções, demonstrando uma arquitetura em três camadas, na qual o front-end (interface) se comunica com o back-end (servidor) para gravar e recuperar dados de um banco de dados.

## 🚀 Funcionalidades

- 🎵 Lista de músicas disponíveis para reprodução  
- 🔁 Botão "Ouvir", que registra uma reprodução (play)  
- 📊 Ranking de músicas baseado no número de reproduções  
- 🔄 Atualização automática da lista ranqueada  

## 💻 Tecnologias Utilizadas

O sistema utiliza uma arquitetura em três camadas:

- **Front-end:** HTML, CSS, JavaScript  
- **Back-end:** Node.js, Express.js  
- **Banco de Dados:** SQLite  

## ▶️ Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados

### Passos

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/fabioluzzoom/mini-player-senai.git
    ```

2. **Acesse a pasta do projeto:**
    ```bash
    cd mini-player-senai
    ```

3. **Instale as dependências:**
    ```bash
    npm install
    ```

4. **Inicie o servidor:**
    ```bash
    npm start
    ```

5. **Abra no navegador:**
    - http://localhost:3000

## 🌐 Rotas da API

- `POST /mini-player/play`  
  Registra uma nova reprodução de uma música.

- `GET /mini-player/ranking`  
  Retorna o ranking de músicas com base no número de reproduções.

- `GET /mini-player/playlist`  
  Retorna a lista de músicas ordenada pela última vez que foram reproduzidas.

## 📂 Estrutura de Pastas

```
mini-player/
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── backend/
│   ├── server.js
│   ├── db.sql
│   └── db.sqlite
├── package.json
```

## 👨‍💻 Autor
* **Fabio Luz**
