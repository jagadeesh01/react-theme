import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserGraduate, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../ThemeContext';

const highlights = [
  { icon: faChartLine, title: 'Market Size', text: 'The demand for Java developers is consistently high, with a growing market size due to its widespread use in enterprise applications.' },
  { icon: faUserGraduate, title: 'Career Growth', text: 'Java developers enjoy significant career growth opportunities, with roles ranging from junior developers to senior architects and technical leads.' },
  { icon: faDollarSign, title: 'New Jobs & Avg Payscale', text: 'The average salary for Java developers is competitive, with new job opportunities emerging regularly in various industries.' },
];

const FutureOfCourse = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-5">
      <Container className="py-5">
        <Card className={`col-xs-12 col-lg-10 mx-auto p-4 border-0 radius-16 shadow ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
          <Card.Body>
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: 'bold' }}>
              Future of the Java Course
            </h2>
            {highlights.map((highlight, index) => (
              <Row className="align-items-center mb-4" key={index} >
                <Col xs={1} className="d-flex justify-content-center align-items-center padding-0">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '10%',
                      backgroundColor: isDark ? '#343a40' : '#f8f9fa',
                      boxShadow: isDark ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <FontAwesomeIcon icon={highlight.icon} size="lg" className={`${isDark ? 'text-white' : 'text-dark'}`} />
                  </div>
                </Col>
                <Col xs={10} className='mt-3'>
                  <Card.Title className={`${isDark ? 'text-white' : 'text-dark'}`}>{highlight.title}</Card.Title>
                  <Card.Text>{highlight.text}</Card.Text>
                </Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default FutureOfCourse;
