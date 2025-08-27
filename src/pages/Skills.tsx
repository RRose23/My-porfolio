import React, { useState } from "react";

import { Zap, Award, Code2, BookOpen, GitBranch } from "lucide-react";

// Cabeçalho reutilizável
function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block mb-4 px-4 py-2 text-sm bg-purple-700 text-white rounded-full">
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {title.split(" ")[0]}{" "}
        <span className="text-purple-400">{title.split(" ")[1]}</span>
      </h2>
    </div>
  );
}

// Wrapper para seções
function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6 bg-gray-900 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

// Card simples
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border p-6 ${className}`}>
      {children}
    </div>
  );
}

// Helpers
function getLevelText(level: number) {
  if (level >= 70) return "Avançado";
  if (level >= 50) return "Intermediário";
  if (level >= 30) return "Básico";
  return "Iniciante";
}

function getProgressColor(level: number) {
  if (level >= 70) return "bg-emerald-400";
  if (level >= 50) return "bg-blue-400";
  if (level >= 30) return "bg-yellow-400";
  return "bg-red-400";
}

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  // Categorias de skills
  const skillCategories: Record<string, { title: string; skills: { name: string; level: number }[] }> = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 70 },
        { name: "TailwindCSS", level: 75 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express", level: 55 },
        { name: "Databases (SQL/NoSQL)", level: 50 },
      ],
    },
    tools: {
      title: "Dev Tools",
      skills: [
        { name: "Git & GitHub", level: 70 },
        { name: "VSCode", level: 80 },
        { name: "Linux CLI", level: 60 },
      ],
    },
  };

  return (
    <SectionWrapper id="skills">
      {/* Cabeçalho */}
      <SectionHeader tag="Skills" title="Technical Stack" />

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {Object.keys(skillCategories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {skillCategories[tab].title.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Skills List */}
        <Card className="p-8 bg-gray-900 shadow-lg border border-gray-700">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {skillCategories[activeTab]?.title}
            </h3>
            <p className="text-gray-400">
              Current proficiency levels in this technology category.
            </p>
          </div>

          <div className="space-y-6">
            {skillCategories[activeTab]?.skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-white">{skill.name}</h4>

                  {/* Badge + Percent */}
                  <div className="flex items-center space-x-2">
                    <span
                      className={`
                        px-2 py-1 rounded-full text-xs font-medium border
                        ${
                          skill.level >= 70
                            ? "bg-emerald-900/50 text-emerald-300 border-emerald-700"
                            : skill.level >= 50
                            ? "bg-blue-900/50 text-blue-300 border-blue-700"
                            : skill.level >= 30
                            ? "bg-yellow-900/50 text-yellow-300 border-yellow-700"
                            : "bg-red-900/50 text-red-300 border-red-700"
                        }
                      `}
                    >
                      {getLevelText(skill.level)}
                    </span>
                    <span className="text-sm text-gray-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${getProgressColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Extra Info */}
        <div className="space-y-8">
          {/* Learning Progress */}
          <Card className="p-8 bg-gray-900 border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-purple-400" />
              Learning Progress
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">8+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">3+</div>
                <div className="text-sm text-gray-400">Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">2</div>
                <div className="text-sm text-gray-400">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
                <div className="text-sm text-gray-400">Dev Tools</div>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 bg-gray-900 shadow-lg border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-emerald-400" />
              Certifications & Learning
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Web Development Bootcamp</h4>
                  <p className="text-sm text-gray-400">Udemy • 2024</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">JavaScript Fundamentals</h4>
                  <p className="text-sm text-gray-400">FreeCodeCamp • 2024</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Git & GitHub</h4>
                  <p className="text-sm text-gray-400">Self-taught • 2024</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
