import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const api = axios.create({baseURL:process.env.REACT_APP_BACK})

export default function GetCostumer() {
  const [lead, setLead] = useState({
    name: null,
    cpf: null,
    faculdade: null,
    uf: null,
    isValid: null,
    madeContact: null,
    emails: [],
    telefones: []
  })
  const [isValid, setIsValid] = useState(true);
  const [madeContact, setMadeContact] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(async () => {
    const newLead = await api.get('/api/costumer');
    setLead(newLead.data)
    console.log("lead- ----> ", lead)
  }, [updated])

  function handleIsValid(event){
    setIsValid(event.target.checked);
  }

  function handleMadeContact(event){
    setMadeContact(event.target.checked);
  }

  function handleUpdate(){
    api.put('/api/lead', {isValid, madeContact, leadId: lead.id})
    setUpdated(!updated)
  }

  return (
    <div className="container">
      
      <h1>Nome: {lead.name}</h1>
      {<h1>UF: {lead.uf}</h1>}
      {lead.emails.map((email, index) => (<h1 key={index}>email {index + 1}: {email} </h1>))}
      {lead.telefones.map((tel, index) => (<h1 key={index}>telefone {index + 1}: {tel} </h1>))}
      <div className="form-check h1">
        <label for="isValid" className="form-check-label h1">Usuário é valido? </label>
        <input name="isValid" className="checkbox h1" type="checkbox" onChange={handleIsValid}/><br />
      </div>
      <div className="form-check h1">
        <label for="madeContact" className="form-check-label h1"{...isValid?"checked":""}>Foi feito o contato? </label>
        <input name="madeContact" className="checkbox " type="checkbox" onChange={handleMadeContact} /><br />
      </div>
      <button onClick={handleUpdate}>Salvar e ir para o Próximo</button>
    </div>
    )
}
