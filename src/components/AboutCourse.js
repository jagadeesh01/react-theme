import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../ThemeContext'; // Import your ThemeContext hook
import javaImg from '../assets/about_java.jpg'

const AboutCourse = () => {
  const { isDark } = useTheme(); // Use the useTheme hook to access the current theme

  return (
    <section className={`py-5 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`} >
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>About the Java Course</h2>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-md-start">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={javaImg} // Replace with your actual image path
              alt="Left Image"
              className="img-fluid"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <p>
              This Java course offers comprehensive learning opportunities in Java programming,
              covering fundamental concepts such as object-oriented programming (OOP), data structures,
              algorithms, and more advanced topics like web development with Java frameworks.
              Students will gain hands-on experience through practical projects and assignments,
              equipping them with skills essential for building robust Java applications.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCourse;
