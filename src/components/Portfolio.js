import React from "react";
import { portfolioData } from "./portfolioData";

function Portfolio() {
  return (
    <section id="portolio" className="text-teal-950 bg-gradient-to-b from-rosado/80 font-serif body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-teal-800">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Projects built by myself & with teammates.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {portfolioData.map((project) => (
            <a
              href={project.appLink}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="flex flex-col px-8 py-10 relative z-10 w-full border-4 border-teal-800 bg-rosado opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-lg title-font font-medium text-teal-800 mb-1">
                    {project.title}
                  </h2>
                  <h1 className="title-font text-md font-medium text-teal-950 mb-3">
                    {project.subtitle}
                  </h1>
                  <a href={project.repoLink} className="hover:text-white" target="blank">View Repository</a>
                  <a href={project.appLink} className="hover:text-white">View App</a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;