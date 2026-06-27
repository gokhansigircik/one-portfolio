import React from "react";
import camps from "../assets/portfolio/camps.png";
import cashflow from "../assets/portfolio/cashflow.png";
import nonprofit from "../assets/portfolio/nonprofit.jpg";
import portfol from "../assets/portfolio/portfol.png";
import forecast from "../assets/portfolio/forecast.jpg";
import profile from "../assets/portfolio/gokhan.jpeg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "C.A.M.P.S",
      summary: "Registration and operations platform built with React, Spring Boot, and MySQL for activities, users, schedules, records, and checkout flow.",
      stack: "React, Java, Spring Boot, MySQL",
      src: camps,
      codeSrc: "https://github.com/gokhansigircik/C.A.M.P.S",
    },
    {
      id: 2,
      title: "Cash Flow Properties",
      summary: "Property investment analytics workflow that turns rental income, expenses, and assumptions into a structured Flask dashboard.",
      stack: "Python, Flask, Jinja, MySQL",
      src: cashflow,
      codeSrc: "https://github.com/gokhansigircik/cash_flow_properties",
    },
    {
      id: 3,
      title: "Recipes",
      summary: "Authenticated CRUD app for recipe records with sessions, validation, dashboards, create and edit screens, and database persistence.",
      stack: "Python, Flask, Jinja, MySQL",
      src: profile,
      codeSrc: "https://github.com/gokhansigircik/Recipes",
    },
    {
      id: 4,
      title: "Travel Advisor",
      summary: "React travel discovery interface for maps, restaurants, attractions, location search, and API connected place cards.",
      stack: "React, Material UI, Maps APIs",
      src: forecast,
      codeSrc: "https://github.com/gokhansigircik/travel_advisor",
    },
    {
      id: 5,
      title: "3D Portfolio",
      summary: "Vite and Three.js portfolio experiment with motion, 3D presentation, project cards, and modern frontend tooling.",
      stack: "React, Vite, Three.js, Tailwind",
      src: portfol,
      codeSrc: "https://github.com/gokhansigircik/3d_portfolio",
    },
    {
      id: 6,
      title: "Nonprofit Platform UI",
      summary: "React landing page structure for a mission driven organization with donor path, content sections, and public trust signals.",
      stack: "React, JavaScript, CSS",
      src: nonprofit,
      codeSrc: "https://github.com/gokhansigircik/non-profit",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Selected work
          </p>
          <p className="py-6 text-gray-400 max-w-3xl leading-7">
            Six projects chosen for hiring review: full stack platforms, data workflows, authentication, APIs, maps, and frontend presentation. Each one points to a concrete business or product pattern.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolio.map(({ id, title, summary, stack, src, codeSrc }) => (
            <article key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-black/30 flex flex-col">
              <img src={src} alt={`${title} preview`} className="rounded-t-md duration-200 hover:scale-105 h-44 w-full object-cover" />
              <div className="p-4 min-h-[220px] flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-white">{title}</h3>
                  <p className="text-sm text-cyan-200 mt-1">{stack}</p>
                  <p className="text-sm text-gray-400 mt-3 leading-6">{summary}</p>
                </div>
                <a href={codeSrc} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-cyan-300 hover:text-cyan-100">
                  View repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
