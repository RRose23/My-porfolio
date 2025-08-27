const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "TypeScript"],
    link: "https://ruthsilva-dev/",
  },
 {
  title: "Sensei Sushi",
  description:
    "Japanese restaurant website with a digital menu and a modern customer experience.",
  tech: ["React", "TailwindCSS", "Netlify"],
  link: "https://senseisushi.netlify.app/",
},

];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 text-sm rounded-full bg-purple-600 text-white">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Some of my <span className="text-purple-600">Work</span> 🚀
          </h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-600">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
