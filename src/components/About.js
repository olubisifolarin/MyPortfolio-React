import React from "react";
import Box from "../constant/Box";
import {BsWebcamFill} from 'react-icons/bs';
import {FcSmartphoneTablet} from 'react-icons/fc';
import {MdOutlineDesignServices} from 'react-icons/md';


const About = () =>  {
    return(
        <section id="about-header">
            <div className="about " style={{marginTop: '10rem'}}>
                <h2>About Me</h2>
                <h3>What I do</h3>

                <p className="about-text">
                I am a dedicated Front-End Developer deeply passionate about crafting 
                captivating UI effects and animations <br />that elevate user experiences to
                new heights. My work is characterized by meticulous organization, <br />
                and a skill for problem-solving.
                </p>
                <p  className="about-text">
                My enthusiasm for the entire spectrum of frontend development fuels my desire 
                to take on ambitious projects alongside <br /> a team of positive and like-minded individuals.
                I thrive in collaborative environments and eagerly anticipate the opportunity to <br />
                contribute my skills to create remarkable digital experiences."
                </p>

            </div>

            <div className="flex-container">
                <Box 
                icon = {<h1><BsWebcamFill /></h1>}
                 title = {
                    <h1>Web Development</h1>
                 }
                 text = {
                    <p>My zeal lies in crafting not just websites, but memorable
                         digital experiences. Every line of code, every pixel, and
                          every interaction is meticulously designed to leave a lasting 
                          impression on users.</p>
                 }
                />

                <Box 
                icon = {<h1> <MdOutlineDesignServices /></h1>}
                 title = {
                    <h1>Responsive Design</h1>
                 }
                 text = {
                    <p>In the realm of responsive design, I specialize in harnessing the 
                        power of the latest technologies and frameworks to create websites
                         that seamlessly adapt to all devices. 
                        </p>
                 }
                />
                
                <Box 
                icon= {<h1><FcSmartphoneTablet /></h1>}
                 title = {
                    <h1>Problem Solving</h1>
                 }
                 text = {
                    <p>
                        My passion lies in deciphering complex challenges, unraveling intricacies,
                         and uncovering solutions that not only resolve the issue at hand but also
                          elevate the outcomes to their highest potential.
                    </p>
                 }
                />
            </div>   
            
        </section>
    )
}

export default About;