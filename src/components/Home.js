import React from "react";
import girlCarton from '../assets/girlCarton.png';
import FrontendCV from '../assets/FrontendCV.pdf';
import 'animate.css';

const Home = () => {
    return(
            <section id="home-header">
                <div className="home">
                    <div className="home-text" >
                        <h1>Hello, I'm <span className="name">Olubisi</span></h1>
                        <h4 className="frontend">Frontend Web Developer</h4>
                        <p className="passion">"I specialize in the art of creating extraordinary websites" </p>
                    </div>

                    <div className="">
                        <img src={girlCarton} className="animate__animated animate__rotatein carton " alt="MyPicture" />
                    </div>
                   
                </div>

                <a href={FrontendCV}><button className='home-btn'>RESUME</button></a>
                
            </section>
    )
}

export default Home;