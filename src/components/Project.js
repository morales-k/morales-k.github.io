import React from 'react';

const Project = (props) => {
    const { project } = props;

    return (
        <div className="project">
          <p className="title">{project.title}</p>
          <img src={project.imgSrc} alt={project.imgAlt} />
          <p>{project.description}</p>
          <div className="view-links">
            <a href={project.codeLink} target="_blank">View code</a>
            <a href={project.projectLink} target="_blank">View project</a>
          </div>
        </div>
    )
}

export default Project;