import db from '../../../config/database'

export  default async function Costumer(req, res){
  try{
    const { rows } = await db.query(`SELECT * FROM costumer WHERE "madeContact" = false and "contacts" is not null ORDER BY random() LIMIT 1`, [])
  
    console.log(rows)
  
    return res.send(rows)
  }catch(err){
    console.log(err)
    return res.status(400).send(err)
  }
  
}