import React, {useEffect} from 'react'
import tunesImg from '../assets/work/projecttunes.png';
import memoryMatchImg from '../assets/work/projectmemory.png';
import todoImg from '../assets/work/projecttodo.png';
import calcImg from '../assets/work/projectcalc.png';
import Rocket from './Rocket';

function Work(props) {
  
  useEffect(() => {
    props.getOffset('work');
  }, []);

  return (
    <div id="work" ref={props.workRef}>
      {
        props.workVisible ? <Rocket animate={'workRocket'} /> : null
      }
      <div className="project-container">
        <div className="project">
          <p className="title">Tunes - Media Player</p>
          <img src={tunesImg} alt="Media player project." />
          <p>A React and CSS media player using React h5 Audio Player and the Radio Browser API. Select from several categories of music.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/Tunes">View code</a>
            <a href="https://morales-k.github.io/Tunes/">View project</a>
          </div>
        </div>
        <div className="project">
          <p className="title">Memory Match</p>
          <img src={memoryMatchImg} alt="Memory match game." />
          <p>Coffee and donut themed matching game built with React and CSS. The Fischer Yates shuffle is used so no two play throughs are the same.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/Memory-Match">View code</a>
            <a href="https://morales-k.github.io/Memory-Match/">View project</a>
          </div>
        </div>
        <div className="project">
          <p className="title">To-do List</p>
          <img src={todoImg} alt="To-do list app." />
          <p>Create, delete and mark items as complete with this to-do list. Keyboard control is implemented for better access. Built with React and CSS.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/To-Do-List">View code</a>
            <a href="https://morales-k.github.io/To-Do-List/">View project</a>
          </div>
        </div>
        <div className="project">
          <p className="title">Classic Calculator</p>
          <img src={calcImg} alt="A calculator." />
          <p>A classic calculator with all the basics. Square roots, decimals and negative numbers included! Built using JavaScript and CSS.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/Calculator">View code</a>
            <a href="https://morales-k.github.io/Calculator/">View project</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work