import React from 'react';
import dissertationPDF from '../assets/An Investigation and Technical Demonstration of a Course Management System for Golfers.pdf'

const projects = [
  {
    title: "Text Based Adventure Game",
    description: "A text based adventure game built for the UoL 'We do a Lil Jam' Game Jam",
    image: "https://img.itch.zone/aW1nLzEzODQ2Njg4LnBuZw==/100x79%23/8lpWiH.png?auto=format&fit=crop&w=800&q=80",
    tags: ["C++"],
    link: "https://itch.io/jam/we-do-a-lil-jam/rate/2337941"
  },
  {
    title: "Dissertation: An Investigation and Technical Demonstration of a GPS Course Management System for Golfers",
    description: "A Full Dissertation study into if giving information imporves performance through decision making",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    tags: ["Dissertation", "Data Analysis", "Python"],
    link: dissertationPDF
  },
  {
    title: "GPS Distance Measuring Website",
    description: "A GPS distance measuring web app built with React, Typescript and Tailwind",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Typescript", "Tailwind", "Vite"],
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