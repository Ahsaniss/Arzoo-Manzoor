import React from "react";
import { useNavigate } from "react-router-dom";

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
];

const ProjectSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-background" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Featured Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl shadow-lg border border-border hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-3 py-2 bg-primary text-primary-foreground rounded-md font-medium shadow hover:bg-primary/90 transition-colors text-sm text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-md font-semibold shadow transition-all duration-300"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;