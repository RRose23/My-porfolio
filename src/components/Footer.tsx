import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  GraduationCap,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const data = {
    name: "Ruth 👋",
    github: "https://github.com/RRose23",
    linkedin: "https://linkedin.com/in/ruth-silva-2065b9255/",
    email: "ruthsilva888@gmail.com",
  };

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    projects: [{ name: "View All", href: "#projects" }],
  };

  const socialLinks = [
    { icon: Github, url: data.github, label: "GitHub" },
    { icon: Linkedin, url: data.linkedin, label: "LinkedIn" },
    { icon: Mail, url: `mailto:${data.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {data.name.split(" ")[0]}
                </h3>
                <p className="text-purple-400 text-sm flex items-center">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Full Stack Development Student
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Passionate student developer currently finishing my full stack
              development course. Always eager to learn new technologies and
              seeking my first professional internship opportunity.
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-purple-600 hover:border-purple-500 transition-all hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 group-hover:text-white text-gray-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Status Indicator */}
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full border border-purple-500">
              <div className="w-2 h-2 bg-purple-300 rounded-full mr-2 animate-pulse"></div>
              Seeking internship opportunities
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {currentYear} {data.name}. All rights reserved.
            </p>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>using React & FastAPI</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tech Stack Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-center text-xs text-gray-600">
            This portfolio was built as a learning project with React, Tailwind
            CSS, and FastAPI. Deployed with dedication and enthusiasm for
            learning.
          </p>
        </div>
      </div>
    </footer>
  );
}
