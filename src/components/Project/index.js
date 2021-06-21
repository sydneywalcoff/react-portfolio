import React from 'react';

const Project = ({ project }) => {
    
    return (
        <div className="project row" key={project.name}>
            <img src={project.img} alt={project.description}/>
            <h2>{project.name}</h2>
            <p className='col-6'><a href={project.deployedUrl}>live</a></p>
            <p className='col-6'><a href={project.repoUrl}>repo</a></p>
        </div>
    );
};

export default Project;