import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TrendingCourses = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2>Related/Trending Courses</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Course 1</Card.Title>
              <Card.Text>Learn more about Course 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Course 2</Card.Title>
              <Card.Text>Learn more about Course 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Course 3</Card.Title>
              <Card.Text>Learn more about Course 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default TrendingCourses;
