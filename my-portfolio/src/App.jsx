import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

function App() {
  const handleProjectClick = (projectPath) => {
    window.location.href = `/projects/${projectPath}/index.html`;
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <main>
              <Header />
              <Skills />
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={
            <Projects onProjectClick={handleProjectClick} />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;