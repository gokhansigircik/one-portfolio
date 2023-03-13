import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
     from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
           border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! My name is Gokhan Sigircik, and I am a Full-Stack Engineer
          located in Washington, D.C. For the past ten years, I had been working
          in the hospitality industry, where I gained valuable skills in
          customer service, leadership, and communication. However, despite my
          success in that field, I always felt a nagging desire to explore my
          passion for technology. I decided to pivot toward a career in
          technology, a field that I have always admired. My natural inclination
          towards a technical and systematic approach has made this transition
          into programming an extremely smooth one! This essay is the story of
          my journey from hospitality to technology, and how I leveraged my
          experience and skills to pursue a fulfilling career in programming.
        </p>

        <br />

        <p className="text-xl">
          Life to me is about growth, overcoming obstacles, and being better
          than you were yesterday in all facets. I will never grow weary of
          improving as a developer, teammate/coworker and individual.I look
          forward to connecting with you! Feel free to reach out via LinkedIn,
          email or cell.
        </p>
        
        {/* <p className='text-xl'>
        In addition, I have expertise in JavaScript, Python, HTML5, CSS, 
        Java, Java Spring, Flask, Express, Bootstrap, AJAX, React, Jinja2, Node.js,
        Material UI, Tailwind, MySQL, MongoDB, Visual Studio Code,
        Microsoft Word, Excel, and AWS. 
        </p> */}
      </div>
    </div>
  );
};

export default About;
