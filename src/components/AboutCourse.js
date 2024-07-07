import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../ThemeContext'; // Import your ThemeContext hook
import javaImg from '../assets/about_java.jpg'

const AboutCourse = () => {
  const { isDark } = useTheme(); // Use the useTheme hook to access the current theme

  return (
    <section className={`py-5 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`} >
      <Container className='py-5'>
        <Row className="text-center mb-4">
          <Col>
            <h2>About the Java Course</h2>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-md-start">
          <Col xs={12} md={12} lg={7} xl={7} className="mb-4 mb-md-0">
            <img
              src={javaImg} // Replace with your actual image path
              alt="Left Image"
              className="img-fluid"
              style={{ maxHeight: '500px', objectFit: 'cover', borderRadius: '10px' }}
            />
          </Col>
          <Col xs={12} md={12} lg={5} xl={5} className='mt-3 mt-lg-auto'>
            <p style={{fontSize: '18px'}}>
              This Java course offers comprehensive learning opportunities in Java programming,
              covering fundamental concepts such as object-oriented programming (OOP), data structures,
              algorithms, and more advanced topics like web development with Java frameworks.
              Students will gain hands-on experience through practical projects and assignments,
              equipping them with skills essential for building robust Java applications.
            </p>
            <p className='d-block d-lg-none d-xl-block' style={{fontSize: '18px'}}>
              The course is designed for both beginners and experienced programmers looking to expand
              their knowledge and expertise in Java. It includes interactive sessions, hands-on coding
              exercises, and 24/7 support to ensure a dynamic and supportive learning environment.
              Upon completion, students receive a recognized certification, enhancing their career
              opportunities in the competitive tech industry.
            </p>
          </Col>
          <p className='d-none d-lg-block d-xl-none mt-4' style={{fontSize: '18px'}}>
              The course is designed for both beginners and experienced programmers looking to expand
              their knowledge and expertise in Java. It includes interactive sessions, hands-on coding
              exercises, and 24/7 support to ensure a dynamic and supportive learning environment.
              Upon completion, students receive a recognized certification, enhancing their career
              opportunities in the competitive tech industry.
            </p>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCourse;
