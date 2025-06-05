import React from "react";
import talentIcon from "/img (1).jpg";
import recruitIcon from "/img (2).jpg";
import contractIcon from "/img (3).jpg";
import advisoryIcon from "/img (4).jpg";

const services = [
  {
    icon: recruitIcon,
    title: "Permanent Recruitment",
    description:
      "From junior roles to senior specialists, we deliver top-tier candidates who align with your skill and culture fit.",
  },
  {
    icon: talentIcon,
    title: "Talent Mapping & Market Intelligence",
    description:
      "Get strategic insights into talent availability, salary benchmarks, and competitor analysis for smarter hiring.",
  },
  {
    icon: contractIcon,
    title: "Contract Staffing",
    description:
      "Flexible hiring models that allow you to scale quickly without long-term commitments.",
  },
  {
    icon: advisoryIcon,
    title: "HR Advisory & Compliance",
    description:
      "We provide HR policy frameworks, onboarding processes, and compliance guidance to support your internal teams.",
  },
];

const Services = () => {
  return (
    <section
      id="service"
      className="bg-gray-50 py-20 px-6 md:px-16 text-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 animate-fade-in-down">
          What We Do
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in">
          At PuraVirtus, we provide end-to-end talent solutions customized to
          your business needs. From strategic hiring to compliance support, our
          services are designed to elevate your workforce.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 text-left transform hover:-translate-y-2 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-fill transition duration-500 hover:rotate-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
