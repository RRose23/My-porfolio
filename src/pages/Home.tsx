import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  GraduationCap,
} from "lucide-react";

export function Home() {
  const data = {
    name: "Ruth Silva",
    title: "Full Stack Developer",
    subtitle: "Finishing my course and seeking my first professional internship",
    github: "https://github.com/RRose23",
    linkedin: "https://www.linkedin.com/in/ruth-silva-2065b9255/",
    email: "ruthrosa888@email.com",
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl text-center">
        {/* Name and Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-400 font-semibold mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Student Status */}
        <div className="mb-8 animate-slide-up-delayed">
          <div className="inline-flex items-center px-6 py-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                <span>Active Student</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span>Available for Internship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up-delayed">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-md transition-all hover:scale-105"
          >
            View Projects
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in-delayed">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all hover:scale-110 text-gray-300 hover:text-purple-400"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all hover:scale-110 text-gray-300 hover:text-purple-400"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${data.email}`}
            className="p-3 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all hover:scale-110 text-gray-300 hover:text-purple-400"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Education Info */}
        <div className="mb-12 animate-fade-in-delayed">
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur rounded-lg border border-gray-700/50">
            <GraduationCap className="w-5 h-5 text-purple-400 mr-3" />
            <span className="text-gray-300">
              <strong className="text-white">Currently Studying:</strong> Full
              Stack Development •
              <strong className="text-purple-400 ml-2">90% completed</strong>
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-500 hover:text-purple-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
            <p className="text-sm mt-2">Scroll to learn more</p>
          </button>
        </div>
      </div>
    </section>
  );
}
