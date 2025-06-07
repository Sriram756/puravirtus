import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_at6nhpl", "template_wdmp45k", form.current, {
        publicKey: "cBc8dDkNZDzlPj05D",
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(null), 5000); // Clear after 5s
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000); // Clear after 5s
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Let’s Build Your Dream Team
        </h2>
        <p className="text-center text-gray-600 text-2xl max-w-2xl mx-auto mb-12">
          Whether you're hiring your next leader or building an entire team,
          PuraVirtus is here to support you every step of the way. Let’s talk
          about how we can transform your recruitment strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-50 p-8 shadow-lg rounded-lg space-y-6"
          >
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
                name="from_name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
                name="company_name"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
                name="from_email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Phone</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
                name="from_number"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
                name="message"
              ></textarea>
            </div>

            {/* Success/Error Messages */}
            {status === "success" && (
              <p className="text-green-600 font-semibold">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-semibold">
                Failed to send message. Please try again later.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-white text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-blue-700">pallavi@puravirtus.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-blue-700">8807149530</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Office Address</h3>
              <p>
                No.6, 2nd Street, 2nd Cross, <br />
                Vaishnavi Nagar, Thirumullaivoyal, <br />
                Chennai - 62
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.linkedin.com/company/puravirtus-hr-consultancy/"
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/puravirtus_official/"
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
