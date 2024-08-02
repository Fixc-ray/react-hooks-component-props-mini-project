import React from 'react'

function About({image, about}) {
    const defaultValue="https://via.placeholder.com/215"
  return (
    <aside>
        <img src={image || defaultValue} alt='blog logo'/>
        <p>{about}</p>
    </aside>
  )
}

export default About