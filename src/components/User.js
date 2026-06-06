import React from 'react'

const User = (props) => {
  return (
    <div className='userInfo'>
        <h2>{props.name}</h2>
        <h3>Location : Pune</h3>
        <h4>Contact : @Pranavthakare04</h4>
    </div>
  )
}

export default User