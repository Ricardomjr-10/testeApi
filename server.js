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

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})