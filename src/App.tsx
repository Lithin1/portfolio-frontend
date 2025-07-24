import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Suspense, useEffect, useState } from 'react';
import Loader from './components/Loader';
import MobileView from './pages/home/MobileView'
import Intro from './pages/home/Intro';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import SkillSet from './pages/skills/SkillSet';
import Project from './pages/projects/Project';
import Achievement from './pages/achievements/Achievements';
import Contact from './pages/contact/Contact';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <ThemeProvider>
            <Navbar isMobile={isMobile} />
            <main className="flex-grow overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Navigate to={isMobile ? "/home" : "/intro"} />} />
                <Route path="/home" element={<MobileView />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<SkillSet />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/achievements" element={<Achievement />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
