import React from 'react'
import reactDOM from "react-dom/client";
import User from './User';
import UserClass from './UserClass';


const About = () => {
  return (
    <div className='About'>
      <h1>About</h1>
      <User name = {"Pranav"}/>
      <User name = {"Pranav Thakare"}/>
      <UserClass />
    </div>
  )
}

export default About