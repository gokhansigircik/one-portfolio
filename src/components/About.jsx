import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="space-y-6 text-xl leading-9 text-gray-200">
          <p>
            Hello, I am Gokhan Sigircik, a full stack developer based in Washington, DC. Before software, I spent ten years in hospitality, building the service, leadership, communication, and problem solving habits that now shape the way I build products.
          </p>
          <p>
            That background gives me a practical lens. I care about workflows, handoffs, edge cases, customer trust, and the details teams need when a product is used in the real world. I enjoy building clear interfaces, reliable CRUD flows, authentication, dashboards, and API connected experiences.
          </p>
          <p>
            My current stack includes JavaScript, React, Tailwind CSS, Python, Flask, Java, Spring Boot, MySQL, Git, and modern deployment workflows. I am focused on fewer, stronger projects that show product thinking and steady execution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
