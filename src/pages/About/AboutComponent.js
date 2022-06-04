import React from 'react'
// import RoundedButton from '../../components/RoundedButton/RoundedButton';
import NavBar from '../../components/Navigation/NavBar';

function AboutComponent() {
  return (
    <div>
      <NavBar navbartext="About" />
      <h1>This is About Page</h1>
      {/* <RoundedButton text="Click to go Home"/> */}
    </div>
  );
}

export default AboutComponent;