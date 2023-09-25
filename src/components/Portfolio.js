import React from "react";
import { portfolioData } from "./portfolioData";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="text-zinc-700 font-serif bg-rosado/90 body-font"
    >
      <div className="container px-5 my-20 pt-40 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-600">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto text-base">
            Collaborative apps by myself & teammates.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {portfolioData.map((project) => (
            <a
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={project.image}
                />
                <div className="flex flex-col px-8 py-10 relative z-0 w-full border-4 border-zinc-700 bg-rosado opacity-0 hover:opacity-100 hover:rounded">
                  <h2 className="tracking-widest text-sm title-font font-medium text-zinc-700 mb-1">
                    {project.title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-teal-950 mb-3">
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