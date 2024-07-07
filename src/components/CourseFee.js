import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CourseFee = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2>Course Fee</h2>
      <Row>
        <Col md={6}>
          <h5>Standard Fee</h5>
          <p>$2000 for the complete course</p>
        </Col>
        <Col md={6}>
          <h5>Discounted Fee</h5>
          <p>$1500 for early registrations</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default CourseFee;
