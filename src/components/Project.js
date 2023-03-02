import React, { useState } from 'react';

const Project = (props) => {
    const { project } = props;
    const [showOverlay, setOverlay] = useState(false);
    const [showClose, setShowClose] = useState(false);

    const handleHover = (bool) => {
        setShowClose(false);
        setOverlay(bool);
    };

    const handleClick = () => {
        setShowClose(true);
        setOverlay(true);
    };

    return (
        <div className="project"
             onMouseEnter={() => handleHover(true)}
             onMouseLeave={() => handleHover(false)}
             onTouchStart={() => handleClick()}>
            {
              showOverlay ? 
              <div className="overlay">
                  <span 
                    className={showClose ? "close" : "hidden"}
                    onClick={() => setOverlay(false)}>X</span>
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