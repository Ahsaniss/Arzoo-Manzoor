import React from "react";

const projects = [
    {
    title: "Korean Culture Website",
    image: "/src/assets/Capture.PNG",
    link: "https://korean-culture-sable.vercel.app/",
    description: "A cultural website showcasing Korean traditions, history, and modern culture with interactive features.",
  },
  {
    title: "playful-access-adventures",
    image: "/src/assets/1.PNG",
    link: "https://playful-access-adventures.vercel.app/",
    description: "A web application for exploring playful and accessible adventures, built with React and CSS.",
  },
  {
    title: "Your University's Past Papers Hub",
    image: "/src/assets/2.PNG",
    link: "https://univ-vault-hub.lovable.app/",
    description: "A platform for students to access and share past exam papers, built with Node.js and Express.",
  },
  {
    title: "Advocaid Legal Assistant",
    image: "/src/assets/4.PNG",
    link: "https://lex-ai-assistant.lovable.app",
    description: "A real-time legal assistant powered by AI and React, supporting multiple rooms.",
  },
  {
    title: "Store Management System",
    image: "/src/assets/3.PNG",
    link: "https://simple-store-sales.lovable.app",
    description: "A simple store management system built with React and Node.js.",
  },
  {
    title: "Delight Your Mind",
    image: "/src/assets/5.PNG",
    link: "https://delight-your-mind.vercel.app/",
    description: "A mental wellness website offering resources and activities to promote mental health.",
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