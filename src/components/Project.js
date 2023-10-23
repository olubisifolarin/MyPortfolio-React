import React from "react";
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import project4 from '../assets/project4.png';
import meta from '../assets/meta.png';


const Project = () => {
    return(
    <section id="project-header">
        <div className="projects">
            <h2>My Portfolio</h2>
            <h3>My works</h3>
        </div>

        <div className="project-wrapper">
            <div className="project-container">
                <div className="project-image">  
                    <img src={project4} className="project" alt="My project" />
                </div>
              
                <div className="">
                    <a href="https://olubisi-getaihackaton.vercel.app/"><button className="projectBtn">View Demo</button></a>
                    <a href="https://github.com/olubisifolarin/GetAI-Hackaton"><button className="projectBtn">Source Code</button></a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">  
                    <img src={proj1} className="project" alt="My project" />
                </div>
              
                <div className="">
                    <a href="https://willowy-zuccutto-4e656c.netlify.app/"><button className="projectBtn">View Demo</button></a>
                    <a href="https://github.com/olubisifolarin/Delicious"><button className="projectBtn">Source Code</button></a>
               </div>
            </div>   

            <div className="project-container">
                <div className="project-image">  
                    <img src={proj2} className="project" alt="My project" />
                </div>
              
                <div className="">
                        <a href="https://home-rentals-rho.vercel.app/ "><button className="projectBtn">View Demo</button></a>
                        <a href="https://github.com/olubisifolarin/HomeRentals"><button className="projectBtn">Source Code</button></a>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">  
                    <img src={meta} className="project" alt="My project" />
                </div>
              
                <div className="">
                    <a href="https://shiny-salmiakki-11ff0c.netlify.app/"><button className="projectBtn">View Demo</button></a>
                    <a href="https://github.com/olubisifolarin/Metaverse"><button className="projectBtn">Source Code</button></a>
                </div>
            </div>
        </div>
        
    </section>
    )
}

export default Project;