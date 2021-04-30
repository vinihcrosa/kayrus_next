import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import axios from 'axios'

const api = axios.create({baseURL:process.env.REACT_APP_BACK})

function MyVerticallyCenteredModal(props) {
  const { name, faculdade, uf, email, contacts} = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cliente KayrusHub
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Cliente</h4>
        <p>
          {name} <br/>
          {faculdade}
          {uf}<br/>
          {contacts.map((c) =>(<>{c}<br/></>))}<br/>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function GetCostumer() {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState('');
  const [faculdade, setFaculdade] = useState('');
  const [uf, setUf] = useState('');
  const [contacts, setContacts] = useState([]);

  async function handleGet(){
    try{
      const costumer = await api.get('/api/costumer',
      )
      console.log(costumer)
      setName(costumer.data.name);
      setFaculdade(costumer.data.faculdade);
      setUf(costumer.data.uf);
      setContacts(costumer.data.contacts);
      setModalShow(true)
    }catch(error){
      console.log("erro do caralho", error)
    }
  }

 

  return (
    <>
    <Container>
      <Row>
        <Col className="md-auto">
          <Button className="btn-block btn-dark p-3 col-md-auto m-5" onClick={handleGet}>
            Get
            </Button>
        </Col>
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={name}
        faculdade={faculdade}
        uf={uf}
        contacts={contacts}
      />
    </Container>
    </>
    )
}
