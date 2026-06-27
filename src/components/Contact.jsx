import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-300 max-w-2xl leading-7">
            I am open to full stack, frontend, and product focused software engineering roles. Reach me by email or LinkedIn for interviews, project walkthroughs, and code review.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <a className="bg-white/5 rounded-lg p-5 hover:bg-white/10" href="mailto:gokhansigircik@hotmail.com">
            gokhansigircik@hotmail.com
          </a>
          <a className="bg-white/5 rounded-lg p-5 hover:bg-white/10" href="https://www.linkedin.com/in/gokhan-sigircik/" target="_blank" rel="noreferrer">
            linkedin.com/in/gokhan-sigircik
          </a>
          <a className="bg-white/5 rounded-lg p-5 hover:bg-white/10" href="https://github.com/gokhansigircik" target="_blank" rel="noreferrer">
            github.com/gokhansigircik
          </a>
          <a className="bg-white/5 rounded-lg p-5 hover:bg-white/10" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
