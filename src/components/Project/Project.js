import React, { useState } from "react";
import {
    FaCode,
    FaRobot,
    FaCloud,
    FaTools,
    FaCogs,
    FaProjectDiagram,
    FaLaptopCode,
    FaGithub,
    FaWordpress,
} from "react-icons/fa";
import "./Project.css";
import { useTranslation } from 'react-i18next';

const categories = [
    { key: "csharp", label: "C# Backend Projects", icon: <FaCode /> },
    { key: "selenium", label: "Selenium and TestNG Test Projects", icon: <FaRobot /> },
    { key: "postman", label: "Postman API Test Projects", icon: <FaCloud /> },
    { key: "api", label: "General API Test Projects", icon: <FaLaptopCode /> },
    { key: "wordpress", label: "WordPress Projects", icon: <FaWordpress /> },
];

const allProjects = {
    selenium: [
        {
            title: "NASA Website Test Automation Project",
            details: [
                "Developed test automation framework using Java, Selenium, TestNG, Jenkins and Extent Reports.",
                "Created end-to-end tests with positive and negative scenarios for NASA website.",
                "UI and security tests were performed and reported in detail.",
                "CI/CD integrated and fully automated.",
            ],
            github: "https://github.com/esmanur-karatas/Testing_NASA_with_Selenium",
            media: "nasa.mp4",
        },
        {
            title: "Selenium Automation Exercise Test 2025",
            details: [
                "Automated UI tests (login, cart, payment) for e-commerce platform.",
                "Framework: Java, Selenium WebDriver, TestNG, POM structure.",
                "CI pipeline and reporting included.",
            ],
            github: "https://github.com/esmanur-karatas/SeleniumAutomationExerciseTest",
            //media: "selenium_exercise.mp4",
        },
    ],
    postman: [
        {
            title: "NASA API Test Automation with Postman 2025",
            details: [
                "Tested 17+ NASA APIs using Postman and Newman CLI.",
                "Created positive & negative test cases for endpoints.",
                "Integrated with Jenkins and GitHub Actions.",
                "Validated status codes, performance and edge cases.",
            ],
            github: "https://github.com/esmanur-karatas/NASA_API_Test_Automation_with_Postman",
            media: "postman.mp4",
        },
        {
            title: "15 Days for Postman Testers - Challenge 2025",
            details: [
                "Completed hands-on 15-day API testing challenge.",
                "Used GET, POST, PUT, DELETE methods with scripts and variables.",
                "Documented tests and pushed to GitHub.",
            ],
            github: "https://github.com/esmanur-karatas/15_Days_Of_Postman_For_Tester",
            //media: "postman_challenge.mp4",
        },
    ],

    api: [
        {
            title: "Selenium API Testing Examples",
            details: [
                "This project automates various API test scenarios",
                "using Selenium, RestAssured, JUnit, and TestNG.",
                "It validates API endpoints and measures response times.",
            ],
            github: "https://github.com/esmanur-karatas/SeleniumAPITestingExamples?tab=readme-ov-file",
            media: "seleniumApi.png",
        },

        {
            title: "API Test Cucumber Framework",
            details: [
                "This project is a Cucumber framework for RESTful",
                "API testing supporting GET, POST, PUT, PATCH, DELETE and XML requests.",
                "Built with Cucumber, Java, and RestAssured, it features parallel test execution reporting, error logging, and integrates with GitHub Actions and Jenkins.",
            ],
            github: "https://github.com/esmanur-karatas/API_Test_Cucumber_Framework",
            media: "cucumber.mp4",
        },
    ],

    csharp: [
        {
            title: "Traversal Project",
            details: [
                "Traversal is a travel planning platform built with .NET Core 8.0 and MsSQL. It features a clean layered architecture with Repository, UnitOfWork, CQRS, and MediatR patterns.",
                "Users can register, book trips write blogs, and manage profiles.",
                "Admins approve reservations and monitor data.",
                "Technologies include Entity Framework Core, Identity Core, Ajax & RapidAPI, MimeKit, EPPlus, Fluent Validation, and Serilog.",
            ],
            github: "https://github.com/esmanur-karatas/TravelAgency.Web",
            github: "https://github.com/esmanur-karatas/TraversalApiProject",
            media: "traversal.png",
        },
        {
            title: "Weather Web Project",
            details: [
                "I developed this project using the Weather API with C# and ASP.NET MVC.",
                "It provides a 5-day weather forecast with data updated every 3 hours.",
            ],
            github: "https://github.com/esmanur-karatas/WeatherWeb",
            media: "weather.mp4",
        },
        {
            title: "MVC Portfolio Project",
            details: [
                "This project is a web application developed using ASP.NET.",
                "It features an admin panel that allows interaction with the database, enabling users to add, delete, and update records easily.",
            ],
            github: "https://github.com/esmanur-karatas/MvcCv?tab=readme-ov-file",
            media: "cv.png",
        },

        {
            title: "TO-DO List Project",
            details: [
                "This simple Todo List web app helps you organize and track tasks.",
                "Features include adding tasks with date, name, and priority; editing and deleting tasks; marking tasks as completed and moving them to the bottom; and automatic sorting by date. ",
                "Priority levels are High, Medium, and Low.",
            ],
            github: "https://github.com/esmanur-karatas/ToDoList.Web",
            media: "to do.png",
        },

        {
            title: "Personal Adress Book Project",
            details: [
                "Personal Address Book is a web application for managing contact information.",
                "It allows users to add, delete, edit and search contacts by name or surname.",
                "All changes are reflected in the SQL database, and users receive alerts for each action.",
            ],
            github: "https://github.com/esmanur-karatas/PersonalAdressBook.Web",
            media: "person.png",
        },

        {
            title: "Book Management Application",
            details: [
                "This project is a simple book management app built with ASP.NET MVC and Entity Framework Core.",
                "Users can add, delete, update books, and search by book title or author name.",
            ],
            github: "https://github.com/esmanur-karatas/BookWebApp",
            media: "book.png",
        },
    ],

    wordpress: [
        {
            title: "İpek Yolu Entrepreneur Incubation Website",
            details: [
                "A corporate WordPress website built for İpek Yolu Youth Center.",
                "Focused on responsive design, content organization, and clean user experience.",
                "Includes blog, training pages, and dynamic content sections.",
            ],
            url: "https://ipekyolugkm.com/",
            media: null,
        },
        {
            title: "Markas Lazer Website",
            details: [
                "A business website developed for a laser cutting and design company.",
                "Showcases services, product visuals, and contact forms with mobile compatibility.",
                "Optimized for fast loading and SEO-friendly structure.",
            ],
            url: "https://markaslazer.com/",
            media: null,
        },
        {
            title: "Markas Teknoloji Website",
            details: [
                "A WordPress website for a technology and software company.",
                "Designed to highlight service areas, customer communication, and portfolio items.",
                "Features modern layout, fast performance, and easy navigation.",
            ],
            url: "https://markasteknoloji.com/",
            media: null,
        },
    ],

};

function Projects() {
    const [activeCategory, setActiveCategory] = useState("selenium");

    return (
        <div className="projects-page">
            <aside className="category-section">
                <h2>Categories</h2>
                <ul>
                    {categories.map((cat) => (
                        <li
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={cat.key === activeCategory ? "active" : ""}
                        >
                            {cat.icon} {cat.label}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="projects-content">
                <h2>
                    {
                        categories.find((c) => c.key === activeCategory)?.label
                    }
                </h2>
                {(allProjects[activeCategory] || []).map((proj, i) => (
                    <div className="project-card" key={i}>
                        <div className="project-left">
                            <h3>{proj.title}</h3>
                            <ul>
                                {proj.details.map((line, j) => (
                                    <li key={j}>{line}</li>
                                ))}
                            </ul>
                            {activeCategory === "wordpress" && proj.url ? (
                                <a href={proj.url} target="_blank" rel="noreferrer">
                                    🌐 Visit Website
                                </a>
                            ) : proj.github ? (
                                <a href={proj.github} target="_blank" rel="noreferrer">
                                    <FaGithub /> GitHub Repo
                                </a>
                            ) : null}


                        </div>
                        <div className="project-right">
                            {proj.media?.endsWith(".mp4") ? (
                                <video controls>
                                    <source
                                        src={require(`../../assets/videos/${proj.media}`)}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            ) : proj.media ? (
                                <img
                                    src={require(`../../assets/images/${proj.media}`)}
                                    alt={proj.title}
                                />
                            ) : null}
                        </div>

                    </div>
                ))}
            </main>
        </div>
    );
}

export default Projects;
