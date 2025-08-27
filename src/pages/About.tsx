import { Heart, Coffee, Code, Lightbulb } from "lucide-react";

export function About() {
  const interests = [
    { name: "Web Development", icon: Code },
    { name: "APIs & Microservices", icon: Lightbulb },
    { name: "UI/UX Design", icon: Heart },
    { name: "Emerging Technologies", icon: Coffee }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-800 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 text-sm bg-purple-700 text-white rounded-full">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Developer Focused on
            <span className="text-purple-400"> Technology</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a full stack developer passionate about technology and always looking 
              for new challenges. With experience in modern web development, I focus on 
              building functional applications with great user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always eager to learn new technologies and contribute to innovative projects. 
              I believe programming is an art that combines logic and creativity to 
              solve real-world problems.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-900 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-purple-400">2+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-purple-400">1+</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            <div className="p-8 bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">
                Areas of Interest
              </h3>

              <div className="space-y-6">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{interest.name}</h4>
                        <p className="text-sm text-gray-400">Always exploring new possibilities</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl">
              <blockquote className="text-center">
                <p className="text-lg italic text-white mb-4">
                  "The best way to predict the future is to invent it."
                </p>
                <cite className="text-sm text-gray-300 font-semibold">
                  — Alan Kay
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
