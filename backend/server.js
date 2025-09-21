// Importa os módulos
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Configura o servidor
const app = express();
const PORT = 3000;

// Configura os middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Inicializa o banco
const dbPath = path.join(__dirname, "db.sqlite");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Banco de dados conectado com sucesso!");
    const sqlScript = fs.readFileSync(path.join(__dirname, "db.sql"), "utf8");
    db.exec(sqlScript, (err) => {
      if (err) {
        console.error("Erro ao executar script SQL:", err.message);
      } else {
        console.log("Script SQL executado com sucesso!");
      }
    });
  }
});

// Rota para pegar a playlist
app.get("/mini-player/playlist", (req, res) => {
  const query = `
    SELECT m.id, m.titulo, MAX(p.data) as ultima_reproducao
    FROM musicas m
    LEFT JOIN plays p ON m.id = p.musica_id
    GROUP BY m.id
    ORDER BY ultima_reproducao DESC
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar músicas recentes" });
    }
    res.json(rows);
  });
});

// Rota para pegar o ranking
app.get("/mini-player/ranking", (req, res) => {
  const query = `
    SELECT m.id, m.titulo, COUNT(p.id) as plays
    FROM musicas m
    LEFT JOIN plays p ON m.id = p.musica_id
    GROUP BY m.id
    ORDER BY plays DESC
  `;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar ranking!" });
    }
    res.json(rows);
  });
});

// Rota para registrar "play"
app.post("/mini-player/play", (req, res) => {
  const { musica_id } = req.body;
  if (!musica_id) {
    return res.status(400).json({ error: "musica_id é obrigatório!" });
  }

  const insertQuery = "INSERT INTO plays (musica_id) VALUES (?)";
  db.run(insertQuery, [musica_id], (err) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao registrar play!" });
    }
    res.json({ message: "Play registrado com sucesso!" });
  });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});