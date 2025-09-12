import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import elpaco from '../../Assets/Projects/elpaco.png';
import oasisescapes from '../../Assets/Projects/oasisescapes.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={6} className='project-card'>
            <ProjectCard
              imgPath={elpaco}
              isBlog={false}
              title='El Paco - Spanish & English Restaurant & Café'
              description={
                <>
                  <p>
                    A modern, mobile-friendly WordPress website built for El
                    Paco, a new restaurant and café serving Spanish and English
                    cuisine. The site includes essential sections such as Home,
                    About, Menu, Gallery, Reservations (form-only), and Contact,
                    with integrated forms for enquiries and bookings.
                  </p>
                  <p>
                    The project involved customizing a WordPress restaurant
                    theme, designing a cohesive visual style, and implementing
                    user-friendly navigation. Additional features include a
                    “Coming Soon” landing page, countdown timer for launch, and
                    optimized social sharing settings with Open Graph images.
                  </p>
                  <p>
                    This build was completed with a focus on fast turnaround,
                    ease of future updates, and responsive design to provide an
                    engaging experience across all devices.
                  </p>
                </>
              }
              demoLink='https://elpaco.co.uk/'
            />
          </Col>

          <Col md={6} className='project-card'>
            <ProjectCard
              imgPath={oasisescapes}
              isBlog={false}
              title='Oasis Escapes - Holiday Property Rental Platform'
              description={
                <>
                  <p>
                    Oasis Escapes is a holiday property rental platform that
                    connects travelers (“escapers”) with property owners
                    (“escape providers”). Guests can browse listings and contact
                    owners directly to inquire about properties and arrange
                    bookings privately.
                  </p>
                  <p>
                    Oasis Escapes operates on a freemium model: a free tier
                    allows owners to list one property with limited images and
                    features, while premium tiers offer enhanced listing
                    capabilities.
                  </p>
                  <p>
                    Built with MongoDB, React, Node.js, Next.js, and Tailwind
                    CSS, this project served as a hands-on opportunity to
                    explore a modern web development stack, including user
                    authentication, UI/UX design, responsive design, and feature
                    implementation.
                  </p>
                </>
              }
              demoLink='https://oasisescapes.co.uk/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
