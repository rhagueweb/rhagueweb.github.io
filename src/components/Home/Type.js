import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'iMIS Consultant',
          'Stargazer',
          'MERN Stack Junior Dev',
          'Local Table Tennis Player',
          'Web Dev Enthusiast',
          'Manchester United Fan',
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
