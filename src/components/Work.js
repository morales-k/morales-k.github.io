import React, { useEffect } from 'react'
import Rocket from './Rocket';
import Project from './Project';
import * as project from "../ProjectVM/projects";

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
      	  <Project project={project.memoryMatch} />
          <Project project={project.cactusCo} />
		  <Project project={project.colorTheroy} />
		  <Project project={project.brickBreak} />
          <Project project={project.todoList} />
		  <Project project={project.calculator} />
    	</div>
    </div>
  )
}

export default Work