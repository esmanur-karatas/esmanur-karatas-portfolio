import React from "react";
import "./Awards.css";
import { useTranslation } from 'react-i18next';


const Awards = () => {
  return (
    <section className="awards-section">
      <h2 className="awards-title">Awards</h2>
      <div className="award-card">
        <h3>İpek Yolu Autonomous Robot Team</h3>
        <p className="award-event">
          Teknofest – Digital Technologies in Industry
        </p>
        <p className="award-year">Honorable Mention · 2nd Place · 2024</p>
        <p className="award-desc">
          Recognized for excellence in developing autonomous robotic solutions,
          showcasing strong skills in software testing and innovation in an industrial tech setting.
        </p>
      </div>
    </section>
  );
};

export default Awards;
