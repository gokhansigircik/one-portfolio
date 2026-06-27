import React from "react";
import Homegokhan from "../assets/homegokhan.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm mb-4">
            Full stack software developer
          </p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Data driven web apps for business workflows
          </h2>
          <p className="text-gray-400 py-4 max-w-xl leading-7">
            I build React, Next.js, Python, Flask, FastAPI, Java, Spring Boot, and database backed products for teams that need better dashboards, cleaner forms, stronger APIs, and software that supports real operations.
          </p>
          <p className="text-gray-500 max-w-xl leading-7">
            Based in Austin. Shaped by full stack engineering work, foundation platform development, Upwork client builds, property analysis software, and nine years managing high volume hospitality teams.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              View selected work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Homegokhan}
            alt="Gokhan Sigircik"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
