import React, { useState, useEffect } from "react";
import './About.css';
import headshot from '../images/headshot.png';

function About() {
    const jobTitles = [
    "Automation Engineer",
    "QA Analyst",
    "Engineer In Test",
    "Engineer",
    "Developer",
    ];

    
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); 
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) =>
          prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true); 
      }, 600); 
    }, 3000);

        
    return () => clearInterval(interval); 
        }, [jobTitles.length]);
    return (
      <body>
    <div className="about-container">
      <div className="about-image">
        <img src={headshot} alt="headshot" />
      </div>
      <div className="about-content">
        <h2><span className="primary-color">Cheng Sam </span> <span className="secondary-color">Cheang</span> </h2>
                    <h3><span>Aspiring Software </span>
          <span className={`dissolving-title ${isVisible ? "visible" : ""}`}>
            {jobTitles[currentTitleIndex]}
          </span></h3>
                    <hr className="about-divider" />
       <p>
  My name is <span className="third-color">Cheng Sam Cheang</span>, I go by <span className="third-color">Sam</span>. As a Computer Science graduate, I am excited to begin my journey of applying my diverse skills and experiences in a dynamic professional environment. My passion is in modern technology, including applications, software development, software testing, artificial intelligence, machine learning, and gaming. I am continuously seeking opportunities to innovate and create impactful solutions.
</p>

<p>
  I have a solid foundation in programming languages, such as C#, C++, Python, SQL, and Java, as well as problem-solving and troubleshooting. My foundation allowed me to confront complex challenges with confidence. My technical proficiency extends to test automation, machine learning, artificial intelligence, data structures, software development, and web development, ensuring versatility in addressing various projects.
</p>

      </div>
            </div>
            </body>
  );
}

export default About;