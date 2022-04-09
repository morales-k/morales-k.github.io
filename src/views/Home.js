import React from 'react'
import Rocket from './Rocket';

function Home(props) {
  return (
    <div id="home" ref={props.homeRef}>
      <h1>Hi, I'm <span className="blue">Krista</span>.</h1>
      <p>I'm a <span className="blue">software developer</span> who creates responsive websites and apps.</p>
      <p>Check out my <a href="#work">work</a> or <a href="https://github.com/morales-k" target="_blank" rel="noopener">view the code</a> on Github.
      </p>
      {
        props.homeVisible ? <Rocket animate={'rocket'} /> : null
      }
  </div>
  )
}

export default Home