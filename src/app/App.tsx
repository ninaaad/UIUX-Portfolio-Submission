import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';
import Logo from './components/Logo/Logo';
import SkyClashProject from './components/SkyClashProject';
import SeedsOfBrahmaProject from './components/SeedsOfBrahmaProject';
import UTSRedesignProject from './components/UTSRedesignProject';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'skyclash' | 'seeds-of-brahma' | 'uts-redesign'>('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  if (currentPage === 'skyclash') {
    return <SkyClashProject onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'seeds-of-brahma') {
    return <SeedsOfBrahmaProject onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'uts-redesign') {
    return <UTSRedesignProject onBackToPortfolio={() => setCurrentPage('home')} />;
  }

  const projects = [
    {
      title: "SkyClash",
      description: "High-octane aerial combat experience featuring fast-paced dogfights in browser-based arena environments with real-time multiplayer functionality.",
      image: "/src/imports/skyclashlogo.png",
      tech: ["Unity 6", "C#", "Multiplayer"],
      link: "skyclash"
    },
    {
      title: "Seeds of Brahma",
      description: "Immersive third-person and VR shrine interaction system combining spiritual exploration with cutting-edge technology and intuitive mechanics.",
      image: "/src/imports/Screenshot_2026-04-29_121358.png",
      tech: ["Unreal Engine", "C++", "Visual Scripting"],
      link: "seeds-of-brahma"
    },
    {
      title: "UTS App Redesign",
      description: "Complete user experience overhaul for the university transit system, focusing on accessibility, modern design principles, and streamlined navigation.",
      image: "/src/imports/Screenshot_2026-04-29_121446.png",
      tech: ["Figma", "UI/UX", "Prototyping"],
      link: "uts-redesign"
    }
  ];

  const skills = [
    "Unity", "Unreal Engine", "C#", "C++",
    "Game Design", "3D Modeling", "Shader Programming", "AI Programming",
    "Physics Systems", "Multiplayer Networking", "UI/UX Design", "Performance Optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-orange-500/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-orange-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-black/95 border-t border-orange-500/20">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 py-2 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="text-orange-400 mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">Hi, I'm</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Ninad Gawade
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-4 sm:mb-6">Game Developer</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Crafting immersive gaming experiences through innovative game design, cutting-edge technology,
              and a passion for interactive storytelling. Specializing in Unity, Unreal Engine, and multiplayer systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 text-center"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-3 border-2 border-orange-500 rounded-lg hover:bg-orange-500/10 transition-all duration-300 text-center"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1518719028738-e7262020a932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Game Development"
                className="relative w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base order-1 md:order-2">
              <p>
                I'm a passionate beginner game developer with one year of hands-on experience in creating
                interactive gaming experiences. My journey into game development has been driven by a deep
                love for both playing and creating immersive worlds.
              </p>
              <p>
                Working primarily with Unity and Unreal Engine, I've been exploring various aspects of game
                development including gameplay mechanics, multiplayer systems, and VR interactions. From
                browser-based aerial combat games to spiritual VR experiences, each project has been a
                stepping stone in my learning journey.
              </p>
              <p>
                I'm constantly learning new techniques and expanding my skillset, from C# and C++ programming
                to visual scripting and UI/UX design. My goal is to craft experiences that not only entertain
                but also leave a lasting impact on players.
              </p>
              <p className="text-orange-400">
                Let's create something extraordinary together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  if (project.link === 'skyclash') {
                    setCurrentPage('skyclash');
                    window.scrollTo(0, 0);
                  } else if (project.link === 'seeds-of-brahma') {
                    setCurrentPage('seeds-of-brahma');
                    window.scrollTo(0, 0);
                  } else if (project.link === 'uts-redesign') {
                    setCurrentPage('uts-redesign');
                    window.scrollTo(0, 0);
                  }
                }}
                className="group bg-gray-900/50 rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 cursor-pointer block"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-xs text-orange-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-lg border border-orange-500/20 hover:border-orange-500/60 transition-all duration-300 text-center hover:shadow-lg hover:shadow-orange-500/30 group"
              >
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/50 border border-orange-500/20 rounded-lg focus:border-orange-500/60 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/50 border border-orange-500/20 rounded-lg focus:border-orange-500/60 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-white placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/50 border border-orange-500/20 rounded-lg focus:border-orange-500/60 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-black/50 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-gray-400 text-sm sm:text-base text-center md:text-left">
            © 2026 Ninad Gawade. All rights reserved.
          </div>
          <div className="flex gap-3 sm:gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Discord'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-orange-500/30 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                aria-label={platform}
              >
                <span className="text-xs text-gray-400 hover:text-orange-400">{platform[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}