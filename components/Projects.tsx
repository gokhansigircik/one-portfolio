import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    imageSrc: "/images/portfolio/camps.png",
    codeHref: "https://github.com/gokhansigircik/C.A.M.P.S",
    title: "C.A.M.P.S",
  },
  {
    id: 2,
    imageSrc: "/images/portfolio/nonprofit.jpg",
    codeHref: "https://github.com/gokhansigircik/non-profit",
    title: "Non-Profit",
  },
  {
    id: 3,
    imageSrc: "/images/portfolio/cashflow.png",
    codeHref: "https://github.com/gokhansigircik/cash_flow_properties",
    title: "Cash Flow Properties",
  },
  {
    id: 4,
    imageSrc: "/images/portfolio/portfol.png",
    codeHref: "https://github.com/gokhansigircik/one-portfolio",
    title: "Portfolio",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <h3 className="text-base font-medium">{project.title}</h3>
            <Link
              href={project.codeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} code on GitHub`}
              className="text-sm text-cyan-600 hover:underline"
            >
              Code
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
