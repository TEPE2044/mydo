import {app} from 'electron'
import path from 'path'
import fs from 'fs'
import Database from 'better-sqlite3'

const dbPath = path.join(app.getPath('userData'),'database','app.db')

// 寻找目录，如果没目录就创建
const dbDir = path.dirname(dbPath)
if(!fs.existsSync(dbDir)){
  fs.mkdirSync(dbDir, {recursive: true})
}

let db: Database.Database | null = null

export function getDatabase(): Database.Database{
  if(!db){
    db = new Database(dbPath)
    db.pragma('journal_mode = WAL')
    console.log('Database path:', dbPath)
  }
  return db
}
