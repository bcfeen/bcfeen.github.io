import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 350);
  };

  const projects = [
    {
      name: "DocMine",
      description: "Knowledge system for research papers with entity extraction and guaranteed recall. Idempotent ingestion, deterministic IDs, exact entity-linked retrieval.",
      tech: ["Python", "DuckDB", "PyMuPDF"],
      github: "https://github.com/bcfeen/DocMine"
    },
    {
      name: "OncoCalibrate",
      description: "Evaluating calibration methods for ML models predicting 5-year breast cancer mortality. Reduced neural network ECE from 0.577 to <0.001.",
      tech: ["PyTorch", "XGBoost", "scikit-learn"],
      github: "https://github.com/bcfeen/OncoCalibrate"
    }
  ];

  const experience = [
    {
      role: "Undergraduate Researcher",
      org: "Harvard & Dana-Farber",
      team: "BayesMendel Lab",
      period: "Nov 2025 – Present",
      work: "Reconstructing hereditary cancer penetrance functions for clinical risk prediction tools"
    },
    {
      role: "Forward Deployed Engineer",
      org: "UMass Amherst",
      team: "Math & Statistics",
      period: "Sept 2025 – Present",
      work: "Building PRISM: multi-tenant scientific knowledge system for academic labs"
    },
    {
      role: "Research Intern",
      org: "Stanford Medicine",
      team: "Curtis Lab",
      period: "June – Aug 2025",
      work: "Bayesian CNV models for spatial transcriptomics tumor heterogeneity analysis"
    }
  ];

  const albums = [
    { title: "Bismillah", artist: "Peter Cat Recording Co." },
    { title: "The Emancipation of Mimi", artist: "Mariah Carey" },
    { title: "Love Deluxe", artist: "Sade" },
    { title: "In Between Dreams", artist: "Jack Johnson" },
    { title: "VF VOL II", artist: "Sam Gellaitry" },
    { title: "Baby", artist: "Dijon" },
    { title: "Self-titled", artist: "Duke Ellington & John Coltrane" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-neutral-950 text-neutral-50' : 'bg-neutral-50 text-neutral-950'}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Spectral:ital,wght@0,400;0,600;1,400&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        h1, h2, h3 {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }

        .serif {
          font-family: 'Spectral', serif;
        }

        ::selection {
          background-color: ${darkMode ? 'rgba(115, 115, 115, 0.99)' : 'rgba(23, 23, 23, 0.99)'};
          color: ${darkMode ? '#fff' : '#fff'};
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeUp {
          animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        .delay-5 { animation-delay: 0.5s; opacity: 0; }
        .delay-6 { animation-delay: 0.6s; opacity: 0; }

        .page-transition {
          opacity: ${isTransitioning ? '0' : '1'};
          transform: ${isTransitioning ? 'translateY(8px)' : 'translateY(0)'};
          transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .link-hover {
          position: relative;
          transition: color 0.2s ease;
        }

        .link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: currentColor;
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .link-hover:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 20 ? (darkMode ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800' : 'bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200') : ''}`}>
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')}
            className={`text-lg font-medium tracking-tight transition-opacity hover:opacity-60 ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}
          >
            Benjamin Feeney
          </button>
          <div className="flex items-center gap-6 md:gap-8">
            <button 
              onClick={() => navigateTo('work')}
              className={`text-sm transition-opacity hover:opacity-60 ${darkMode ? (currentPage === 'work' ? 'text-neutral-50' : 'text-neutral-400') : (currentPage === 'work' ? 'text-neutral-950' : 'text-neutral-600')}`}
            >
              Work
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className={`text-sm transition-opacity hover:opacity-60 ${darkMode ? (currentPage === 'about' ? 'text-neutral-50' : 'text-neutral-400') : (currentPage === 'about' ? 'text-neutral-950' : 'text-neutral-600')}`}
            >
              About
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className={`text-sm transition-opacity hover:opacity-60 ${darkMode ? (currentPage === 'contact' ? 'text-neutral-50' : 'text-neutral-400') : (currentPage === 'contact' ? 'text-neutral-950' : 'text-neutral-600')}`}
            >
              Contact
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-2 text-sm transition-opacity hover:opacity-60 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </nav>

      <div className="page-transition">
        {/* HOME */}
        {currentPage === 'home' && (
          <div className="min-h-screen flex items-center px-6 md:px-8">
            <div className="max-w-5xl mx-auto w-full py-32">
              <div className="max-w-3xl">
                <h1 className={`text-5xl md:text-7xl font-semibold mb-8 leading-[1.1] animate-fadeUp ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}>
                  Applied math student building ML systems for healthcare
                </h1>
                <p className={`text-lg md:text-xl mb-12 leading-relaxed animate-fadeUp delay-1 serif ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Working on production infrastructure, Bayesian modeling, and clinical decision support. 
                  Currently at UMass Amherst, Harvard, and building PRISM.
                </p>
                <div className="flex flex-wrap gap-4 animate-fadeUp delay-2">
                  <button 
                    onClick={() => navigateTo('work')}
                    className={`px-6 py-3 text-sm font-medium transition-all ${darkMode ? 'bg-neutral-50 text-neutral-950 hover:bg-neutral-200' : 'bg-neutral-950 text-neutral-50 hover:bg-neutral-800'}`}
                  >
                    View work
                  </button>
                  <button 
                    onClick={() => navigateTo('contact')}
                    className={`px-6 py-3 text-sm font-medium transition-all ${darkMode ? 'border border-neutral-700 hover:border-neutral-600 text-neutral-50' : 'border border-neutral-300 hover:border-neutral-400 text-neutral-950'}`}
                  >
                    Get in touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WORK */}
        {currentPage === 'work' && (
          <div className="min-h-screen px-6 md:px-8 py-32">
            <div className="max-w-5xl mx-auto">
              <h2 className={`text-4xl md:text-5xl font-semibold mb-16 animate-fadeUp ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}>
                Work
              </h2>

              {/* Projects */}
              <div className="mb-24">
                <h3 className={`text-sm uppercase tracking-wider mb-8 animate-fadeUp delay-1 ${darkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>
                  Projects
                </h3>
                <div className="space-y-12">
                  {projects.map((project, i) => (
                    <div 
                      key={i}
                      onMouseEnter={() => setHoveredProject(i)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className={`group animate-fadeUp delay-${i + 2}`}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <h4 className={`text-2xl font-semibold transition-opacity ${hoveredProject === i ? 'opacity-100' : 'opacity-80'} ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}>
                          {project.name}
                        </h4>
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-sm transition-opacity hover:opacity-60 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}
                        >
                          View on GitHub
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                      <p className={`text-base leading-relaxed mb-4 serif ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                          <span 
                            key={j}
                            className={`text-xs px-3 py-1 ${darkMode ? 'bg-neutral-900 text-neutral-500' : 'bg-neutral-200 text-neutral-600'}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className={`text-sm uppercase tracking-wider mb-8 animate-fadeUp delay-4 ${darkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>
                  Experience
                </h3>
                <div className="space-y-10">
                  {experience.map((exp, i) => (
                    <div key={i} className={`animate-fadeUp delay-${i + 5}`}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
                        <div>
                          <h4 className={`text-lg font-semibold ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}>
                            {exp.role}
                          </h4>
                          <p className={`text-sm ${darkMode ? 'text-neutral-500' : 'text-neutral-600'}`}>
                            {exp.org} · {exp.team}
                          </p>
                        </div>
                        <span className={`text-sm ${darkMode ? 'text-neutral-500' : 'text-neutral-600'}`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className={`text-base leading-relaxed serif ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {exp.work}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT */}
        {currentPage === 'about' && (
          <div className="min-h-screen px-6 md:px-8 py-32">
            <div className="max-w-5xl mx-auto">
              <h2 className={`text-4xl md:text-5xl font-semibold mb-16 animate-fadeUp ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}>
                About
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="md:col-span-2 space-y-6">
                  <p className={`text-base leading-relaxed animate-fadeUp delay-1 serif ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    I'm a sophomore at UMass Amherst studying applied mathematics with a statistics & data science double major, 
                    graduating Fall 2027.
                  </p>
                  
                  <p className={`text-base leading-relaxed animate-fadeUp delay-2 serif ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    I'm passionate about building ML systems that actually get deployed and used in clinical settings. 
                    I'm particularly interested in Bayesian modeling, knowledge systems, and making probabilistic models 
                    that doctors can actually trust for patient care.
                  </p>
                  
                  <p className={`text-base leading-relaxed animate-fadeUp delay-3 serif ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    In my free time, I enjoy hiking, producing music, and reading. Goals include completing an Ironman, 
                    summiting Kilimanjaro, and biking through the Alps.
                  </p>
                </div>

                <div className="animate-fadeUp delay-4">
                  <h3 className={`text-sm uppercase tracking-wider mb-6 ${darkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>
                    Some albums I like
                  </h3>
                  <div className="space-y-4">
                    {albums.map((album, i) => (
                      <div key={i}>
                        <div className={`text-sm font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                          {album.title}
                        </div>
                        <div className={`text-xs ${darkMode ? 'text-neutral-500' : 'text-neutral-600'}`}>
                          {album.artist}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        {currentPage === 'contact' && (
          <div className="min-h-screen flex items-center px-6 md:px-8">
            <div className="max-w-5xl mx-auto w-full py-32">
              <h2 className={`text-4xl md:text-5xl font-semibold mb-8 animate-fadeUp ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}>
                Get in touch
              </h2>
              <p className={`text-lg mb-12 leading-relaxed animate-fadeUp delay-1 serif max-w-2xl ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Interested in healthcare ML, research collaboration, or just want to chat? 
                I'd love to hear from you.
              </p>

              <div className="space-y-6 animate-fadeUp delay-2">
                <a 
                  href="mailto:bcfeeney@umass.edu"
                  className={`flex items-center gap-3 text-lg transition-opacity hover:opacity-60 w-fit ${darkMode ? 'text-neutral-50' : 'text-neutral-950'}`}
                >
                  <Mail size={20} />
                  bcfeeney@umass.edu
                </a>
                
                <div className="flex gap-8 pt-4">
                  <a 
                    href="https://www.linkedin.com/in/benfeeney/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-opacity hover:opacity-60 link-hover ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}
                  >
                    LinkedIn
                    <ArrowUpRight size={14} />
                  </a>
                  <a 
                    href="https://github.com/bcfeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-opacity hover:opacity-60 link-hover ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}
                  >
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`border-t py-8 px-6 md:px-8 ${darkMode ? 'border-neutral-900' : 'border-neutral-200'}`}>
        <div className="max-w-5xl mx-auto text-xs">
          <span className={darkMode ? 'text-neutral-600' : 'text-neutral-500'}>
            © {new Date().getFullYear()} Benjamin Feeney
          </span>
        </div>
      </footer>
    </div>
  );
}
