import React, { useState, useEffect } from 'react';

const Project = (props) => {
    const { project, selection, setSelection } = props;
    const [showOverlay, setOverlay] = useState(false);

    useEffect(() => {
        if (selection === project.title) {
            setOverlay(true);
        } else {
            setOverlay(false);
        }
    }, [project, selection]);

    return (
        <div className="project"
             onClick={() => setSelection(project.title)}>
            {
              showOverlay ? 
              <div className="overlay">
                  <p className="title">{project.title}</p>
                  <p>{project.description}</p>
                  <div className="view-links">
                    <a href={project.codeLink} target="_blank" rel="noreferrer">View code</a>
                    <a href={project.projectLink} target="_blank" rel="noreferrer">View project</a>
                  </div>
              </div> : null
            }
            <img src={project.imgSrc} alt={project.imgAlt} />
        </div>
    )
}

export default Project;