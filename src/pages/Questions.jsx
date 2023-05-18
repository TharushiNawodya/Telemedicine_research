import React from 'react'
import {Button} from 'react-bootstrap'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import './Questions.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Questions() {
  return (
    <div>
    <Container>
      <Row className="justify-content-center">
        <Col md={9}>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Privacy</Card.Title>
        <Card.Text>
          <Alert>I have read the agreed privacy policies of the telemedicine application</Alert>
          <Alert>I have read the agreed security policies of the telemedicine application</Alert>
          <Alert>My health provider ask me to consult specific outside organization such as laboratories and clinics</Alert>
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Storage</Card.Title>
        <Card.Text>
          <Alert>I know the average size of documents or images which I share via the telemedicine application</Alert>
          <Alert>I consider the size of documents or images before sending them to doctors or nurses</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Consent</Card.Title>
        <Card.Text>
          <Alert>My telemedicine application asks for consent while recording and takes pictures while handling treatment sessions</Alert>
          <Alert>My telemedicine system allows me to get tested from outsiders(Clinicals/Laboratories)</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Encryption</Card.Title>
        <Card.Text>
          <Alert>I have heard following. DES(Data Encryption Standard), AES()</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


    </Col>
    </Row>
    </Container>
    </div>
  )
}
