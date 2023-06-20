import React from 'react';
import MyComponent from './MyComponent';
import satria from '../assets/psn-satria.jpeg';

const Satria = () => {
  return (
    <MyComponent 
      background={satria}
      launch='Recent Launch'
      launchTitle='PSN Satria Mission'
      watchButton='Rewatch'
    />
  );
};

export default Satria;