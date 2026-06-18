// src/main/db/init.ts
import { getDatabase } from './index';

export function initDatabase() {
  const db = getDatabase();

  // 创建表（IF NOT EXISTS 保证不会重复创建）
  db.exec(`
    CREATE TABLE IF NOT EXISTS plans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      d_time datetime,
      created_at datetime NOT NULL,
      updated_at datetime NOT NULL
    );
  `);

  console.log('Database initialization complete.');
}
