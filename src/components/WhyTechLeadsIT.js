import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyTechLeadsIT = () => (
  <section className="py-5">
    <Container>
      <h2>Why Tech Leads IT</h2>
      <Row>
        <Col md={4}>
          <h5>Experienced Instructors</h5>
          <p>Learn from industry experts with years of experience.</p>
        </Col>
        <Col md={4}>
          <h5>Comprehensive Curriculum</h5>
          <p>Covering all the essential topics and latest trends.</p>
        </Col>
        <Col md={4}>
          <h5>Flexible Learning</h5>
          <p>Choose between online and in-person training options.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default WhyTechLeadsIT;
