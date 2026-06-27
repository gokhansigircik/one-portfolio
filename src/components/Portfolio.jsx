import React from "react";
import camps from "../assets/portfolio/camps.png";
import cashflow from "../assets/portfolio/cashflow.png";
import nonprofit from "../assets/portfolio/nonprofit.jpg";
import portfol from "../assets/portfolio/portfol.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "C.A.M.P.S",
      summary: "Camp operations platform with activity management, scheduling, registration, and payment flow thinking.",
      src: camps,
      codeSrc: "https://github.com/gokhansigircik/C.A.M.P.S",
    },
    {
      id: 2,
      title: "Nonprofit Landing Page",
      summary: "Mission driven React landing page with donation flow structure and public facing content sections.",
      src: nonprofit,
      codeSrc: "https://github.com/gokhansigircik/non-profit",
    },
    {
      id: 3,
      title: "Cash Flow Properties",
      summary: "Flask and MySQL workflow for tracking property opportunities and investment details.",
      src: cashflow,
      codeSrc: "https://github.com/gokhansigircik/cash_flow_properties",
    },
    {
      id: 4,
      title: "Portfolio System",
      summary: "Career site connecting hospitality experience, full stack projects, and recruiter contact paths.",
      src: portfol,
      codeSrc: "https://github.com/gokhansigircik/one-portfolio",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Selected work
          </p>
          <p className="py-6 text-gray-400 max-w-2xl">
            Practical projects that connect service operations, customer experience, dashboards, authentication, APIs, and responsive frontend craft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, title, summary, src, codeSrc }) => (
            <article key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-black/30">
              <img src={src} alt={`${title} screenshot`} className="rounded-t-md duration-200 hover:scale-105" />
              <div className="p-4 min-h-[170px] flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-white">{title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-6">{summary}</p>
                </div>
                <a href={codeSrc} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-cyan-300 hover:text-cyan-100">
                  View code
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
