import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'iMIS Consultant',
          'Stargazer',
          'MERN Stack Developer',
          'Local Table Tennis Player',
          'Web Developer',
          'Manchester United Fan',
          'Freelancer',
          'Girl Dad x 4!',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
