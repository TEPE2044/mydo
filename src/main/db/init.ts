// src/main/db/init.ts
import { getDatabase } from './index';

export function initDatabase() {
  const db = getDatabase();

  // 创建表（IF NOT EXISTS 保证不会重复创建）
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      user_id INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  console.log('Database initialization complete.');
}
