import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex justify-around px-10 py-20 md:flex-row flex-col gap-y-5 items-center">
        <div className="bg-rosado shadow-inner flex flex-col md:items-start md:text-left rounded md:w-1/2 py-4 md:py-6 px-3 md:px-5">
          <h1 className="font-serif sm:text-4xl text-xl mb-4 text-gray-600">
            Hi, I'm Jennifer.
          </h1>
          <p className="text-teal-950 font-serif">
           I work to share the stories of ateliers abound.
          </p>
          
        </div>
        <div className="md:w-1/5">
          <img
            className="object-cover object-center rounded shadow-inner"
            alt="hero"
            src="./Rosado-headshot.png"
          />
        </div>
      </div>
    </section>
  );
}

export default About;