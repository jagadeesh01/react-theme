import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TrainingOptions = () => (
  <section className="py-5">
    <Container>
      <h2>Training Options</h2>
      <Row>
        <Col md={6}>
          <h5>Online Training</h5>
          <p>Flexible online training sessions with live instructor-led classes.</p>
        </Col>
        <Col md={6}>
          <h5>In-Person Training</h5>
          <p>On-site training with hands-on exercises and peer collaboration.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default TrainingOptions;
