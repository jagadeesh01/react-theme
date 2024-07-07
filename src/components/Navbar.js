import React from 'react';
import { Navbar as BootstrapNavbar, Container, Button } from 'react-bootstrap';
import { useTheme } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <BootstrapNavbar bg={isDark ? 'dark' : 'light'} variant={isDark ? 'dark' : 'light'} expand="lg" className='py-2' fixed='top'>
      <Container>
        <BootstrapNavbar.Brand to="/" className="d-flex align-items-center">
          <span
            className="logo-text"
            style={{
              color: isDark ? '#FFF' : '#000',
              textShadow: `4px 4px 4px ${isDark ? 'rgba(255, 255, 255, .5)' : 'rgba(0,0,0,0.5)'}`,
              fontWeight: 'bold',
              fontSize: '30px',
            }}
          >
            Tech Leads Course
          </span>
        </BootstrapNavbar.Brand>
        <Button variant={isDark ? 'light' : 'dark'} onClick={toggleTheme} className="ml-auto">
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </Button>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
