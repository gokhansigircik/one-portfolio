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
    {
      id: 1,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 2,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 3,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-white'
    },
    {
      id: 4,
      src: mongodb,
      title: 'MongoDB',
      style: 'shadow-orange-500'
    },
    {
      id: 5,
      src: python,
      title: 'Python',
      style: 'shadow-blue-400'
    },
    {
      id: 6,
      src: jinja,
      title: 'Jinja',
      style: 'shadow-gray-400'
    },
    {
      id: 7,
      src: flask,
      title: 'Flask',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-blue-400'
    },
    {
      id: 9,
      src: java,
      title: 'Java',
      style: 'shadow-orange-400'
    },
    {
      id: 10,
      src: springboot,
      title: 'Spring Boot',
      style: 'shadow-green-400'
    },
    {
      id: 11,
      src: materialui,
      title: 'Material-Ul',
      style: 'shadow-pink-400'
    },
    {
      id: 12,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 13,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 14,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 15,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-400'
    },
    {
      id: 16,
      src: postman,
      title: 'Postman',
      style: 'shadow-orange-400'
    },
    {
      id: 17,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 18,
      src: git,
      title: 'Git',
      style: 'shadow-gray-400'
    },
    {
      id: 19,
      src: vsc,
      title: 'Visual Studio Code',
      style: 'shadow-blue-400'
    },
    {
      id: 20,
      src: aws,
      title: 'AWS',
      style: 'shadow-gray-400'
    },
  ]


  return (
    <div name="experience" 
    className='bg-gradient-to-b from-gray-800 to-black w-full'>
      {/* h-screen */}
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white'>

        <div>
          <p className='text-4xl font-bold border-b-4
          border-gray-500 p-2 inline'>
            Technical Skillset
            </p>
          <p className='py-6'>
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center
        py-8 px-12 sm:px-0'>

          {
            tech.map(({id, src, title, style}) =>(
              <div key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
          </div>

            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Experience