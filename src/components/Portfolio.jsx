import React from "react";
import camps from "../assets/portfolio/camps.png";
import cashflow from "../assets/portfolio/cashflow.png";
import nonprofit from "../assets/portfolio/nonprofit.jpg";
import portfol from "../assets/portfolio/portfol.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: camps,
      codeSrc: "https://github.com/gokhansigircik",
      watch: "https://www.youtube.com/channel/UC0gjQvO1xluRKmaKqisAhrA",
    },
    {
      id: 2,
      src: nonprofit,
      codeSrc: "https://github.com/gokhansigircik/non-profit",
    },
    {
      id: 3,
      src: cashflow,
      codeSrc: "https://github.com/gokhansigircik/cash_flow_properties",
    },
    {
      id: 4,
      src: portfol,
      codeSrc: "https://github.com/gokhansigircik/one-portfolio",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800
     w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex
      flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6"></p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8
        px-12 sm:px-0"
        >
          {portfolio.map(({ id, src, codeSrc, watch }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              {/* <a href={watch} target="_blank" rel="noopener noreferrer">
                  <button 
                    className="w-1/2 px-6 py-3 m-4 duration-200 
                hover:scale-105"
                  >
                    Demo
                  </button>
                </a> */}

                <a href={codeSrc} target="_blank" rel="noopener noreferrer">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 
                                hover:scale-105"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
