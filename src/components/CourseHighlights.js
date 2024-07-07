import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode, faUserTie, faCertificate, faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../ThemeContext';

const highlights = [
  { icon: faBook, title: 'Comprehensive Curriculum', text: 'Learn the fundamentals of Java and advanced topics including OOP, data structures.' },
  { icon: faCode, title: 'Hands-on Coding', text: 'Gain practical experience by working on real-world Java projects and assignments.' },
  { icon: faUserTie, title: 'Expert Instructors', text: 'Learn from industry experts with years of experience in Java development.' },
  { icon: faCertificate, title: 'Certification', text: 'Receive a recognized certification upon course completion to boost your resume.' },
  { icon: faBriefcase, title: 'Job Assistance', text: 'Get assistance with job placements and interview preparation.' },
  { icon: faUsers, title: 'Community Support', text: 'Join a community of learners and get support from peers and mentors.' },
];

const CourseHighlights = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-5 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Container className='py-5'>
        <h2 className={`mb-4 text-center ${isDark ? 'text-white' : 'text-dark'}`} style={{ fontSize: '32px', fontWeight: 'bold' }}>
          Java Course Highlights
        </h2>
        <Row>
          {highlights.map((highlight, index) => (
            <Col xs={12} md={6} lg={6} xl={4} className="mb-4" key={index}>
              <Card className={`${isDark ? 'bg-dark text-white shadow-lg' : 'bg-light text-dark shadow'} border-0`}>
                <Card.Body className="d-flex align-items-center">
                  <div
                    className="d-flex justify-content-center align-items-center me-3"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: isDark ? '#343a40' : '#f8f9fa',
                      boxShadow: isDark ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <FontAwesomeIcon icon={highlight.icon} size="lg" className={`${isDark ? 'text-white' : 'text-dark'}`} style={{
                      padding: '10px',
                      width: '20px',
                      height: '20px'
                    }}/>
                  </div>
                  <div>
                    <Card.Title className={`${isDark ? 'text-white' : 'text-dark'}`}>{highlight.title}</Card.Title>
                    <Card.Text style={{fontSize: '18px'}}>{highlight.text}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CourseHighlights;
