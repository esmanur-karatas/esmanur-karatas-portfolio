import React from "react";
import "./Experience.css";
import { useTranslation } from 'react-i18next';

const experiences = [
  {
    title: "Full Stack Automation Engineer | SDET",
    company: "Freelancer.com",
    date: "2022 – Present",
    details: [
      "Built test automation frameworks using Selenium, Playwright, and Appium.",
      "Used Java, JavaScript, Python with BDD (Cucumber), TestNG, and JUnit.",
      "Conducted API and performance testing with Postman, Rest Assured, and JMeter.",
      "Integrated CI/CD pipelines via Jenkins, Docker, and GitHub Actions.",
      "Reduced regression test time by 70% using reusable Page Object Models."
    ]
  },
  {
    title: "Web Developer & Trainer",
    company: "İpek Yolu Youth Center",
    date: "Nov 2023 – Dec 2024",
    details: [
      "Developed responsive websites with WordPress.",
      "Tested for usability, performance, and functionality.",
      "Trained students in mBot, Arduino, Python & Scratch.",
      "Participated in TEKNOFEST for prototype and presentation design."
    ]
  },
  {
    title: "Technical Assistant & Mentor",
    company: "Kodluyoruz",
    date: "Mar 2023 – Dec 2023",
    details: [
      "Mentored in HTML, CSS, and JavaScript.",
      "Guided project-based learning and offered 1-on-1 technical support.",
      "Contributed to events and gained teamwork & communication skills."
    ]
  }
];

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="exp-header">
              <h3>{exp.title}</h3>
              <span className="exp-company">{exp.company}</span>
              <span className="exp-date">{exp.date}</span>
            </div>
            <ul>
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
