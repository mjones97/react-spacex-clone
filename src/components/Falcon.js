import React from 'react'
import falcon from '../assets/crs28.jpeg'

const Falcon = () => {
  const background = falcon;
  const launch = 'Recent Launch';
  const launchTitle = 'CRS-28 MISSION';
  const watchButton = 'Rewatch';

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
  )
}

export default Falcon