import db from '../../../config/database'

export  default async function Costumer(req, res){
  const { rows } = await db.query(`SELECT * FROM costumer WHERE "madeContact" = false and "contacts" is not null ORDER BY random() LIMIT 1`, [])
  
  console.log(rows)
  
  return res.send(rows[0])
}