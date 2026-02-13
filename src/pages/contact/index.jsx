import Herocomponent from "../../components/Herocomponent";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { Images } from "../../constant/img";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1imbii7",      
        "template_20v27pl",    
        form.current,
        "3EnaDjnepn7Wbv-xi"       
      )
      .then(
        () => {
          alert("Message sent successfully ");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("ERRRROR ");
        }
      );
  };

  return (
    <>
      <Herocomponent  background={Images.hoodie} title= " Contact Us "/>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Map */}
        <div className="w-full h-100 rounded-lg overflow-hidden shadow-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0584374671944!2d-7.533851700000011!3d33.60378820000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1770979289904!5m2!1sen!2sma" width="600" height="450"></iframe>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send us your message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <input
              type="text"
              name="phone"
              placeholder="Your phone"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your message"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 px-8 rounded-full hover:bg-red-500 transition"
            >
              SEND
            </button>
          </form>
        </div>

      </div>
    </>
  );
};
