import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LearningPath = () => (
  <section className="py-5">
    <Container>
      <h2>Learning Path</h2>
      <Row>
        <Col md={6}>
          <p>Step-by-step guide to mastering the skills covered in the course.</p>
        </Col>
        <Col md={6}>
          <p>Start with basics, move to intermediate, and then to advanced topics.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default LearningPath;
