import React from "react";
import aboutImg from "/about.jpg"; // Make sure the image exists

const About = () => {
  return (
    <section
      id="about"
      className="bg-white relative min-h-screen text-gray-800 py-16 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Our Team"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            <strong>PuraVirtus HR Consultancy</strong> was founded with a simple
            vision: to be the most reliable and efficient bridge between
            exceptional talent and exceptional companies. With years of industry
            experience and a deep understanding of modern hiring challenges, we
            provide innovative, ethical, and people-centric recruitment
            solutions.
          </p>

          {/* Why Choose Us List */}
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Why Choose Us
          </h3>
          <ul className="list-inside space-y-2 text-gray-700">
            <li>
              <strong>🎯 Deep Industry Expertise:</strong> Seasoned recruiters
              across domains
            </li>
            <li>
              <strong>🤝 Personalized Hiring Strategies:</strong> No
              one-size-fits-all approach
            </li>
            <li>
              <strong>⏱️ Speed & Precision:</strong> Fast hiring without
              compromising quality
            </li>
            <li>
              <strong>📊 Data-Driven Recruitment Process:</strong> Smart
              decisions using market insights
            </li>
            <li>
              <strong>🌍 Nationwide & Global Talent Reach:</strong> We connect
              talent across borders
            </li>
          </ul>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Our Mission & Vision
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          <strong>Mission:</strong> To empower businesses through impactful
          talent solutions while fostering career success for professionals.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          <strong>Vision:</strong> To be a leading HR consultancy known for
          trust, integrity and results.
        </p>
      </div>
    </section>
  );
};

export default About;
