import React from 'react'
import MyComponent from './MyComponent';
import falcon from '../assets/crs28.jpeg'

const Falcon = () => {
  return (
    <MyComponent 
      background={falcon}
      launch='RECENT LAUNCH'
      launchTitle='CRS-28 MISSION'
      watchButton='Rewatch'
    />
  )
}

export default Falcon