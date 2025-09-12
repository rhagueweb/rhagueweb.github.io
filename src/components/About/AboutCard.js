import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Richard Hague</span>{' '}
            (34), from
            <span className='purple'> Macclesfield, England (UK).</span>
            <br />I am currently employed as a Consultant at{' '}
            <a
              href='https://zentso.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Zentso
            </a>
            .
            <br />
            Outside of my 9-5, I am passionate about website development and
            love keeping up with the latest technologies.
            <br />
            I have a keen interest in the MERN stack, particularly with Next.js
            and Tailwind CSS, to create beautiful and responsive websites.
            <br />
            I have completed a degree in Multimedia Technologies (BSc) at
            Sheffield Hallam University from 2009-12.
            <br />
            <br />
            Apart from web development, here are some other activities that I
            love!
          </p>

          <ul>
            <li className='about-activity'>
              <ImPointRight /> Table Tennis
            </li>
            <li className='about-activity'>
              <ImPointRight /> Stargazing
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
            <li className='about-activity'>
              <ImPointRight /> Football
            </li>
            <li className='about-activity'>
              <ImPointRight /> Playing Guitar
            </li>
          </ul>

          <p style={{ color: 'rgb(28 166 143)' }}>
            "Strive to build things that make a difference...and look pretty!"{' '}
          </p>
          <footer className='blockquote-footer'>Rick</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
