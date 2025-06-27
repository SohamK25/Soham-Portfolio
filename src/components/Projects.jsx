import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import tripmate from '../assets/project_photos/tripmate.jpg';
import locktalk from '../assets/project_photos/locktalk.jpg';
import bidbazaar from '../assets/project_photos/bidbazar.webp'
import sssnas from '../assets/project_photos/SSSNAS.jpg'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'TripMate',
      Description:
        'TripMate is an AI based tour organizer, designed to simplify and enhance the travel planning experience.',
      image: tripmate,
      tags: ['React Native', 'Tailwind CSS', 'Gemini', 'Firebase'],
      DemeURL: '#',
      githubURL: 'https://github.com/SohamK25/TripMate',
    },
    {
      id: 2,
      name: 'LockTalk',
      Description:
        'A chat app built using the MERN stack (MongoDB, Express.js, React, and Node.js) offering real-time messaging and media sharing.',
      image: locktalk,
      tags: ['MongoDB', 'Express', 'React', 'Node'],
      DemeURL: 'https://locktalk.onrender.com/login',
      githubURL: 'https://github.com/SohamK25/LockTalk---A-fullstack-chat-app',
    },
    {
      id: 3,
      name: 'Bid Bazaar',
      Description:
        'Bid Bazaar is a cutting-edge online auction platform designed to modernize the traditional auction process by introducing an accessible, user-friendly, and secure online environment. ',
      image: bidbazaar,
      tags: ['React', 'Tailwind CSS', 'Node', 'SQL'],
      DemeURL: 'https://bidbazaar.onrender.com/',
      githubURL: 'https://github.com/SohamK25/EY-GDS-Auction-Platform',
    },
    {
      id: 4,
      name: 'Community Kitchen',
      Description:
        'A a web-based attendance and meals tracking system designed for community kitchen volunteers. Admins can manage user attendance, record daily meal reports, and generate insights through a secure, streamlined interface',
      image: sssnas,
      tags: ['React', 'Tailwind CSS', 'MongoDB', 'Express', 'Node'],
      DemeURL: 'https://sssnaspune.org/',
      githubURL: 'https://github.com/SohamK25/AMS',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl md:text-4xl mb-12 font-bold text-center">
          Featured<span className="text-primary"> Projects</span>
        </h3>

        <div className="flex flex-col gap-12 items-center">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={project.id}
                className={`group w-full md:max-w-4xl bg-card rounded-xl shadow-md overflow-hidden transition-all duration-500 flex flex-col sm:flex-row items-center gap-4 hover:scale-[1.01]
                ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setActiveIndex(activeIndex === index ? null : index);
                  }
                }}
              >
                {/* Image */}
                <div className="sm:w-1/2 w-full h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="sm:w-1/2 w-full p-4 relative">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center sm:text-left">
                    {project.name}
                  </h3>

                  {/* Description & Tags */}
                  <div
                    className={`transition-opacity duration-300
                      ${window.innerWidth >= 640 ? 'group-hover:opacity-100 opacity-0' : isActive ? 'opacity-100' : 'opacity-0'}
                    `}
                  >
                    <p className="text-muted-foreground text-sm mb-3">{project.Description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.DemeURL}
                        className="text-foreground/80 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                      </a>
                      <a
                        href={project.githubURL}
                        className="text-foreground/80 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SohamK25"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
