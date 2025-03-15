"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "Crotchet Blog",
        description: "Crotchet Blog with admin dashboard using MERN and Tailwind CSS ",
        image: "/images/projects/mern-blog.png",
        gitUrl:"https://github.com/Reshma-24799/mern-blog",
        previewUrl:"https://mern-blog-4-cz6o.onrender.com/"
    },
    {
        id: 2,
        title: "MERN AI Finance Dashboard App",
        description: "Finance Dashboard using Recharts and Linear Regression",
        image: "/images/projects/fin.png",
        gitUrl:"https://github.com/Reshma-24799/financify",
        previewUrl:"https://financify-blue.vercel.app/"
    },
    {
        id: 3,
        title: "Google-search Clone",
        description: "Google-search Clone using Next.js, React and Tailwind CSS",
        image: "/images/projects/google-clone.png",
        gitUrl:"https://github.com/Reshma-24799/google-search-clone",
        previewUrl:"https://glowing-tiramisu-4c0607.netlify.app/"
    },
    {
        id: 4,
        title: "Portfolio",
        description: "Portfolio using Next.js, React, React Type Animation and Tailwind CSS ",
        image: "/images/projects/portfolio.jpg",
        gitUrl:"https://github.com/Reshma-24799/nextjs-portfolio",
        previewUrl:"/"
    },
]

const ProjectSection = () => {
   
  return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12">
           My Projects
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectData.map((project, index) =>
                <motion.li
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
                )}
        </ul>
      </section>
  )
}

export default ProjectSection;
