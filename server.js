const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const csv = require('csv-parser')
const fs = require('fs')
const multer = require('multer')// para upload de arquivos

const app = express()
const port = 3000
const db = new sqlite3.Database('./data.db')

app.use(express.json())

const upload = multer({ dest: './uploads' })

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    genre TEXT,
    year INTEGER,
    country TEXT,
    published_at TEXT,
    description TEXT
    )
    `)

app.post('/import_csv', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo CSV foi encontrado.')
    }

    const results = []
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            db.serialize(() => {
                const stmt = db.prepare("INSERT INTO users (title,genre,year,country,publishade_at,descripition) VALUES (?, ?, ?, ?, ?, ?)")
                results.forEach(row => {
                    stmt.run(row.title, row.genre, row.year, row.country, row.published_at, row.description, (err) => {
                        if (err) {
                            console.error('Erro ao inserir linha:', err)
                        }
                    })
                })
                stmt.finalize()

                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Erro ao deletar arquivo temporário:', err);
                    }
                })
                res.status(201).send('Arquivo CSV importado e banco de dados populado com sucesso.')
            })
        })
        .on('error', (error) => {
            console.error('Erro ao processar CSV:', error);
            res.status(500).send('Erro ao processar o arquivo CSV.');
        });
})

pp.get('/users', (req, res) => {
    db.all("SELECT id, title, genre, year, country, published_at, description FROM users", [], (err, rows) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });
  

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})