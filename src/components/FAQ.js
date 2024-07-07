import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';

const FAQ = () => (
  <section className="py-5">
    <Container>
      <h2>Frequently Asked Questions</h2>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            What is the duration of the course?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>The course duration is 3 months.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            What are the prerequisites?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Basic knowledge of programming is required.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  </section>
);

export default FAQ;
