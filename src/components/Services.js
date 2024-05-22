import React from "react";
import { FiCode, FiSmartphone, FiSearch } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We create modern and responsive web applications.",
    icon: <FiCode />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful and user-friendly designs for your apps.",
    icon: <FiSmartphone />,
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Improve your site's ranking on search engines.",
    icon: <FiSearch />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full sm:w-1/3 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
            >
              <div className="text-4xl text-indigo-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
