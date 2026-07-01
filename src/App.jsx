import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Sun, Moon } from 'lucide-react';
import headshot from './assets/headshot.jpg';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [copied, setCopied] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [goalsDone, setGoalsDone] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const navigateTo = (page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 350);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('bcfeeney@umass.edu').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const projects = [
    {
      name: 'Sentinel',
      description:
        'AI safety net for missed cancer diagnoses. Analyzes radiology reports to flag high-risk patients and care gaps — validated on 526K hospital admissions (MIMIC-IV) and 10,779 real lung-cancer-screening encounters at UMass Memorial Medical Center, with a manuscript in preparation.',
      tech: ['Python', 'scikit-learn', 'DuckDB', 'sentence-transformers'],
      github: null,
    },
  ];

  const experience = [
    {
      role: 'Undergraduate Researcher',
      org: 'Harvard & Dana-Farber',
      team: 'BayesMendel Lab',
      period: 'Nov 2025 – Present',
      work: 'Reconstructing hereditary cancer penetrance functions for clinical risk prediction tools',
    },
    {
      role: 'Forward Deployed Engineer',
      org: 'UMass Amherst',
      team: 'Math & Statistics',
      period: 'Sept 2025 – Present',
      work: 'Building PRISM: multi-tenant scientific knowledge system for academic labs',
    },
    {
      role: 'Research Intern',
      org: 'Stanford Medicine',
      team: 'Curtis Lab',
      period: 'June – Aug 2025',
      work: 'Bayesian CNV models for spatial transcriptomics tumor heterogeneity analysis',
    },
  ];

  const goals = [
    { label: 'Complete an Ironman', emoji: '🏅' },
    { label: 'Summit Kilimanjaro', emoji: '🗻' },
    { label: 'Bike through the Alps', emoji: '🚴' },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? 'dark bg-neutral-950 text-neutral-50' : 'light bg-neutral-50 text-neutral-950'
      }`}
    >
      {/* Cursor glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, ${
            darkMode ? 'rgba(52, 211, 153, 0.07)' : 'rgba(5, 150, 105, 0.06)'
          }, transparent 60%)`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 20
            ? darkMode
              ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800'
              : 'bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200'
            : ''
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
          <button
            onClick={() => navigateTo('home')}
            className={`text-lg font-medium tracking-tight transition-opacity hover:opacity-60 ${
              darkMode ? 'text-neutral-50' : 'text-neutral-950'
            }`}
          >
            Benjamin Feeney
          </button>
          <div className="flex items-center gap-6 md:gap-8">
            {['work', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`relative text-sm capitalize transition-opacity hover:opacity-60 ${
                  currentPage === page
                    ? darkMode
                      ? 'text-neutral-50'
                      : 'text-neutral-950'
                    : darkMode
                    ? 'text-neutral-400'
                    : 'text-neutral-600'
                }`}
              >
                {page}
                {currentPage === page && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500" />
                )}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`ml-2 transition-all hover:opacity-60 hover:rotate-45 duration-300 ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className="relative z-10"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
          transition:
            'opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1), transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* HOME */}
        {currentPage === 'home' && (
          <div className="min-h-screen flex items-center px-6 md:px-8">
            <div className="max-w-5xl mx-auto w-full py-32">
              <div className="flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-16">
                <div className="flex-1">
                  <h1
                    className={`text-5xl md:text-7xl font-semibold mb-8 leading-[1.1] animate-fadeUp ${
                      darkMode ? 'text-neutral-50' : 'text-neutral-950'
                    }`}
                  >
                    Applied math student building{' '}
                    <span className="gradient-text">ML systems for healthcare</span>
                  </h1>
                  <p
                    className={`text-lg md:text-xl mb-12 leading-relaxed animate-fadeUp delay-1 serif ${
                      darkMode ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    Working on production infrastructure, Bayesian modeling, and clinical decision
                    support. Currently at UMass Amherst, Harvard, and building PRISM.
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fadeUp delay-2">
                    <button
                      onClick={() => navigateTo('work')}
                      className={`px-6 py-3 text-sm font-medium rounded-lg transition-all hover:-translate-y-0.5 ${
                        darkMode
                          ? 'bg-neutral-50 text-neutral-950 hover:bg-emerald-300'
                          : 'bg-neutral-950 text-neutral-50 hover:bg-emerald-700'
                      }`}
                    >
                      View work
                    </button>
                    <button
                      onClick={() => navigateTo('contact')}
                      className={`px-6 py-3 text-sm font-medium rounded-lg transition-all hover:-translate-y-0.5 ${
                        darkMode
                          ? 'border border-neutral-700 hover:border-emerald-500 text-neutral-50'
                          : 'border border-neutral-300 hover:border-emerald-600 text-neutral-950'
                      }`}
                    >
                      Get in touch
                    </button>
                  </div>
                </div>

                <div className="animate-fadeUp delay-1 flex flex-col items-center shrink-0">
                  <button
                    onClick={() => setSpinCount((c) => c + 1)}
                    aria-label="Headshot of Benjamin Feeney"
                    className="group relative rounded-full focus:outline-none"
                  >
                    <div
                      className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <img
                      key={spinCount}
                      src={headshot}
                      alt="Benjamin Feeney"
                      className={`relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover ring-2 transition-transform duration-500 group-hover:scale-[1.03] ${
                        spinCount > 0 ? 'animate-spin360' : ''
                      } ${darkMode ? 'ring-neutral-800' : 'ring-neutral-200'}`}
                    />
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
              <h2
                className={`text-4xl md:text-5xl font-semibold mb-16 animate-fadeUp ${
                  darkMode ? 'text-neutral-50' : 'text-neutral-950'
                }`}
              >
                Work
              </h2>

              {/* Projects */}
              <div className="mb-24">
                <h3 className="text-sm uppercase tracking-wider mb-8 animate-fadeUp delay-1 text-neutral-500">
                  Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, i) => {
                    const Card = project.github ? 'a' : 'div';
                    const linkProps = project.github
                      ? { href: project.github, target: '_blank', rel: 'noopener noreferrer' }
                      : {};
                    return (
                    <Card
                      key={i}
                      {...linkProps}
                      onMouseEnter={() => setHoveredProject(i)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className={`group block rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 animate-fadeUp delay-${
                        i + 2
                      } ${
                        darkMode
                          ? 'border-neutral-800 bg-neutral-900/40 hover:border-emerald-500/50 hover:shadow-[0_8px_40px_rgba(52,211,153,0.08)]'
                          : 'border-neutral-200 bg-white hover:border-emerald-600/40 hover:shadow-[0_8px_40px_rgba(5,150,105,0.1)]'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span
                          className={`text-xs font-mono ${
                            hoveredProject === i ? 'text-emerald-500' : 'text-neutral-500'
                          } transition-colors`}
                        >
                          0{i + 1}
                        </span>
                        {project.github && (
                          <ArrowUpRight
                            size={18}
                            className={`transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                              hoveredProject === i ? 'text-emerald-500' : 'text-neutral-500'
                            }`}
                          />
                        )}
                      </div>
                      <h4
                        className={`text-2xl font-semibold mb-3 ${
                          darkMode ? 'text-neutral-50' : 'text-neutral-950'
                        }`}
                      >
                        {project.name}
                      </h4>
                      <p
                        className={`text-base leading-relaxed mb-6 serif ${
                          darkMode ? 'text-neutral-400' : 'text-neutral-600'
                        }`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className={`text-xs px-3 py-1 rounded-full ${
                              darkMode
                                ? 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                                : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                    );
                  })}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-8 animate-fadeUp delay-4 text-neutral-500">
                  Experience
                </h3>
                <div
                  className={`relative border-l pl-8 space-y-12 ${
                    darkMode ? 'border-neutral-800' : 'border-neutral-200'
                  }`}
                >
                  {experience.map((exp, i) => (
                    <div key={i} className={`relative animate-fadeUp delay-${i + 5}`}>
                      <span
                        className={`absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full ${
                          i === 0
                            ? 'bg-emerald-500'
                            : darkMode
                            ? 'bg-neutral-700'
                            : 'bg-neutral-300'
                        }`}
                      />
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
                        <div>
                          <h4
                            className={`text-lg font-semibold ${
                              darkMode ? 'text-neutral-50' : 'text-neutral-950'
                            }`}
                          >
                            {exp.role}
                          </h4>
                          <p className={darkMode ? 'text-sm text-neutral-500' : 'text-sm text-neutral-600'}>
                            {exp.org} · {exp.team}
                          </p>
                        </div>
                        <span
                          className={`text-sm shrink-0 ${
                            darkMode ? 'text-neutral-500' : 'text-neutral-600'
                          }`}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p
                        className={`text-base leading-relaxed serif ${
                          darkMode ? 'text-neutral-400' : 'text-neutral-600'
                        }`}
                      >
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
              <h2
                className={`text-4xl md:text-5xl font-semibold mb-16 animate-fadeUp ${
                  darkMode ? 'text-neutral-50' : 'text-neutral-950'
                }`}
              >
                About
              </h2>

              <div className="max-w-2xl">
                <div className="space-y-6">
                  <img
                    src={headshot}
                    alt="Benjamin Feeney"
                    className={`float-right ml-6 mb-4 w-32 h-32 rounded-2xl object-cover ring-1 animate-fadeUp delay-1 hidden sm:block ${
                      darkMode ? 'ring-neutral-800' : 'ring-neutral-200'
                    }`}
                  />
                  <p
                    className={`text-base leading-relaxed animate-fadeUp delay-1 serif ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    I'm a junior at UMass Amherst studying applied mathematics with a statistics
                    &amp; data science double major, graduating Fall 2027.
                  </p>

                  <p
                    className={`text-base leading-relaxed animate-fadeUp delay-2 serif ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    I'm passionate about building ML systems that actually get deployed and used in
                    clinical settings. I'm particularly interested in Bayesian modeling, knowledge
                    systems, and making probabilistic models that doctors can actually trust for
                    patient care.
                  </p>

                  <p
                    className={`text-base leading-relaxed animate-fadeUp delay-3 serif ${
                      darkMode ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    In my free time, I enjoy hiking, producing music, and reading.
                  </p>

                  <div className="animate-fadeUp delay-4 pt-4">
                    <h3 className="text-sm uppercase tracking-wider mb-4 text-neutral-500">
                      Life list <span className="normal-case">(click to manifest)</span>
                    </h3>
                    <div className="space-y-3">
                      {goals.map((goal, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setGoalsDone((g) => ({ ...g, [i]: !g[i] }))
                          }
                          className={`flex items-center gap-3 text-sm transition-all hover:translate-x-1 ${
                            darkMode ? 'text-neutral-300' : 'text-neutral-700'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] transition-colors ${
                              goalsDone[i]
                                ? 'bg-emerald-500 border-emerald-500 text-white'
                                : darkMode
                                ? 'border-neutral-700'
                                : 'border-neutral-300'
                            }`}
                          >
                            {goalsDone[i] ? '✓' : ''}
                          </span>
                          <span className={goalsDone[i] ? 'line-through opacity-60' : ''}>
                            {goal.label} {goal.emoji}
                          </span>
                        </button>
                      ))}
                    </div>
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
              <h2
                className={`text-4xl md:text-5xl font-semibold mb-8 animate-fadeUp ${
                  darkMode ? 'text-neutral-50' : 'text-neutral-950'
                }`}
              >
                Get in touch
              </h2>
              <p
                className={`text-lg mb-12 leading-relaxed animate-fadeUp delay-1 serif max-w-2xl ${
                  darkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                Interested in healthcare ML, research collaboration, or just want to chat? I'd love
                to hear from you.
              </p>

              <div className="space-y-6 animate-fadeUp delay-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href="mailto:bcfeeney@umass.edu"
                    className={`flex items-center gap-3 text-lg transition-opacity hover:opacity-60 w-fit ${
                      darkMode ? 'text-neutral-50' : 'text-neutral-950'
                    }`}
                  >
                    <Mail size={20} />
                    bcfeeney@umass.edu
                  </a>
                  <button
                    onClick={copyEmail}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
                      copied
                        ? 'border-emerald-500 text-emerald-500'
                        : darkMode
                        ? 'border-neutral-700 text-neutral-400 hover:border-neutral-500'
                        : 'border-neutral-300 text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <div className="flex gap-8 pt-4">
                  <a
                    href="https://www.linkedin.com/in/benfeeney/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-opacity hover:opacity-60 link-hover ${
                      darkMode ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    LinkedIn
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://github.com/bcfeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-opacity hover:opacity-60 link-hover ${
                      darkMode ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
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
      <footer
        className={`relative z-10 border-t py-8 px-6 md:px-8 ${
          darkMode ? 'border-neutral-900' : 'border-neutral-200'
        }`}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center text-xs">
          <span className={darkMode ? 'text-neutral-600' : 'text-neutral-500'}>
            © {new Date().getFullYear()} Benjamin Feeney
          </span>
          <span className={darkMode ? 'text-neutral-700' : 'text-neutral-400'}>
            Built with React, Tailwind, and a concerning amount of coffee ☕
          </span>
        </div>
      </footer>
    </div>
  );
}
