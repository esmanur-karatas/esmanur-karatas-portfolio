import React, { useEffect, useState, useRef } from "react";
import "./Typewriter.css";
import avatarMeditation from "../../assets/images/avatar4 (2).png";
import { useTranslation } from 'react-i18next';


function About() {
  const [text, setText] = useState("");
  const indexRef = useRef(0);

  const fullText = `I’m a Full Stack Automation Engineer (SDET) with a strong focus on continuous learning and delivering quality-driven test solutions. I have hands-on experience in both manual and automated testing for web, mobile, and desktop applications using tools like Selenium, Playwright, Appium, Cypress, Postman, Rest Assured, and JMeter.
I develop test automation frameworks mainly with Java and C#, following industry standards such as Page Object Model (POM) and Page Factory. I also work with CI/CD tools like GitHub Actions and Jenkins to integrate and automate testing processes.
In addition to testing, I have developed desktop projects with C# and built responsive websites using WordPress, focusing on user-friendly design and performance.
With experience in Agile teams (Scrum & Kanban), I’ve contributed to multiple freelance and team projects, improving test coverage and reducing regression effort.
Outside of project work, I create educational content on test automation for YouTube and Medium, where I share practical tips, tools, and examples from real-world experience.`;

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
        <p className="typewriter-text">{text}</p>
      </div>
    </div>
  );
}

export default About;
