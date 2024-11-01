import React, { useState } from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa'; 
import "./Contact.css"
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, message });
        // Clear the form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div className="contact-container">
            

            <div className="contact-layout"> 
                <div className="contact-info-container"> 
                    <h1>Get In <span className="secondary-color">Touch</span></h1>
                    <div className="contact-info">
                        <FaMapMarkerAlt /> {/* Map icon */}
                        <span>Katy, Texas, USA</span>
                    </div>
                    <div className="contact-info">
                        <FaLinkedin /> {/* LinkedIn icon */}
                        <a href="https://www.linkedin.com/in/cheng-sam-cheang" target="_blank" rel="noopener noreferrer">Cheng Sam Cheang</a>
                    </div>
                    <div className="contact-info">
                        <FaEnvelope /> {/* Email icon */}
                        <a href="mailto:samcheangc@gmail.com">samcheangc@gmail.com</a>
                    </div>
                    <div className="contact-info">
                        <FaGithub /> {/* GitHub icon */}
                        <a href="https://github.com/SamC-1832" target="_blank" rel="noopener noreferrer">SamC-1832</a>
                    </div>
                    <div className="contact-info">
                        <FaPhone /> {/* Phone icon */}
                        <span>+1 281 722 9885</span>
                    </div>
                </div>

                <form className="contact-field" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
