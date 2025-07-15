import React, { useEffect, useState, useRef } from "react";
import "./Typewriter.css";
import avatarMeditation from "../../assets/images/avatar4 (2).png";
import { useTranslation } from 'react-i18next';


function About() {
  const [text, setText] = useState("");
  const indexRef = useRef(0);

  const fullText = `Determined, open to learning and self-development. Continuous self-development, 
solution-oriented and detail-oriented in the field of software test automation and development.
Developing manual and automated test projects with Java, desktop and web applications with C#.
Experience in manual and automated testing with tools such as Selenium, Playwright, Appium, 
Cypress, Cucumber (BDD), TestNG, JUnit, Postman, Rest Assured and JMeter.
Ability to integrate API testing and CI/CD processes with GitHub Actions and Jenkins.
Ability to create test automation frameworks with structures such as Page Object Model (POM) 
and Page Factory.
Experience working with Agile (Scrum and Kanban) methodologies.
Familiarity with technologies such as Arduino, WordPress and Trello.
I share my knowledge and experience on test automation on my YouTube channel and continue to 
produce continuous learning and quality-oriented test solutions.`;

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current++;
      if (indexRef.current > fullText.length) {
        clearInterval(interval);
      } else {
        setText(fullText.slice(0, indexRef.current));
      }
    }, 15);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="about-section">
      <div className="avatar-wrapper">
        <img
          src={avatarMeditation}
          alt="Meditating Avatar"
          className="meditation-avatar"
        />
      </div>
      <div className="typewriter-container">
        <pre>{text}</pre>
      </div>
    </div>
  );
}

export default About;
