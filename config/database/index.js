import { Pool } from 'pg';
import * as dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
  console.log('Conectado a base de dados')
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}