import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';

const CourseCurriculum = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2>Course Curriculum</h2>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Module 1: Introduction to Tech
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Details about Module 1.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Module 2: Advanced Topics
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Details about Module 2.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  </section>
);

export default CourseCurriculum;
