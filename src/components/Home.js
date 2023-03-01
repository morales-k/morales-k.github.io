import React from 'react'
import Rocket from './Rocket';
import TypingEffect from './TypingEffect';

function Home(props) {
  const words = [" ", "creative", "focused", "driven"];

  return (
    <div id="home" ref={props.homeRef}>
      <h1>Hi, I'm <span className="blue">Krista</span>.</h1>
      <p>I'm a 
        <TypingEffect
          words={words}
          keySpeed={200}
          maxPauseAmount={8} /> 
        software developer who creates responsive websites and apps.
      </p>
      <p>Check out my <a href="#work">work</a> or <a href="https://github.com/morales-k" target="_blank" rel="noopener">view the code</a> on Github.
      </p>
      {
        props.homeVisible ? <Rocket animate={'rocket'} /> : null
      }
  </div>
  )
}

export default Home