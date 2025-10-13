import Image from "next/image";

const skills = [
  { src: "/images/skills/javascript.png", title: "JavaScript", className: "shadow-yellow-500" },
  { src: "/images/skills/react.png", title: "React", className: "shadow-blue-600" },
  { src: "/images/skills/nodejs.png", title: "Node.js", className: "shadow-white" },
  { src: "/images/skills/mongodb.jpg", title: "MongoDB", className: "shadow-orange-500" },
  { src: "/images/skills/python.png", title: "Python", className: "shadow-blue-400" },
  { src: "/images/skills/jinja.jpeg", title: "Jinja", className: "shadow-gray-400" },
  { src: "/images/skills/flask.png", title: "Flask", className: "shadow-gray-400" },
  { src: "/images/skills/mysql.png", title: "MySQL", className: "shadow-blue-400" },
  { src: "/images/skills/java.png", title: "Java", className: "shadow-orange-400" },
  { src: "/images/skills/springboot.png", title: "Spring Boot", className: "shadow-green-400" },
  { src: "/images/skills/materialui.png", title: "Material UI", className: "shadow-pink-400" },
  { src: "/images/skills/html.png", title: "HTML", className: "shadow-orange-500" },
  { src: "/images/skills/css.png", title: "CSS", className: "shadow-blue-500" },
  { src: "/images/skills/tailwind.png", title: "Tailwind", className: "shadow-sky-400" },
  { src: "/images/skills/bootstrap.png", title: "Bootstrap", className: "shadow-purple-400" },
  { src: "/images/skills/postman.png", title: "Postman", className: "shadow-orange-400" },
  { src: "/images/skills/github.png", title: "GitHub", className: "shadow-gray-400" },
  { src: "/images/skills/git.png", title: "Git", className: "shadow-gray-400" },
  { src: "/images/skills/vsc.png", title: "VS Code", className: "shadow-blue-400" },
  { src: "/images/skills/aws.webp", title: "AWS", className: "shadow-gray-400" },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className={`flex flex-col items-center rounded-lg border border-gray-100 bg-white p-6 text-center shadow-md transition hover:scale-105 dark:border-gray-800 dark:bg-gray-900 ${skill.className}`}
        >
          <div className="relative h-14 w-14">
            <Image src={skill.src} alt={skill.title} fill sizes="56px" className="object-contain" />
          </div>
          <p className="mt-4 text-sm font-medium">{skill.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
