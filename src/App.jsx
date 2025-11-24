import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
// Import all data
import { PROFILE, SKILLS, PROJECTS, BLOG_POSTS, EXPERIENCE } from './data';

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:opacity-90 transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
// Enhanced Cyber Section Header Component
const SectionHeader = ({ title, subtitle, center = false, theme = "yang" }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <div className="relative inline-block">
      <h2 className={`text-5xl font-black mb-4 relative z-10 ${
        theme === "yin" 
          ? "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" 
          : "bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"
      }`}>
        {title}
      </h2>
      <div className={`absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r ${
        theme === "yin" ? "from-cyan-400 to-blue-500" : "from-blue-600 to-purple-700"
      } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
    </div>
    {subtitle && (
      <p className={`text-xl ${theme === "yin" ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto leading-relaxed`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-32 mt-6 ${center ? 'mx-auto' : ''} bg-gradient-to-r ${
      theme === "yin" 
        ? "from-cyan-400 to-blue-500" 
        : "from-blue-600 to-purple-700"
    } rounded-full`} />
  </div>
);

// Enhanced Cyber Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['home', 'skills', 'projects', 'experience', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Smooth scrolling
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const navItems = [
    { name: 'Home', icon: '🚀', id: 'home' },
    { name: 'Skills', icon: '⚡', id: 'skills' },
    { name: 'Projects', icon: '💻', id: 'projects' },
    { name: 'Experience', icon: '📈', id: 'experience' },
    { name: 'Blog', icon: '📝', id: 'blog' },
    { name: 'Contact', icon: '📱', id: 'contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Cyber Logo */}
          <motion.a 
            href="#home"
            className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {PROFILE.name}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 bg-gray-800/50 rounded-2xl p-2 backdrop-blur-lg border border-cyan-500/20">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 cyber-glow'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.name}
                  {isActive && (
                    <motion.div 
                      className="absolute inset-0 border border-cyan-400/50 rounded-xl"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-cyan-400/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Enhanced Cyber Hero Section
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = PROFILE.name;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(#0ea5e9_1px,transparent_1px),linear-gradient(90deg,#0ea5e9_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Cyber Profile Avatar */}
        <motion.div 
          className="w-48 h-48 mx-auto mb-12 relative group"
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full p-1 border-2 border-cyan-400/30 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-white font-black text-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10" />
              JM
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-500 shadow-[0_0_30px_5px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_50px_10px_rgba(34,211,238,0.5)]" />
            </div>
          </div>
        </motion.div>
        
        {/* Cyber Typing Text */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-gray-300">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              {displayText}
              <span className="text-cyan-400 animate-pulse">_</span>
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-2xl md:text-3xl text-gray-400 mb-6 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
            {PROFILE.title}
          </span>
        </motion.p>

        <motion.p 
          className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {PROFILE.bio}
        </motion.p>
        
        {/* Cyber CTA Buttons */}
        <motion.div 
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.a 
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>🚀</span>
              Explore My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="absolute inset-0 border border-cyan-400/50 rounded-2xl group-hover:border-cyan-400 transition-colors duration-500" />
          </motion.a>

          <motion.a 
            href={PROFILE.resume}
            className="group px-8 py-4 border-2 border-cyan-400/30 text-cyan-400 rounded-2xl font-bold text-lg hover:bg-cyan-400/10 transition-all duration-500 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>📄</span>
              Download Resume
            </span>
            <div className="absolute inset-0 bg-cyan-400/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.a>
        </motion.div>
        
        {/* Cyber Social Links */}
        <motion.div 
          className="flex justify-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          {Object.entries(PROFILE.social).map(([platform, url]) => (
            <motion.a 
              key={platform} 
              href={url}
              className="group p-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-gray-400 hover:text-cyan-400 transition-all duration-500 relative overflow-hidden"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative z-10 capitalize font-medium">
                {platform}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500" />
              <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/30 rounded-2xl transition-colors duration-500" />
            </motion.a>
          ))}
        </motion.div>

        {/* Cyber Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
            <div className="absolute inset-0 bg-cyan-400/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Skill Bar Component
const SkillBar = ({ skill, theme, index }) => (
  <motion.div 
    className="mb-6 group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <div className={`mr-3 p-2 rounded-lg ${
          theme === "yin" 
            ? "bg-gray-700 text-white" 
            : "bg-gray-200 text-gray-800"
        } group-hover:scale-110 transition-transform duration-300`}>
          {skill.icon}
        </div>
        <span className={`font-medium ${theme === "yin" ? "text-white" : "text-gray-800"}`}>
          {skill.name}
        </span>
      </div>
      <span className={`font-bold ${theme === "yin" ? "text-white" : "text-gray-800"}`}>
        {skill.level}%
      </span>
    </div>
    <div className={`w-full rounded-full h-3 overflow-hidden ${
      theme === "yin" ? "bg-gray-700" : "bg-gray-300"
    } relative`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`h-3 rounded-full bg-gradient-to-r ${
          theme === "yin" ? skill.yin : skill.yang
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer"></div>
      </motion.div>
    </div>
  </motion.div>
);

// Enhanced Skills Section with 3D Cards
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = {
    all: SKILLS,
    development: SKILLS.filter(skill => 
      ['Python/Django', 'React/JavaScript', 'RESTful APIs'].includes(skill.name)
    ),
    ai_ml: SKILLS.filter(skill => 
      ['Machine Learning Algorithms', 'Deep Learning', 'LLMs'].includes(skill.name)
    ),
    infrastructure: SKILLS.filter(skill => 
      ['Networking', 'IoT Devices', 'Cloud'].includes(skill.name.split(' ')[0])
    )
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0ea5e9_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Tech Arsenal" 
          subtitle="My weapons of choice in the digital battlefield" 
          center 
          theme="yin" 
        />
        
        {/* Cyber Category Tabs */}
        <motion.div 
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-500 border-2 relative overflow-hidden group ${
                activeCategory === category
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400/50 cyber-glow'
                  : 'bg-gray-800/50 text-gray-400 border-gray-600/50 hover:border-cyan-400/30 hover:text-cyan-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                {category.replace('_', ' ')}
              </span>
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                activeCategory === category ? 'scale-x-100' : ''
              }`} />
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Skill Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
// 3D Skill Card Component
const SkillCard = ({ skill, index }) => (
  <motion.div
    className="group perspective-1000"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="relative transform-style-preserve-3d group-hover:rotate-x-10 transition-transform duration-500">
      <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 border-2 border-gray-700/50 shadow-2xl relative overflow-hidden">
        {/* Card Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        {/* Skill Header */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-500">
              {skill.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{skill.name}</h3>
          </div>
          <span className="text-cyan-400 font-black text-xl">{skill.level}%</span>
        </div>

        {/* Animated Progress Bar */}
        <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden mb-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-shimmer" />
          </motion.div>
        </div>

        {/* Skill Level Indicator */}
        <div className="flex justify-between text-xs text-gray-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-2xl transition-colors duration-500" />
      </div>
    </div>
  </motion.div>
);

// Enhanced Cyber Project Card Component
const ProjectCard = ({ project, index }) => (
  <motion.div 
    className="group perspective-1000"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="relative transform-style-preserve-3d group-hover:rotate-x-5 transition-transform duration-500">
      <div className={`rounded-2xl overflow-hidden shadow-2xl cursor-pointer border-2 ${
        project.theme === "yin" 
          ? "bg-gradient-to-br from-gray-800 to-black border-cyan-500/20" 
          : "bg-gradient-to-br from-white to-gray-100 border-blue-500/20"
      }`}>
        <div className={`h-48 relative overflow-hidden ${
          project.theme === "yin" 
            ? "bg-gradient-to-r from-gray-700 to-gray-900" 
            : "bg-gradient-to-r from-gray-200 to-gray-300"
        }`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="text-cyan-400 font-bold text-lg flex items-center gap-2">
              Explore Project 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold ${
                project.theme === "yin"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                  : "bg-blue-500/20 text-blue-600 border border-blue-400/30"
              }`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-black mb-3 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 ${
            project.theme === "yin" ? "text-white" : "text-gray-800"
          }`}>
            {project.title}
          </h3>
          <p className={`mb-4 leading-relaxed ${
            project.theme === "yin" ? "text-gray-300" : "text-gray-600"
          }`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.theme === "yin"
                  ? "bg-gray-700 text-cyan-400 border border-cyan-400/20"
                  : "bg-gray-200 text-blue-600 border border-blue-400/20"
              }`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href={project.link} className={`font-bold hover:underline flex items-center gap-2 group/link ${
              project.theme === "yin" ? "text-cyan-400" : "text-blue-600"
            }`}>
              View Details
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Enhanced Cyber Projects Section
const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)] bg-[size:40px_40px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeader 
        title="Completed & On-going Projects" 
        subtitle="Cutting-edge solutions for modern challenges" 
        center 
        theme="yang" 
      />
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Enhanced Experience Timeline
const ExperienceTimeline = ({ theme }) => (
  <div className="space-y-12">
    {EXPERIENCE.map((exp, index) => (
      <motion.div 
        key={index}
        className={`relative pl-12 border-l-2 ${
          theme === "yin" ? "border-gray-600" : "border-gray-400"
        }`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-4 ${
          theme === "yin" 
            ? "bg-gray-800 border-white" 
            : "bg-white border-gray-800"
        } flex items-center justify-center`}>
          <div className={`w-2 h-2 rounded-full ${
            exp.theme === "yin" ? "bg-white" : "bg-gray-800"
          }`}></div>
        </div>
        
        <div className={`p-6 rounded-2xl ${
          theme === "yin" 
            ? "bg-gray-700/50 hover:bg-gray-700/70" 
            : "bg-gray-100 hover:bg-gray-200"
        } transition-all duration-300 group cursor-pointer`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
              {exp.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${
              theme === "yin" 
                ? "bg-gray-600 text-white" 
                : "bg-gray-300 text-gray-800"
            }`}>
              {exp.period}
            </span>
          </div>
          <p className={`font-semibold mb-3 ${
            theme === "yin" ? "text-gray-300" : "text-gray-600"
          }`}>
            {exp.company}
          </p>
          <p className={`leading-relaxed ${
            theme === "yin" ? "text-gray-300" : "text-gray-600"
          }`}>
            {exp.description}
          </p>
          
          {/* Skills tags for experience */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Leadership', 'Team Management', 'Project Planning'].map((skill, i) => (
              <span key={i} className={`px-2 py-1 rounded text-xs ${
                theme === "yin" 
                  ? "bg-gray-600 text-white" 
                  : "bg-gray-300 text-gray-800"
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// Experience Section
const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-black">
    <div className="container mx-auto px-6">
      <SectionHeader title="Professional Experience" subtitle="My career journey and professional growth" center theme="yin" />
      <div className="max-w-3xl mx-auto">
        <ExperienceTimeline theme="yin" />
      </div>
    </div>
  </section>
);

// Blog Card Component
const BlogCard = ({ blog }) => (
  <article className={`rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 ${
    blog.theme === "yin" 
      ? "bg-gradient-to-br from-gray-800 to-black text-white" 
      : "bg-gradient-to-br from-white to-gray-100 text-gray-800"
  }`}>
    <div className={`h-32 ${
      blog.theme === "yin" 
        ? "bg-gradient-to-r from-gray-700 to-gray-900" 
        : "bg-gradient-to-r from-gray-200 to-gray-300"
    }`}></div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm ${blog.theme === "yin" ? "text-gray-400" : "text-gray-500"}`}>
          {blog.date}
        </span>
        <span className={`text-sm ${blog.theme === "yin" ? "text-white" : "text-gray-800"}`}>
          {blog.readTime}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
      <p className={`mb-3 ${blog.theme === "yin" ? "text-gray-300" : "text-gray-600"}`}>
        {blog.excerpt}
      </p>
      <a href={blog.link} className={`font-medium hover:underline ${
        blog.theme === "yin" ? "text-white" : "text-gray-800"
      }`}>
        Read more →
      </a>
    </div>
  </article>
);

// Blog Section
const BlogSection = () => (
  <section id="blog" className="py-20 bg-gradient-to-br from-white to-gray-100">
    <div className="container mx-auto px-6">
      <SectionHeader title="Latest Writings" subtitle="Thoughts and insights on technology" center theme="yang" />
      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  </section>
);
// Enhanced Contact Form
const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className={`rounded-2xl p-8 shadow-2xl ${
        theme === "yin" 
          ? "bg-gradient-to-br from-gray-800 to-black" 
          : "bg-gradient-to-br from-white to-gray-100"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {submitStatus === 'success' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-500 text-white rounded-lg flex items-center gap-3"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === "yin" ? "text-white" : "text-gray-700"
            }`}>
              Name *
            </label>
            <input
              type="text"
              required
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                theme === "yin" 
                  ? "border-gray-600 bg-gray-700 text-white focus:ring-white focus:border-white" 
                  : "border-gray-300 bg-white text-gray-800 focus:ring-gray-800 focus:border-gray-800"
              }`}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === "yin" ? "text-white" : "text-gray-700"
            }`}>
              Email *
            </label>
            <input
              type="email"
              required
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                theme === "yin" 
                  ? "border-gray-600 bg-gray-700 text-white focus:ring-white focus:border-white" 
                  : "border-gray-300 bg-white text-gray-800 focus:ring-gray-800 focus:border-gray-800"
              }`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your.email@example.com"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label className={`block text-sm font-medium mb-2 ${
            theme === "yin" ? "text-white" : "text-gray-700"
          }`}>
            Message *
          </label>
          <textarea
            required
            rows={5}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
              theme === "yin" 
                ? "border-gray-600 bg-gray-700 text-white focus:ring-white focus:border-white" 
                : "border-gray-300 bg-white text-gray-800 focus:ring-gray-800 focus:border-gray-800"
            }`}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Tell me about your project or how I can help you..."
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
            theme === "yin"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl"
              : "bg-gradient-to-r from-gray-800 to-black text-white hover:shadow-2xl"
          } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </motion.button>
      </form>
    </motion.div>
  );
};

// Enhanced Cyber Contact Section
const ContactSection = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
    {/* Cyber Grid Background */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[linear-gradient(#0ea5e9_1px,transparent_1px),linear-gradient(90deg,#0ea5e9_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Ready to bring your ideas to life? Let's connect and create something amazing." 
        center 
        theme="yin" 
      />
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Information
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href={`mailto:${PROFILE.email}`} className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  {PROFILE.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  {PROFILE.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-300">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-cyan-400 font-medium">{PROFILE.location}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {Object.entries(PROFILE.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  className="p-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium capitalize">{platform}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <ContactForm theme="yin" />
      </div>
    </div>
  </section>
);
// Enhanced Cyber Footer
const Footer = () => (
  <footer className="py-12 bg-black border-t border-cyan-500/20 relative overflow-hidden">
    {/* Background Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          {PROFILE.name}
        </div>
        <p className="text-gray-400 max-w-md mx-auto">
          Building the future, one line of code at a time
        </p>
      </motion.div>
      
      <div className="flex justify-center gap-6 mb-6">
        {Object.entries(PROFILE.social).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 capitalize text-sm"
          >
            {platform}
          </a>
        ))}
      </div>
      
      <div className="pt-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved. 
          <span className="text-cyan-400 ml-2">Crafted with 💙 and React</span>
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-gray-900">
        <HelmetProvider>
          <title>{`${PROFILE.name} | ${PROFILE.title}`}</title>
          <meta name="description" content={PROFILE.bio} />
        </HelmetProvider>

        <Navigation />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;