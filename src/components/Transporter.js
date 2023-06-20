import React from 'react';
import MyComponent from './MyComponent';
import transporter from '../assets/transporter8-bg.jpeg';

const Transporter = () => {
  return (
    <MyComponent 
      background={transporter}
      launch='RECENT LAUNCH'
      launchTitle='TRANSPORTER-8 MISSION'
      watchButton='Rewatch'
    />
  );
}

export default Transporter;