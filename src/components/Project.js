import React, { useState } from 'react';

const Project = (props) => {
    const { project } = props;
    const [showOverlay, setOverlay] = useState(false);
    const [showClose, setShowClose] = useState(true);

    const handleDisplay = (e, bool) => {
        if (showClose && 
            (e.type === "mouseenter" || 
             e.type === "mouseleave")) {
            setShowClose(false);
        } else {
            setShowClose(true);
        }
        setOverlay(bool);
    };

    return (
        <div className="project"
             onMouseEnter={e => handleDisplay(e, true)}
             onMouseLeave={e => handleDisplay(e, false)}
             onTouchStart={e => handleDisplay(e, true)}>
            {
              showOverlay ? 
              <div className="overlay">
                  {
                    showClose ? 
                    <span 
                      className="close"
                      onClick={e => handleDisplay(e, false)}
                      onTouchStart={e => handleDisplay(e, false)}>X</span> : null
                  }
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