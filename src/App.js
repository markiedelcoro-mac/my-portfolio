import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Code, Database, TrendingUp, Users, Award, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MAC Consultancy
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-slate-700 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mark Anthony Del Coro
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 mb-4">DevOps Head</p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Innovative leader with 15+ years of experience bridging software development, 
              DevOps, and financial management to drive organizational excellence
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </a>
              <a href="#experience" className="border-2 border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                View Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With over 15 years of professional experience, I bring a unique blend of 
                technical expertise and financial acumen to every project. My journey spans 
                from accounting leadership to DevOps innovation, giving me a comprehensive 
                understanding of both business operations and technical infrastructure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently serving as DevOps Head, I manage cross-functional teams, design 
                robust software solutions, and ensure optimal performance across all systems. 
                My background in accounting provides valuable insights into cost optimization 
                and strategic decision-making.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-xl">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Teams</h3>
                <p className="text-sm">Leadership & Management</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-xl">
                <Code className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">DevOps</h3>
                <p className="text-sm">Infrastructure & Development</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-xl">
                <TrendingUp className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Finance</h3>
                <p className="text-sm">Accounting Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {/* DevOps Head */}
            <div className="bg-slate-800 rounded-xl p-8 border border-blue-500/30 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">DevOps Head</h3>
                  <p className="text-gray-400 mb-4">February 2024 - Present</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Managing Developers, System Administrators, and Database Administrators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Design, develop, test, and deploy software solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Optimize software performance and infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Collaborate with product managers and stakeholders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Stay current with advancements in software, network & infrastructure security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Lead code reviews and team meetings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accounting Head */}
            <div className="bg-slate-800 rounded-xl p-8 border border-green-500/30 hover:border-green-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Accounting Head</h3>
                  <p className="text-gray-400 mb-4">August 2013 - December 2020</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>Reported on financial performance to Board of Directors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>Analyzed internal and external financial statements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>Developed and implemented improved accounting procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Data Structures & Algorithms</li>
                <li>Development Methodology</li>
                <li>Testing & Debugging</li>
                <li>Code Reviews</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <Database className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Database & SQL</li>
                <li>Network Security</li>
                <li>Infrastructure Security</li>
                <li>System Administration</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Finance & Leadership</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Financial Reporting & Analysis</li>
                <li>Leadership in Accounting Teams</li>
                <li>Team Management</li>
                <li>Adaptability & Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="bg-slate-800 rounded-xl p-8 border border-blue-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Masters Degree
            </h3>
            <p className="text-xl text-gray-300 mb-2">Major in Business Administration</p>
            <p className="text-gray-400 mb-2">Cebu Technological University</p>
            <p className="text-gray-500">2025 - Present</p>
			<h3 className="text-2xl font-bold text-green-400 mb-2">
              Bachelor of Science in Commerce
            </h3>
            <p className="text-xl text-gray-300 mb-2">Major in Business Administration</p>
            <p className="text-gray-400 mb-2">University of San Jose - Recoletos</p>
            <p className="text-gray-500">2003 - 2008</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:markiedelcoro@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>markiedelcoro@gmail.com</span>
            </a>
            <a
              href="tel:09947912900"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>0994 7912 900</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mark-anthony-del-coro-788290250"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
          <p className="text-gray-400 mt-8">
            📍 Unit 1 Oppra Kalunasan, Cebu City
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 Mark Anthony Del Coro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
