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
            I am Gokhan Sigircik, a full stack software developer focused on business driven web applications. I work across frontend architecture, backend services, database design, authentication flows, dashboards, APIs, admin panels, and automation focused product logic.
          </p>
          <p>
            My engineering work includes a foundation digital platform built with React, Next.js, Python, FastAPI, and PostgreSQL, client software builds through Upwork, the C.A.M.P.S registration platform, and Cashflows, a property investment analytics app built with Flask and MySQL.
          </p>
          <p>
            Before software, I managed operations at Four Seasons for nine years. That work trained the habits I bring into engineering: clear communication, ownership under pressure, structured problem solving, service quality, and attention to workflow details that affect real people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
