import React from 'react';
import Particles from 'react-particles-js';

const Background = () => (
  <Particles
    params={{
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: '#fff'
          }
        }
      }
    }}
    style={{
      background: '#229BD5',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 0
    }}
    width="100%"
    height="100%"
  />
);

export default Background;
