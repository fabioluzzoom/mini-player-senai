-- Criação da tabela de músicas
CREATE TABLE IF NOT EXISTS musicas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL
);

-- Criação da tabela de reproduções
CREATE TABLE IF NOT EXISTS plays (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  musica_id INTEGER,
  data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (musica_id) REFERENCES musicas(id)
);

-- Inserção condicional de músicas
INSERT INTO musicas (titulo)
SELECT 'BTS – Spring Day'
WHERE NOT EXISTS (SELECT 1 FROM musicas WHERE titulo = 'BTS – Spring Day');

INSERT INTO musicas (titulo)
SELECT 'The Weeknd – Blinding Lights'
WHERE NOT EXISTS (SELECT 1 FROM musicas WHERE titulo = 'The Weeknd – Blinding Lights');

INSERT INTO musicas (titulo)
SELECT 'BLACKPINK – Shut Down'
WHERE NOT EXISTS (SELECT 1 FROM musicas WHERE titulo = 'BLACKPINK – Shut Down');

INSERT INTO musicas (titulo)
SELECT 'Billie Eilish – Bad Guy'
WHERE NOT EXISTS (SELECT 1 FROM musicas WHERE titulo = 'Billie Eilish – Bad Guy');
