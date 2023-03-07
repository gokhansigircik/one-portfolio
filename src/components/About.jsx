import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b
     from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
           border-gray-500'>
            About</p>
        </div>
        <p className='text-xl mt-20'>
        Hello, my name is Gokhan, and I am a software developer with 
        10 years of experience in the hospitality industry. I am an 
        experienced professional who has lived, studied, and worked in 
        three different countries. I am passionate about learning and 
        continuously improving myself, and I am committed to using my 
        knowledge, skills, and abilities to help others.
        </p>

        <br />

        <p className='text-xl'>
        I have a wealth of experience in the technology and business 
        world, and I specialize in communication, customer satisfaction,
        training, prioritization, attention to detail, problem solving, 
        critical thinking, testing, scheduling and negotiation.
        </p>
        <br />
        <p className='text-xl'>
        In addition, I have expertise in HTML, CSS, JavaScript, Python,
        Java, Java Spring, Flask, Bootstrap, AJAX, React, Jinja2, Node.js,
        Material UI, Tailwind, MySQL, MongoDB, Visual Studio Code, Spring Tool Suite,
        Microsoft Word, Excel, and AWS. 
        </p>
      </div>
    </div>
  )
}

export default About