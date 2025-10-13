import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
        <p>© {currentYear} Gokhan Sigircik. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/gokhan-sigircik/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/gezgingokhann/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
