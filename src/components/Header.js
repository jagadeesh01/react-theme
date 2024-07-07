import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTheme } from '../ThemeContext';
import backgroundImage from '../assets/img1.jpg'; // Replace with your actual image path

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className="header-bg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>
      <Container className="header-form" style={{ position: 'relative', zIndex: 2 }}>
        <div className="justify-content-center me-sm-0">
          <Col md={10} className='mx-auto'>
            <div
              className={`p-4 ${isDark ? 'bg-dark' : 'bg-light'} d-none d-md-block`}
              style={{
                opacity: 0.9,
                borderRadius: '10px',
                border: '1px solid #000',
              }}
            >
              <h2 className={`text-center mb-2 ${isDark ? 'text-white' : 'text-dark'}`} style={{ fontSize: '32px' }}>
                Join Our Java Course
              </h2>
              <p className={`mb-4 ${isDark ? 'text-white' : 'text-dark'}`} style={{ fontSize: '16px', textAlign: 'center' }}>
                Our comprehensive Java course is designed for both beginners and experienced programmers.
                You'll start with the basics of Java programming and progress to advanced topics like 
                object-oriented programming, data structures, algorithms, and web development with Java. 
                By the end of this course, you will have the skills and confidence to build robust and 
                scalable Java applications.
              </p>
              <Form>
                <Row className="justify-content-center align-items-center">
                  <Col xs={6} className='pe-0'>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className={`mb-2 ${isDark ? 'bg-secondary text-white dark-placeholder' : 'bg-light text-dark light-placeholder'}`}
                      style={{ borderRadius: '10px 0 0 10px' }}
                    />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={2} className='ps-0'>
                    <Button
                      variant={isDark ? 'light' : 'dark'}
                      type="submit"
                      className="w-100 mb-2"
                      style={{ borderRadius: '0 10px 10px 0' }}
                    >
                      Get Started
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>

            <div className="d-block d-md-none text-center text-white">
              <h2 className="mb-2" style={{ fontSize: '32px' }}>
                Join Our Java Course
              </h2>
              <p className="mb-4" style={{ fontSize: '16px' }}>
                Our comprehensive Java course is designed for both beginners and experienced programmers.
                You'll start with the basics of Java programming and progress to advanced topics like 
                object-oriented programming, data structures, algorithms, and web development with Java. 
                By the end of this course, you will have the skills and confidence to build robust and 
                scalable Java applications.
              </p>
              <Form className="d-flex flex-column align-items-center">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className={`mb-2 bg-secondary text-white dark-placeholder`}
                  style={{ width: '80%', borderRadius: '10px' }}
                />
                <Button
                  variant="light"
                  type="submit"
                  className="w-50 mb-2"
                  style={{ borderRadius: '10px' }}
                >
                  Get Started
                </Button>
              </Form>
            </div>
          </Col>
        </div>
      </Container>
    </header>
  );
};

export default Header;
