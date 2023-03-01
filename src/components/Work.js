import React, {useEffect} from 'react'
import cactusCoImg from '../assets/work/projectcactusco.png';
import memoryMatchImg from '../assets/work/projectmemory.png';
import todoImg from '../assets/work/projecttodo.png';
import calcImg from '../assets/work/projectcalc.png';
import colorTheoryImg from'../assets/work/projectcolortheory.png';
import brickBreakImg from '../assets/work/projectbrickbreak.png';
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
          <p className="title">Memory Match</p>
          <img src={memoryMatchImg} alt="Memory match game." />
          <p>Coffee and donut themed matching game built with React and CSS. The Fischer Yates shuffle is used so no two play throughs are the same.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/Memory-Match" target="_blank">View code</a>
            <a href="https://morales-k.github.io/Memory-Match/" target="_blank">View project</a>
          </div>
        </div>
        <div className="project">
          <p className="title">Cactus Co.</p>
          <img src={cactusCoImg} alt="Website selling succulents and cacti." />
          <p>Simplistic, modern website selling succulents and cacti. Featuring a dynamic shopping cart and form validation.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/CactusCo" target="_blank">View code</a>
            <a href="https://morales-k.github.io/CactusCo/" target="_blank">View project</a>
          </div>
        </div>
        <div className="project">
          <p className="title">Color Theory</p>
          <img src={colorTheoryImg} alt="A color theroy game." />
          <p>A color theory game using React and a responsive canvas. Select color pairs to mix and create new colors.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/Color-Theory" target="_blank">View code</a>
            <a href="https://morales-k.github.io/Color-Theory/" target="_blank">View project</a>
          </div>
        </div>
        <div className="project">
          <p className="title">Brick Break</p>
          <img src={brickBreakImg} alt="A brick break game." />
          <p>A game using React and a responsive canvas. Destroy bricks. Don't let the ball fall!</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/BrickBreak" target="_blank">View code</a>
            <a href="https://morales-k.github.io/BrickBreak/" target="_blank">View project</a>
          </div>
        </div>
        <div className="project">
          <p className="title">To-do List</p>
          <img src={todoImg} alt="To-do list app." />
          <p>Create, delete and mark items as complete with this to-do list. Keyboard control is implemented for better access. Built with React and CSS.</p>
          <div className="view-links">
            <a href="https://github.com/morales-k/To-Do-List" target="_blank">View code</a>
            <a href="https://morales-k.github.io/To-Do-List/" target="_blank">View project</a>
          </div>
        </div>
      <div className="project">
        <p className="title">Classic Calculator</p>
        <img src={calcImg} alt="A calculator." />
        <p>A classic calculator with all the basics. Square roots, decimals and negative numbers included! Built using JavaScript and CSS.</p>
        <div className="view-links">
          <a href="https://github.com/morales-k/Calculator" target="_blank">View code</a>
          <a href="https://morales-k.github.io/Calculator/" target="_blank">View project</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Work