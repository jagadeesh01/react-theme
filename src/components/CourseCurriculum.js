import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { useTheme } from '../ThemeContext';

const JavaCourseCurriculum = () => {
  const { isDark } = useTheme();


  const curriculumItems = [
    { id: 1, title: 'Introduction to Java', content: 'Basics of Java programming language.' },
    { id: 2, title: 'Object-Oriented Programming', content: 'Concepts like classes, objects, inheritance.' },
    { id: 3, title: 'Data Structures', content: 'Arrays, linked lists, stacks, queues, trees.' },
    { id: 4, title: 'Algorithms', content: 'Sorting algorithms, searching algorithms.' },
    { id: 5, title: 'Database Connectivity', content: 'Connecting Java applications with databases.' },
    { id: 6, title: 'Web Development with Java', content: 'Servlets, JSP, MVC architecture.' },
  ];

  return (
    <section className="py-5">
      <Container className="py-5">
        <h2 className="text-center mb-4">Java Course Curriculum</h2>
        <Row xs={1} md={2} className="g-4">
          {curriculumItems.map((item) => (
            <Col key={item.id}>
              <Accordion flush>
                <Accordion.Item eventKey={item.id.toString()}>
                  <Accordion.Header className={` ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                    {item.title}
                  </Accordion.Header>
                  <Accordion.Body className={`${isDark ? 'border border-dark' : 'border border-secondary'}`}>
                    {item.content}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default JavaCourseCurriculum;
