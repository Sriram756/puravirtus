import Navbar from "./Navbar";
import lead from "/assets/images/manage.svg";
import Development from "/assets/images/Skill.svg";
import hr from "/assets/images/Busi.svg";
import Technical from "/assets/images/Tech.svg";

const offerings = [
  {
    icon: lead,
    alt: "Executive Search Icon",
    title: "Executive Search & Leadership Hiring",
  },
  {
    icon: Technical,
    alt: "Technical Recruitment Icon",
    title: "Technical & Non-Technical Recruitment",
  },
  {
    icon: Development,
    alt: "Talent Mapping Icon",
    title: "Talent Mapping & Market Intelligence",
  },
  {
    icon: hr,
    alt: "HR Solutions Icon",
    title: "End-to-End HR Solutions",
  },
];

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen  relative   bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

      {/* Content */}
      <div className="relative z-10   flex flex-col items-center justify-center text-white px-4 py-12 text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-8">
          PuraVirtus{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400">
            {" "}
            HR
          </span>{" "}
          Consultancy
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400">
            Trusted{" "}
          </span>
          Hiring Partner
        </h2>
        <p className="max-w-2xl text-base md:text-lg mb-8">
          At PuraVirtus, we don’t just fill vacancies—we build teams that drive
          growth. Whether you're scaling a startup or expanding your corporate
          workforce, we’re here to help you hire with confidence and clarity.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-semibold">
            Get Started
          </button>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-400 px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>

      {/* Core Offerings */}
      <section className="relative z-10 mb-10 h-full  text-gray-800 py-5 px-6 md:px-16">
        <h3 className="text-2xl text-white  md:text-3xl font-bold text-center mb-2 ">
          Core Offerings
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {offerings.map((item, index) => (
            <div key={index} className="box-gradient p-6 rounded-lg shadow-md ">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className=" h-12 w-12 transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-white text-center">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
