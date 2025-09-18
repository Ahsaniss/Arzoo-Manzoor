import React from "react";

const projects = [
    {
    title: "Korean Culture Website",
    image: "/assets/Capture.PNG",
    link: "https://korean-culture-sable.vercel.app/",
    description: "A cultural website showcasing Korean traditions, history, and modern culture with interactive features.",
  },
   {
    title: "WINE & DINE",
    image: "https://iili.io/K5wnjmG.png", // This will work after moving to public/assets/
    link: "https://henry2k24.github.io/WINE-and-DINE/",
    description: "A restaurant website template featuring a modern design, menu showcase, and reservation system.",
  },
  {
    title: "QR-code Generator",
    image: "https://iili.io/K5kzbyB.png",
    link: "https://qr-code-setup.netlify.app/",
    description: "A QR-code generator built with html css and javascript, allowing users to create and customize QR codes easily.",
  },
  {
    title: "Tic Tac Toe Game",
    image: "https://iili.io/K5k0x4I.png",
    link: "https://tic-tac-toe-web01.netlify.app/",
    description: "A fun and interactive Tic Tac Toe game built with html css and javascript.",
  },
  {
    title: "Password Generator",
    image: "https://iili.io/K5kWFpt.th.png",
    link: "https://password-generator01-web.netlify.app/",
    description: "A simple password generator built with html css and javascript.",
  },
  {
    title: "Quiz App",
    image: "https://iili.io/K5kUfuj.th.png",
    link: "https://quiz1-website.netlify.app/",
    description: "A quiz application built with html css and javascript that tests your knowledge on various topics.",
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