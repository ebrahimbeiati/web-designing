import React from "react";

const AboutUs = () => {
  return (
    <div className="container my-24 px-6 ">
      <section className="mb-32">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>

        {/* Company Story */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-neutral-500 dark:text-neutral-300">
            WebDesign Startup was founded with a passion for creating stunning,
            user-friendly websites. Our journey began in 2010, when our founder
            realized the need for high-quality, custom web design services.
            Since then, we have grown into a full-service web design agency,
            helping businesses around the world establish a strong online
            presence.
          </p>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="/path/to/team-member-1.jpg"
                alt="Team Member 1"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                CEO & Founder
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                John is the visionary behind WebDesign Startup, with over 15
                years of experience in the industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="/path/to/team-member-2.jpg"
                alt="Team Member 2"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold">Jane Smith</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                Lead Designer
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Jane is a creative genius with a keen eye for design and a
                passion for creating beautiful websites.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="/path/to/team-member-3.jpg"
                alt="Team Member 3"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold">Mike Johnson</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                Lead Developer
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Mike is a coding wizard, ensuring that every website we build is
                functional, fast, and secure.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-xl font-bold">Innovation</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                We embrace the latest technologies and trends to create
                innovative solutions for our clients.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold">Quality</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                Our commitment to quality ensures that every project we
                undertake meets the highest standards.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold">Customer Satisfaction</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                We prioritize our clients' needs and work tirelessly to exceed
                their expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-neutral-500 dark:text-neutral-300 mb-4">
                "WebDesign Startup transformed our online presence. Their
                attention to detail and creativity is unmatched."
              </p>
              <h4 className="text-xl font-bold">- Sarah Williams</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                CEO, Tech Innovators
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-neutral-500 dark:text-neutral-300 mb-4">
                "The team at WebDesign Startup is incredible. They delivered a
                beautiful, functional website that has helped us grow our
                business."
              </p>
              <h4 className="text-xl font-bold">- David Brown</h4>
              <p className="text-neutral-500 dark:text-neutral-300">
                Founder, Health Solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
