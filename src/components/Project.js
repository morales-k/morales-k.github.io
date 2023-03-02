import React, { useState } from 'react';

const Project = (props) => {
    const { project } = props;
    const [showOverlay, setOverlay] = useState(false);

    return (
        <div className="project"
             onMouseEnter={() => setOverlay(true)}
             onMouseLeave={() => setOverlay(false)}
             onTouchStart={() => setOverlay(true)}>
            {
              showOverlay ? 
              <div className="overlay">
                  <span 
                      className="close"
                      onClick={() => setOverlay(false)}
                      onTouchStart={() => setOverlay(false)}>X</span>
                  <p className="title">{project.title}</p>
                  <p>{project.description}</p>
                  <div className="view-links">
                    <a href={project.codeLink} target="_blank">View code</a>
                    <a href={project.projectLink} target="_blank">View project</a>
                  </div>
              </div> : null
            }
            <img src={project.imgSrc} alt={project.imgAlt} />
        </div>
    )
}

export default Project;