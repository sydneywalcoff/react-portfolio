import React from 'react';
import resume from '../../assets/resume.PDF'

const Resume = () => {
    return (
        <section className="container resume">
            <div className="row">
                <h1 className="display-3 col title text-center">History</h1>
            </div>
            <div className="row">
                <div className = 'col-5'>
                    <h4 className='section-title'>Resume</h4>
                    <p>Click <a href={resume} id="resume-link" download>here</a> to download my resume</p>
                </div>
                <div className='col-1'></div>
                <div className ='col-5'>
                    <h4 className="section-title">Technologies</h4>
                    <p>MERN Stack, <br/> JavaScript, <br/> HTML5/CSS3, <br/> JQuery, <br/> React, <br/> MongoDB, <br/> SQL, <br/> Git, <br/> Heroku
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Resume;