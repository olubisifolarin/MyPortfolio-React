import React from "react";
import girlCarton from '../assets/girlCarton.png'

const Home = () => {
    return(
            <section id="home-header">
                <div className="home">
                <div class="snowflakes" aria-hidden="true">
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                </div>
                    <div className="home-text" >
                        <h1>Hello, I'm <span className="name">Olubisi</span></h1>
                        <h4 className="frontend">Frontend Web Developer</h4>
                        <p className="passion">"I specialize in the art of creating extraordinary websites" </p>
                    </div>

                    <div>
                        <img src={girlCarton} className="carton" alt="MyPicture" />
                    </div>
                   
                </div>

                <button className='home-btn'>RESUME</button>
                

                
                
            </section>
    )
}

export default Home;