import React from "react";
import css from '../assets/css.png';
import github from '../assets/github.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import html from '../assets/html.png';
import bootstrap from '../assets/bootstrap.webp';
import jquery from '../assets/jquery.png';
import Python from '../assets/Python.png';
import Django from '../assets/Django.jpg';


const Skills =() => {
    return(
        <section id="skills-header">
            <div className="skills">
                <h2>My Skills</h2>
                <h3>Skills I have</h3>
            </div>

            <div className="skills-logo">
                <img src={html} className="logo" alt="Html-logo" />
                <img src={css} className="logo" alt="Css-logo" />
                <img src={github} className="logo"alt="Github-logo" />
                <img src={js} className="logo" alt="Js-logo" />
                <img src={bootstrap} className="logo" alt="Bootstrap-logo" />
                <img src={jquery} className="logo" alt="jQuery-logo" />
                <img src={tailwind} className="logo" alt="Taiwind-logo" />
                <img src={react} className="logo" alt="React-logo" />
                <img src={Python} className="logo" alt="Python-logo" />
                <img src={Django} className="logo" alt="Django-logo" />
            </div>

            
            <div className="Tech-stack">
               
                <div className="tech-item">
                    <h4>HTML</h4>
                    <hr />
                </div>

                <div className="tech-item">
                    <h4>CSS</h4>
                    <hr />
                </div>

                <div className="tech-item">
                    <h4>JavaScript</h4>
                    <hr />
                </div>

                <div className="tech-item">
                    <h4>JQuery</h4>
                    <hr />
                </div>

                <div className="tech-item">
                    <h4>Bootstrap</h4>
                    <hr />
                </div>
           

                <div className="tech-item">
                    <h4>Tailwind</h4>
                    <hr />
                </div>  

                <div className="tech-item">
                    <h4>ReactJs</h4>
                    <hr />
                </div>

                <div className="tech-item">
                    <h4>Python</h4>
                    <hr />
                </div>

                <div className="tech-item">
                    <h4>Django</h4>
                    <hr />
                </div>

                <div className="tech-item">
                    <h4>Git</h4>
                    <hr />
                </div>

            </div>
        </section>
    )
}

export default Skills;

