import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans" id="home">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to WebDesign Startup
          </h1>
          <p className="text-xl mb-8">
            Creating stunning, user-friendly websites to help your business
            thrive.
          </p>
          <div className="flex justify-center">
            <Link
              to="/services"
              className="bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <span className="text-4xl text-blue-500">
                  <i className="fas fa-code"></i>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Web Development
              </h3>
              <p className="text-gray-600 text-center">
                Our expert developers create custom websites that are fast,
                secure, and scalable.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <span className="text-4xl text-blue-500">
                  <i className="fas fa-paint-brush"></i>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Web Design
              </h3>
              <p className="text-gray-600 text-center">
                Our creative designers craft visually appealing and
                user-friendly websites.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <span className="text-4xl text-blue-500">
                  <i className="fas fa-chart-line"></i>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                SEO Optimization
              </h3>
              <p className="text-gray-600 text-center">
                We optimize your website for search engines to increase your
                online visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to get a free consultation and quote.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
