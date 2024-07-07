import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../ThemeContext';

const TalkToExpertBanner = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-5 ${isDark ? 'bg-dark text-white' : 'bg-light'}`}>
      <Container className="text-center py-5">
        <h2 className={`mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>Talk to an Expert?</h2>
        <p className={`mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
          Have questions or need guidance? Our experts are here to help you succeed.
        </p>
        <Button variant={isDark ? 'outline-light' : 'primary'} size="lg">
          <FontAwesomeIcon icon={faComments} className="me-2" />
          Chat with an Expert
        </Button>
      </Container>
    </section>
  );
};

export default TalkToExpertBanner;
