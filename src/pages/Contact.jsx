import React from 'react'
import Title from '../components/Title/Title'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import DarkLine from '../components/DarkLine/DarkLine'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <section className='contact py-5'>
      <Helmet>
        <title>OMAR - Contact</title>
      </Helmet>
      <Container>
        <Title titleName="Contact"/>
        <DarkLine/>
        <Row className='justify-content-center'>
          <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className='border-0 border-bottom' type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control className='border-0 border-bottom' type="number" placeholder="Age" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Control className='border-0 border-bottom' type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Control className='border-0 border-bottom' type="password" placeholder="Password" />
            </Form.Group>
            <Button className='btnSubmit border-0'>Submit</Button>
          </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact