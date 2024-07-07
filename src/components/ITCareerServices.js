import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ITCareerServices = () => (
  <section className="py-5">
    <Container>
      <h2>Tech Leads IT Career Services Program</h2>
      <Row>
        <Col md={4}>
          <h5>Job Assistance</h5>
          <p>Helping you find the right job after course completion.</p>
        </Col>
        <Col md={4}>
          <h5>Mock Interviews</h5>
          <p>Prepare for interviews with our mock interview sessions.</p>
        </Col>
        <Col md={4}>
          <h5>Resume Building</h5>
          <p>Get help with building a professional resume.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ITCareerServices;
