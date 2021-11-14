import { MongoClient, Database } from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

import DATABASE_PASSWORD from '../config/database_password.js';
const MONGODB_URI = `mongodb+srv://admin:${DATABASE_PASSWORD}@cluster0.wbnis.mongodb.net?retryWrites=true&w=majority`;

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectwithUri(MONGODB_URI);

  db = client.database('todo-app');
}

export function getDb() {
  return db;
}
