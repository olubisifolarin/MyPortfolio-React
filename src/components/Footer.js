import React from "react";
import github from '../assets/github.png';
import twitterWhite from '../assets/twitterWhite.jpg';
import linkedwhite from '../assets/linkedwhite.png';



const Footer = () => {
    return(
    <section>
        <div className="footer">
            <div className="image">
              <a href="https://github.com/olubisifolarin/" ><img src={github} className="github" alt="Github-logo" /></a> 
               <a href="https://twitter.com/olubisi_folarin"><img src={twitterWhite}  className="twitter" alt="Twitter-logo" /></a> 
               <a href="https://www.linkedin.com/in/olubisi-folarin-1795a8236/"><img src={linkedwhite}  className="linkedin" alt="Twitter-logo" /></a>
            </div>
            

            <div className="design">
                <h5>Design and built by Olubisi</h5>
            </div>
            
        </div>
    </section>
    )
}

export default Footer;