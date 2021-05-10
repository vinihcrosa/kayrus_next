import db from '../../config/database'

export  default async function Costumer(req, res){
  const {isValid, madeContact, leadId} = req.body;
  console.log({
    isValid,
    madeContact,
    leadId
  })

  let query = `UPDATE "Lead" SET "isValid" = '${isValid}', "madeContact" = '${madeContact}' WHERE id = ${leadId}`

  try{
    db.query(query, [])
  }catch(err){
    console.log(err)
  }

  return res.json({ok:true})
}