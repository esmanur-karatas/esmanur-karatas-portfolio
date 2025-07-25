import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/HomePage"));
const Blog = lazy(() => import("./pages/BlogPage"));
const Projects = lazy(() => import("./pages/ProjectsPage"));
const MyCourses = lazy(() => import("./pages/MyCoursesPage"));
const Contact = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="loading">Yükleniyor...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
