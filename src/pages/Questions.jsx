import React from 'react'
import {Button} from 'react-bootstrap'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import './Questions.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Questions() {
  return (
    <div className='ques_cards'>
    <h2>Interview Questions for Telemedicine System Users</h2>
    <Container>
      <Row className="justify-content-center">
        <Col md={9}>
          <div className='c1'>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Privacy</Card.Title>
        <Card.Text>
        Privacy in terms of healthcare means that what you tell your healthcare provider, what they write down about you, 
        any medication you take and all other personal information is kept private. You have a legal right to this privacy, 
        and there are laws that guide health service providers in how they collect and record information about your health, 
        how they must store it, and when and how they use and share it. 

          <Alert className="my-custom-alert">I have read the agreed privacy policies of the telemedicine application</Alert>
          
          <Alert className="my-custom-alert">I have read the agreed security policies of the telemedicine application</Alert>
          <Alert className="my-custom-alert">My health provider ask me to consult specific outside organization such as laboratories and clinics</Alert>
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className='c2'>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Storage</Card.Title>
        <Card.Text>
          You own your health information and decide who can access it. You always have the right to access it 
          yourself by asking for a copy. You can keep a personal health record at home or via the free eHealth system, 
          which is a secure online summary of your health information, run by the Commonwealth Government.
          <br/>
          When maintaining stored data it is important to implement data back-up plans, data recovery plans and remote
           erase features. Data backup requires the copying and archieving of computer data to make it 
           accessible in case of data corruption or deletion. Then you can only recover data from an earlier time if you have backed import PropTypes from 'prop-types'
           up with a reliable backup device.<br/>

           Remote erase is also a crucial facility when it comes to sensitive information as when our
           personal device which we store our sensitive data get stolen or misplaced still we should be
           able to protect our data. Therefore if your telemedicine application provides remote accesss 
           facility still you can protect medical records from unauthorized access. 
          <Alert>I know the average size of documents or images which I share via the telemedicine application</Alert>
          <Alert>I consider the size of documents or images before sending them to doctors or nurses</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className='c3'>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Consent</Card.Title>
        <Card.Text>

          When you go to hospital, you can choose to give the staff access to your health records. You do not have to, 
          but giving them your consent to access your information will help them provide the best care possible for you. 
          Hospital staff are required to protect patients' privacy and confidentiability.<br/>
          While you are in hospital, staff will create a file that includes information about any tests,
          treatment and medication they give you. You can access this information  by asking for a 
          copy and addding it to your personal health or eHealth record.

          <Alert>My telemedicine application asks for consent while recording and takes pictures while handling treatment sessions</Alert>
          <Alert>My telemedicine system allows me to get tested from outsiders(Clinicals/Laboratories)</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className='c4'>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Encryption</Card.Title>
        <Card.Text>
          The main purpose using encryption is to provide data security for sensitive information.
          Encryption methods convert our data into a format which can be readable only for authorized parties.
           For data communicated over a network, modern encryption scrambles data using a secret value
           or key known only by the recipient and the sender. For stored data , the secret value is 
           typically known by the data owner. There are different types of encryption and the best systems
           balance safety and efficiency.<br/>

           Encryption methods can easily be found on e-commerce and secure-messaging related applications
           as we trust companies to protect our financial information when we buy things online banking 
           whereas when we use a messaging app, we expect the messages to be private that only the reciever 
           should read our messages.
          <Alert>I have heard following. DES(Data Encryption Standard), AES(Advanced Encryption Standard),
             RSA(Rivest-Shamir-Adleman)security, Blowfish, Twofish</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className='c5'>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Authentication/ Access Control</Card.Title>
        <Card.Text>

          Authentication simply means verifying a someone or something is who they say they are. In 
          order accomplish this task, there are several types of authentication forms are available.
          Typically, to verify your identity, authentication processes use:something you know-something you have-something you are.
           The most common example is using username and password when logging into a website or application. 
           Additionally sending OTP(One Time Password) via SMS or an app.
          <Alert>My telehealth system requires Passwords,OTP, Fingerprint scanning before logging into the telehealth session</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className='c6'>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Authorization</Card.Title>
        <Card.Text>

      Authorization focuses on determining a user or service's level of access. In technology, we
       use Authorization to give users or services permission to access some data or perform a 
       particular action. When it comes to telemedicine, patient's medical records are only 
       accessible for the respective doctors and nurses, and they should not be accesssible to other
       patients or other staff members. This behaviour is provided by authorization. 

          <Alert>The telemedicine system have certain functionalities which are not accessible for patients but for doctors or nurses.(Disabled buttons, Non-editable text fields)</Alert>
          
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className='c7'>
    <Card style={{width:'60rem'}}>
      
      <Card.Body>
        <Card.Title>Secure Network</Card.Title>
        <Card.Text>
          No matter how strong your Telemedicine system is built, still there could be gateways where 
          intruders can get in. Lack of proper web security measurements always welcome outside 
          attacks and could cause severe damages to a web application.<br/>

          In general, web security refers to the protective measures and protocols that organizations
           adopt to protect the organization from cyber criminals and threats. Web security is critical to 
           telemedicine applications in terms of protecting data, user's privacy and form risk.<br/>

           Use virus guard software, activate firewalls and use VPN(Virtual Private Network) accordingly
           are the best precautions that would take in advance to prevent above mentioned acccidents 
           and treats.<br/>
           Have you heard following?
           DES(Data Encryption Standard), AES(Advanced Encryption Standard), RSA(Rivest-Shamir-Adleman)security, 
           Blowfish, Twofish<br/>

          
          <Alert>My telemedicine system requires passwords or OTPs before opening or sending PHI-Personal Health Information related documents</Alert>
          <Alert>I have installed anti-virus, anti-malware programs on the device which is used to logging into telemedicine system</Alert>
          <Alert>I am aware about data restoring options</Alert>
          
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    </Col>
    </Row>
    </Container>
    </div>
  )
}
