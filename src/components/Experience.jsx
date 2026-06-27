import React from 'react';

import html from "../assets/html.png"
import css from "../assets/css.png"
import materialui from "../assets/materialui.png"
import bootstrap from "../assets/bootstrap.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import tailwind from "../assets/tailwind.png"
import python from "../assets/python.png"
import jinja from "../assets/jinja.jpeg"
import flask from "../assets/flask.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.jpg"
import java from "../assets/java.png"
import springboot from "../assets/springboot.png"
import postman from "../assets/postman.png"
import github from "../assets/github.png"
import git from "../assets/git.png"
import vsc from "../assets/vsc.png"
import aws from "../assets/aws.webp"

const Experience = () => {

  const tech = [
    { id: 1, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 2, src: reactImage, title: 'React', style: 'shadow-blue-600' },
    { id: 3, src: nodejs, title: 'Node.js', style: 'shadow-white' },
    { id: 4, src: mongodb, title: 'MongoDB', style: 'shadow-orange-500' },
    { id: 5, src: python, title: 'Python', style: 'shadow-blue-400' },
    { id: 6, src: jinja, title: 'Jinja', style: 'shadow-gray-400' },
    { id: 7, src: flask, title: 'Flask', style: 'shadow-gray-400' },
    { id: 8, src: mysql, title: 'MySQL', style: 'shadow-blue-400' },
    { id: 9, src: java, title: 'Java', style: 'shadow-orange-400' },
    { id: 10, src: springboot, title: 'Spring Boot', style: 'shadow-green-400' },
    { id: 11, src: materialui, title: 'Material UI', style: 'shadow-pink-400' },
    { id: 12, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 13, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 14, src: tailwind, title: 'Tailwind', style: 'shadow-sky-400' },
    { id: 15, src: bootstrap, title: 'Bootstrap', style: 'shadow-purple-400' },
    { id: 16, src: postman, title: 'Postman', style: 'shadow-orange-400' },
    { id: 17, src: github, title: 'GitHub', style: 'shadow-gray-400' },
    { id: 18, src: git, title: 'Git', style: 'shadow-gray-400' },
    { id: 19, src: vsc, title: 'VS Code', style: 'shadow-blue-400' },
    { id: 20, src: aws, title: 'AWS', style: 'shadow-gray-400' },
  ]

  const proof = [
    'Lead Full Stack Developer work with React, Next.js, Python, FastAPI, PostgreSQL, reusable components, API connected pages, and database driven flows.',
    'Client software builds across frontend, backend, database, API integration, testing, debugging, and deployment ready execution.',
    'Operations management at Four Seasons, including team leadership, reporting, service recovery, communication, and accountability under pressure.',
  ];

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Skillset
          </p>
          <div className='py-6 grid md:grid-cols-3 gap-4 text-gray-300'>
            {proof.map((item) => (
              <p key={item} className='bg-white/5 rounded-lg p-4 leading-7'>{item}</p>
            ))}
          </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {tech.map(({id, src, title, style}) =>(
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={`${title} logo`} className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
