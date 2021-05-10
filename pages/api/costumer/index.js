import db from '../../../config/database'

export  default async function Costumer(req, res){
  try{
    const { rows } = await db.query(`SELECT * FROM "Lead" WHERE "madeContact" = false and "isValid" = true and "telefones" is not null ORDER BY random() LIMIT 1`, [])
  
    console.log(rows)
  
    return res.send(rows[0])
  }catch(err){
    console.log(err)
    return res.status(400).send(err)
  }
  
}