import React, { useEffect, useState } from 'react'
import Rocket from './Rocket';
import Project from './Project';
import * as project from "../ProjectVM/projects";

function Work(props) {
	const [selection, setSelection] = useState(null);

	const removeSelection = (e) => {
		if (e.target.tagName !== "IMG") {
			setSelection(null);
		}
	};

	useEffect(() => {
		props.getOffset('work');

		window.addEventListener("click", (e) => {
			if (e.target.tagName !== "IMG") {
				setSelection(null);
		  }
		})

		return () => {
			window.removeEventListener('click', () => null);
		  };
	}, []);

	return (
		<div id="work" ref={props.workRef} onClick={(e) => removeSelection(e)}>
			{
				props.workVisible ? <Rocket animate={'workRocket'} /> : null
			}
			<div className="project-container">
				<h1>Projects</h1>
				<Project project={project.memoryMatch} selection={selection} setSelection={setSelection} />
				<Project project={project.cactusCo} selection={selection} setSelection={setSelection} />
				<Project project={project.colorTheroy} selection={selection} setSelection={setSelection} />
				<Project project={project.brickBreak} selection={selection} setSelection={setSelection} />
				<Project project={project.todoList} selection={selection} setSelection={setSelection} />
				<Project project={project.calculator} selection={selection} setSelection={setSelection} />
			</div>
		</div>
	)
}

export default Work