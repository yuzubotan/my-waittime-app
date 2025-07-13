const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("tel.db");

db.serialize(() => {
  // テーブルの作成などデータベースの初期化処理を行うことができます
  db.run(`
    CREATE TABLE IF NOT EXISTS tel (
      id INTEGER PRIMARY KEY,
      time TIMESTAMP, 
      number NUMERIC NOT NULL,
      name  TEXT,
      detail TEXT,
      checked numeric default 0
    )
  `);
});

module.exports = db;
