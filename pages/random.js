import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import axios from 'axios'

const api = axios.create({baseURL:process.env.REACT_APP_BACK})

export default async function Random(){
  const [lead, setLead] = useState({})
  
  useEffect(async () => {
    const costumer = await api.get('/api/costumer',)
    
  }, [])

  const costumer = await api.get('/api/costumer',)
  return (<h1>Teste, {{costumer}}</h1>)
}