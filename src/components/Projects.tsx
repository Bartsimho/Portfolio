import React from 'react';

const projects = [
  {
    title: "Text Based Adventure Game",
    description: "A text based adventure game built for a Game Jam",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["C++"],
    link: "https://itch.io/jam/we-do-a-lil-jam/rate/2337941"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Redux", "Firebase"]
  },
  {
    title: "GPS Distance Measuring Website",
    description: "A GPS distance measuring web app built with React, Typescript and Tailwind",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://bartsimho.github.io/CourseManagement/"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.link}>
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}