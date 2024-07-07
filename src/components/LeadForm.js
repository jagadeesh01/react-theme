import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LeadForm = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2>Lead Form</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  </section>
);

export default LeadForm;
