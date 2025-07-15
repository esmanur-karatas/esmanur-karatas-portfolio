import React from "react";
import "./MyCourses.css";
import { useTranslation } from 'react-i18next';

const playlists = [
  {
    title: "1. Software Testing and Selenium from Scratch",
    desc: "In this playlist, we cover the basics of software testing and test automation. We'll walk through testing processes, types, and real-world Selenium projects step by step...",
    url: "https://www.youtube.com/playlist?list=PLC8N5pJrl1W8TBxQX4YCGS8GZsoRhmpyv",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLC8N5pJrl1W8TBxQX4YCGS8GZsoRhmpyv",
  },
  {
    title: "2. Software Testing with TestNG from Scratch",
    desc: "A video series where we test NASA's website using the Page Object Model (POM) structure with positive and negative test cases in TestNG framework...",
    url: "https://www.youtube.com/playlist?list=PLC8N5pJrl1W_cpogYKff6PNC_QSyuZf-i",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLC8N5pJrl1W_cpogYKff6PNC_QSyuZf-i",
  }
];


const VideoPlaylist = () => {
  return (
    <div className="video-page">
      <h1 className="video-title">My Courses</h1>
      <div className="video-grid">
        {playlists.map((playlist, index) => (
          <div className="video-card" key={index}>
            <div className="video-embed">
              <iframe
                src={playlist.embedUrl}
                title={playlist.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h2>{playlist.title}</h2>
              <p>{playlist.desc}</p>
              <a
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlaylist;
