import React, { useState } from "react";




const Contact = () =>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [subject, setSubject] = useState();
    const [success, setSuccess] = useState(false);

    
const handleSubmit = async (e) => {
    e.preventDefault(); 

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSuccess(true)

    setTimeout(() => {
        setSuccess(false);
        }, 5000); 
    
};

    return(
        <section id="contact-header">
            <div className="contact">
           
                <h2>Contact Me</h2>
                <h3>Let's Talk</h3>
                {success && (
                  <div className="success">Message sent!</div>
                )}
                <form onSubmit={handleSubmit} className="form">  
                    <input type="text" name="name" placeholder="Name" id="name" required
                    value={name}
                    onChange={(e) => {
                    setName(e.target.value);
                    }}
                   
                    />
                    <input type="email" name="email" placeholder="Email" id="email" required
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    }}
                    />

                    <input type="text" name="subject" placeholder="Subject" id="subject" required
                     value={subject}
                     onChange={(e) => {
                     setSubject(e.target.value);
                     }}/>

                    <textarea className="textarea" placeholder="Message" required
                    value={message}
                    onChange={(e) => {
                    setMessage(e.target.value);
                    }}
                    />
                    <div>
                        <button className="formBtn">Send</button>
                    </div>
                    
                </form>
             
            </div>
        </section>
    )
}

export default Contact; 