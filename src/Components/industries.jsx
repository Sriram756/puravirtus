const industries = [
  { icon: "💼", label: "IT & Technology" },
  { icon: "🏥", label: "Healthcare" },
  { icon: "🏗️", label: "Construction & Engineering" },
  { icon: "💰", label: "Finance & Banking" },
  { icon: "📦", label: "Logistics & Supply Chain" },
  { icon: "🛒", label: "Retail & E-Commerce" },
  { icon: "🎓", label: "Education & Training" },
  { icon: "🌱", label: "Startups & SMEs" },
];

const Industries = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16" id="industries">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Diverse Expertise, Targeted Results
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          PuraVirtus serves a wide range of industries with precision and
          professionalism. We understand the unique hiring demands of each
          sector and customize our approach accordingly.
        </p>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-xl p-6 flex flex-col items-center justify-center transform hover:scale-105 transition duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-2">{industry.icon}</div>
              <p className="text-lg font-medium text-gray-800">
                {industry.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-blue-700 mb-4">
            Need specialized hiring help?
          </p>
          <p className="text-gray-600 max-w-xl mx-auto">
            We tailor our solutions to niche roles and hard-to-fill positions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
