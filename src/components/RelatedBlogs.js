import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RelatedBlogs = () => (
  <section className="py-5">
    <Container>
      <h2>Related Blogs</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blog 1</Card.Title>
              <Card.Text>Read more about Blog 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blog 2</Card.Title>
              <Card.Text>Read more about Blog 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blog 3</Card.Title>
              <Card.Text>Read more about Blog 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default RelatedBlogs;
