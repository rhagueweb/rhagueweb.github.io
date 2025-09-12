import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/about.svg';
import Toolstack from './Toolstack';
import myImg2 from '../../Assets/RH_ProfilePic2.png';

function About() {
  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                overflow: 'hidden',
                margin: 'auto',
              }}
            >
              <img src={myImg2} className='img-fluid' alt='avatar' />
            </div>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='about-img'
          >
            <img src={laptopImg} alt='about' className='img-fluid' />
          </Col>
        </Row>
        <h1 className='project-heading'>
          <strong className='purple'>Skillset </strong>
        </h1>

        <Techstack />

        <h1 className='project-heading'>
          <strong className='purple'>Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
