import React from 'react';
import Project from '../Project';
import winePhoto from '../../assets/img/wine.jpg';
import musicPhoto from '../../assets/img/music.jpg';
import musicPhoto2 from '../../assets/img/music2.jpg';
import budgetPhoto from '../../assets/img/budget.jpg';
import techBlogPhoto from '../../assets/img/tech-blog.jpg';
import runPhoto from '../../assets/img/run.jpg';
import pizzaPhoto from '../../assets/img/pizza.jpg';

const Portfolio = () => {
    const featuredProject =         {
        name: 'MasterTicket2.0',
        deployedUrl: 'https://masterticket2.herokuapp.com/',
        repoUrl: 'https://github.com/UCB-Bootcamp/masterTicket2.0',
        img: musicPhoto2
    };
    const projects = [
        {
            name: 'MasterTicket',
            deployedUrl: 'https://masterticket.herokuapp.com/',
            repoUrl: 'https://github.com/UCB-Bootcamp/masterTicket',
            img: musicPhoto
        },
        {
            name: 'Wine and Dine',
            deployedUrl: 'http://ucb-bootcamp.GitHub.io/wine-and-dine',
            repoUrl: 'https://github.com/UCB-Bootcamp/wine-and-dine',
            img: winePhoto
        },
        {
            name: 'Budget Tracker',
            deployedUrl: 'https://thawing-island-56218.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/budget-tracker',
            img: budgetPhoto
        },
        {
            name: 'Tech Blog',
            deployedUrl: 'https://stormy-dawn-50873.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/tech-blog',
            img: techBlogPhoto
        },
        {
            name: 'Run Buddy',
            deployedUrl: 'https://sydneywalcoff.github.io/run-buddy/',
            repoUrl: 'https://github.com/sydneywalcoff/run-buddy',
            img: runPhoto
        },
        {
            name: 'Pizza Hunt ',
            deployedUrl: 'https://boiling-depths-99742.herokuapp.com/',
            repoUrl: 'https://github.com/sydneywalcoff/pizza-hunt',
            img: pizzaPhoto
        },
    ];

    return (
        <section className="portfolio container">
            <div className="row">
                <h1 className="text-center display-3 title">Projects</h1>
            </div>
            <div className="projects row">
                <div className ='feature-project'>
                    < Project project={featuredProject} />
                </div>
                <div className="secondary-projects">
                    {projects.map((project, i) => (
                        <div key={i} className="project m-2">
                            < Project project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;