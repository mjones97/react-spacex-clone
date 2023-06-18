import React from 'react';
import satria from '../assets/satria.jpeg';

const Satria = () => {
  const background = satria;
  const launch = 'Upcoming Launch';
  const launchTitle = 'PSN Satria Mission';
  const watchButton = 'Watch';

  return (
    <div
      className='d-flex flex-column justify-content-end align-items-start p-3'
      style={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <div className='inner-left-bottom-satria'>
          <h3 className='m-0'>{launch}</h3>
          <h1 className='mt-1'>{launchTitle}</h1>
          <button className='mt-4'>{watchButton}</button>
        </div>
    </div>
  );
};

export default Satria;