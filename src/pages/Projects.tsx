import React from "react";

const projects = [
  {
    title: "Project One",
    image: "https://via.placeholder.com/400x220?text=Project+1",
    link: "https://example.com/project1",
    description: "A modern web app featuring authentication, real-time updates, and a responsive UI.",
  },
  {
    title: "Project Two",
    image: "https://via.placeholder.com/400x220?text=Project+2",
    link: "https://example.com/project2",
    description: "A portfolio website built with React and Tailwind CSS, showcasing interactive components.",
  },
  {
    title: "Project Three",
    image: "https://via.placeholder.com/400x220?text=Project+3",
    link: "https://example.com/project3",
    description: "A RESTful API for managing tasks, built with Node.js and Express, featuring JWT auth.",
  },
  {
    title: "Project Four",
    image: "https://via.placeholder.com/400x220?text=Project+4",
    link: "https://example.com/project4",
    description: "A real-time chat application using Socket.io and React, supporting multiple rooms.",
  },
  {
    title: "Project Five",
    image: "https://via.placeholder.com/400x220?text=Project+5",
    link: "https://example.com/project5",
    description: "A weather dashboard that fetches live data from an API and displays it beautifully.",
  },
  {
    title: "Project Six",
    image: "https://via.placeholder.com/400x220?text=Project+6",
    link: "https://example.com/project6",
    description: "A to-do list app with drag-and-drop, persistent storage, and a clean, modern UI.",
  },
];

const Projects: React.FC = () => (
  <section className="py-20 px-4 bg-background min-h-screen">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-primary text-white rounded-md font-medium shadow hover:bg-primary/90 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;