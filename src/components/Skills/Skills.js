import "./Skills.css";
import { useTranslation } from 'react-i18next';

function Skills() {
    return (
        <div className="skills-container">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-wrapper">
                <div className="skills-row">
                    {/* Programming Languages */}
                    <div className="skill-group">
                        <h4>Programming Languages</h4>
                        <br/>
                        <div className="skill-icon"><i className="devicon-java-plain colored"></i> Java</div>
                        <div className="skill-icon"><i className="devicon-csharp-plain colored"></i> C#</div>
                        <div className="skill-icon"><i className="devicon-python-plain colored"></i> Python</div>
                        <div className="skill-icon"><i className="devicon-html5-plain colored"></i> HTML5,CSS3</div>
                        <div className="skill-icon"><i className="devicon-mysql-plain colored"></i> ASP.NET</div>
                        <div className="skill-icon"><i className="devicon-javascript-plain colored"></i> JavaScript</div>
                        
                    </div>


                    {/* Test Tools */}
                    <div className="skill-group">
                        <h4>Test & Automation Tools</h4>
                        <br/>
                        <div className="skill-icon"><i className="devicon-selenium-plain colored"></i> Selenium</div>
                        <div className="skill-icon"><i className="devicon-foundation-plain colored"></i> Cypress</div>
                        <div className="skill-icon"><i className="devicon-foundation-plain colored"></i> Playwright</div>
                        <div className="skill-icon"><i className="devicon-cucumber-plain colored"></i> Cucumber (BDD)</div>
                        <div className="skill-icon"><i className="devicon-foundation-plain colored"></i>TestNG</div>
                        <div className="skill-icon"><i className="devicon-foundation-plain colored"></i>JUnit</div>
                        <div className="skill-icon"><i className="devicon-foundation-plain colored"></i>Postman</div>
                        <div className="skill-icon"><i className="devicon-foundation-plain colored"></i>Rest Assured</div>
                        <div className="skill-icon"><i className="devicon-foundation-plain colored"></i>JMeter</div>
                    </div>

                    {/* CI/CD + Version Control */}
                    <div className="skill-group">
                        <h4>CI/CD & Version Control</h4>
                        <br/>
                        <div className="skill-icon"><i className="devicon-git-plain colored"></i> Git</div>
                        <div className="skill-icon"><i className="devicon-github-plain colored"></i> GitHub, GitHub Actions</div>
                        <div className="skill-icon"><i className="devicon-jenkins-plain colored"></i> Jenkins</div>
                    </div>
                </div>

                <div className="skills-row">
                    {/* Development Methodologies */}
                    <div className="skill-group">
                        <h4>Development Methodologies</h4>
                        <br/>
                        <div className="skill-icon"><i className="devicon-sourcetree-original colored"></i>OOP,BDD</div>
                        <div className="skill-icon"><i className="devicon-sourcetree-original colored"></i>SDLC</div>
                        <div className="skill-icon"><i className="devicon-sourcetree-original colored"></i>Agile (Scrum, Kanban)</div>
                        <div className="skill-icon"><i className="devicon-sourcetree-original colored"></i>Jira</div>
                    </div>

                    {/* Other Tools */}
                    <div className="skill-group">
                        <h4>Other Tools</h4>
                        <br/>
                        <div className="skill-icon"><i className="devicon-mysql-plain colored"></i> SQL, Firebase</div>
                        <div className="skill-icon"><i className="devicon-arduino-plain colored"></i> Arduino</div>
                        <div className="skill-icon"><i className="devicon-wordpress-plain colored"></i> WordPress</div>
                        <div className="skill-icon"><i className="devicon-trello-plain colored"></i> Trello</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
