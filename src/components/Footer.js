import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://www.stoman.me/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/",
  },
  {
    id: 5,
    icon: <FiYoutube />,
    url: "https://www.youtube.com/c/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-20 border-t-2 border-gray-300 dark:border-gray-700">
      <div className="container mx-auto text-center">
        {/* Footer social links */}
        <div className="mb-8">
          <p className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 mb-4">
            Follow me
          </p>
          <ul className="flex justify-center gap-6 sm:gap-10">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <i className="text-2xl sm:text-3xl">{link.icon}</i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
