import React from 'react'
import MyComponent from './MyComponent';
import axioms from '../assets/ax2-mission.jpeg'

const Axioms = () => {
  return (
    <MyComponent 
      background={axioms}
      launch='Completed Mission'
      launchTitle='AX-2 MISSION'
      watchButton='Rewatch'
    />
  )
}

export default Axioms