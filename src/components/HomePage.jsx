import React from "react"; // Importing React library for building user interfaces

import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import hero from '../assets/hero.png';
import mobile from '../assets/mobile.jpg';
import desktop from '../assets/desktop.jpg'; 
import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user4 from '../assets/user-4.png';

// Component to display the congratulations header
const CongratulationsHeader = () => {
  return (
    <div className="my-4">
      {/* Animated header for claiming gift card */}
      <motion.h2
        className="text-sm md:text-base font-semibold text-center text-[#292929] mt-3"
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        Claim your gift card now!
      </motion.h2>
      {/* Animated subheader for urgency */}
      <motion.h2
        className="text-center text-2xl md:text-4xl text-[#fcb808] font-bold mb-2 text-wrap mx-3"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
        animate={{ opacity: 1, scale: 1 }} // Final state for animation
        transition={{ duration: 0.7 }} // Duration of the animation
      >
        Hurry up! Limited time offer
      </motion.h2>
    </div>
  );
};

// Main HomePage component
function HomePage() {
  return (
    <div>
      <CongratulationsHeader /> {/* Rendering the congratulations header */}
      <div className="relative mx-3 shadow-md md:w-1/2 group md:mx-auto my-4 ">
        {/* Animated image of the hero section */}
        <motion.img
          src={hero}
          alt="Hero"
          className="w-full h-auto rounded-lg object-cover"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Final state for animation
          transition={{ duration: 0.9 }} // Duration of the animation
        />

        {/* Overlay with message on hover */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center hover:bg-opacity-50 rounded-lg"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Final state for animation
          transition={{ duration: 0.11 }} // Duration of the animation
        >
          <p className="text-white text-center mx-3 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            You can claim this gift card by clicking the &quot;Claim Now&quot;
            button!
          </p>
          <div
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 
                    rounded-lg transition-opacity duration-300 "
          ></div>
        </motion.div>
      </div>
      <div className="flex justify-center my-2">
        {/* Button to claim the gift card */}
        <motion.a
          href="https://smrturl.co/o/610841/53356127?s1=Mcweb" // Link to claim the gift card
          target="_blank" // Open link in a new tab
          className="bg-[#fcb808] text-[#292929] px-10 md:px-12 py-2 rounded-md 
                my-4 
                text-lg
                font-semibold
                transition-transform transform hover:scale-105 hover:shadow-lg
                hover:bg-[#d59b08]"
          initial={{ scale: 1 }} // Initial scale for animation
          whileHover={{ scale: 1.05 }} // Scale on hover
          transition={{ duration: 0.13 }} // Duration of the animation
        >
          Claim Now
        </motion.a>
      </div>
      {/* Animated header for Chicken Big Mac */}
      <motion.h2
        className="text-center text-2xl md:text-4xl text-[#1f2937] font-bold my-4 md:my-12 mx-3 text-wrap"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
        animate={{ opacity: 1, scale: 1 }} // Final state for animation
        transition={{ duration: 0.15 }} // Duration of the animation
      >
        The Chicken Big Mac® is Here
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center my-4">
        <div>
          {/* Image of Chicken Big Mac */}
          <img
            src={mobile}
            alt="Chicken Big Mac"
            className="mx-auto  rounded-lg w-4/5
                h-auto shadow-lg"
          />
        </div>
        <div>
          {/* Description of Chicken Big Mac */}
          <p className="text-justify mx-3 text-base md:text-lg text-[#1f2937] font-semibold mt-4">
            Two juicy chicken patties, special sauce, lettuce, cheese, pickles
            on a sesame seed bun. It’s not not a Big Mac. Get it for free.
            <br />
          </p>
          <p className="text-xs text-[#6b7280] mx-3 ">
            *At participating McDonald’s for a limited time.
          </p>
          <div className="flex flex-col justify-center my-4">
            {/* Button to get the Chicken Big Mac for free */}
            <motion.a  
              href="https://smrturl.co/o/610841/53356127?s1=Mcweb" // Link to get the Chicken Big Mac
              className="bg-[#fcb808] text-[#292929] px-8 md:px-12 py-4 rounded-md 
                   text-lg
                   font-semibold
                   transition-transform transform hover:scale-105 hover:shadow-lg
                    hover:bg-[#d59b08] text-center"
              initial={{ scale: 0.8 }} // Initial scale for animation
              whileHover={{ scale: 0.9 }} // Scale on hover
              transition={{ duration: 0.19 }} // Duration of the animation
            >
              Get it Now For Free
            </motion.a>
          </div>
        </div>
      </div>
      {/* Animated header for Free Big Mac offer */}
      <motion.h2
        className="text-center text-2xl md:text-4xl text-[#1f2937] font-bold my-4 md:my-12 mx-3 text-wrap"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
        animate={{ opacity: 1, scale: 1 }} // Final state for animation
        transition={{ duration: 0.15 }} // Duration of the animation
      >
        Free Big Mac® w/ $1 min. purchase
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center my-4">
        <div>
          {/* Image of desktop version of Chicken Big Mac */}
          <img
            src={desktop}
            alt="Chicken Big Mac"
            className="mx-auto  rounded-lg w-4/5
                h-auto shadow-lg"
          />
        </div>
        <div>
          {/* Description of the offer */}
          <p className="text-justify mx-3 text-base md:text-lg text-[#1f2937] font-semibold mt-4">
            Looking for something special, saucy and free? Download the app and
            get a free Big Mac with your first purchase of $1+.* Every $1 you
            spend earns 100 points, redeemable for free food.
            <br />
          </p>
          <p className="text-xs text-[#6b7280] mx-3 ">
            *May take up to 48 hours to appear in your deals
          </p>
          <div className="flex flex-col justify-center my-4">
            {/* Button to get a free Big Mac */}
            <motion.a
              href="https://smrturl.co/o/610841/53356127?s1=Mcweb" // Link to get the free Big Mac
              className="bg-[#fcb808] text-[#292929] px-8 md:px-12 py-4 rounded-md 
                   text-lg
                   font-semibold
                   transition-transform transform hover:scale-105 hover:shadow-lg
                    hover:bg-[#d59b08] text-center"
              initial={{ scale: 0.8 }} // Initial scale for animation
              whileHover={{ scale: 0.9 }} // Scale on hover
              transition={{ duration: 0.19 }} // Duration of the animation
            >
              Get a Free Big Mac
            </motion.a>
          </div>
        </div>
      </div>
      {/* Animated header for how to use the gift card */}
      <motion.h2
        className="text-center text-2xl md:text-4xl text-[#1f2937] font-bold my-4 md:my-12 mx-3 text-wrap"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
        animate={{ opacity: 1, scale: 1 }} // Final state for animation
        transition={{ duration: 0.15 }} // Duration of the animation
      >
        How to use McDonald's Gift Card
      </motion.h2>
      <div className="flex justify-center md:mx-auto mx-3 my-4 rounded-lg shadow-md">
        {/* Embedded YouTube video on how to use the gift card */}
        <iframe
          className="rounded-lg shadow-md w-full h-auto md:h-[300px] md:w-2/3"
          src="https://www.youtube.com/embed/V3Rcl6RLBMg"
          title="How to Use McDonald S Gift Card on App (2024)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="my-8">
        {/* Section for customer testimonials */}
        <h3 className="text-center text-2xl md:text-4xl font-bold text-[#1f2937] mb-4">
          What Our Customers Say?
        </h3>
        <div className="flex flex-col justify-center items-center space-y-4">
          {/* Testimonial from Sarah L. */}
          <div className="bg-white shadow-md rounded-lg p-4 max-w-xs flex items-center">
            <img
              src={user1}
              alt="Profile of Sarah L."
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-700 italic">
                &quot;Using the McDonald&apos;s gift card was super easy! I got
                my free Big Mac in no time!&quot;
              </p>
              <p className="font-semibold text-[#1f2937]">- Sarah L.</p>
            </div>
          </div>
          {/* Testimonial from John D. */}
          <div className="bg-white shadow-md rounded-lg p-4 max-w-xs flex items-center">
            <img
              src={user2}
              alt="Profile of John D."
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-700 italic">
                &quot;I love the rewards program! Every dollar spent gets me
                closer to free food!&quot;
              </p>
              <p className="font-semibold text-[#1f2937]">- John D.</p>
            </div>
          </div>
          {/* Testimonial from Emily R. */}
          <div className="bg-white shadow-md rounded-lg p-4 max-w-xs flex items-center">
            <img
              src={user4}
              alt="Profile of Emily R."
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-700 italic">
                &quot;The app is fantastic! I redeemed my points for a delicious
                meal!&quot;
              </p>
              <p className="font-semibold text-[#1f2937]">- Emily R.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated header for contact section */}
      <motion.h2
        className="text-center text-2xl md:text-4xl text-[#1f2937] font-bold my-4 md:my-12 mx-3 text-wrap"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
        animate={{ opacity: 1, scale: 1 }} // Final state for animation
        transition={{ duration: 0.15 }} // Duration of the animation
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
          {/* Contact form for user inquiries */}
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#fcb808] text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#0c395b] text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold text-lg">About Us</h5>
              <p className="text-gray-300">
                We are committed to serving quality food and providing excellent
                service.
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold text-lg">Contact</h5>
              <p className="text-gray-300">Email: contact@mcdonalds.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg">Follow Us</h5>
              <div className="flex space-x-4 mt-2">
                {/* Social media links */}
                <a
                  href="https://www.facebook.com" // Link to Facebook
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#3b5998] hover:text-blue-600"
                >
                  <svg
                    className="h-5 w-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zM12 2.5c2.5 0 3.5 1.5 3.5 3.5h-3v2.5h3v3h-3v8h-3v-8h-3v-3h3v-2.5c0-2.5 1-4.5 4.5-4.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com" // Link to Twitter
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#1DA1F2] hover:text-blue-400"
                >
                  <svg
                    className="h-5 w-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.643 4.937c-.835.37-1.73.617-2.675.729a4.688 4.688 0 002.063-2.585 9.36 9.36 0 01-2.956 1.134A4.688 4.688 0 0016.5 3c-2.6 0-4.688 2.088-4.688 4.688 0 .367.042.724.125 1.067-3.9-.195-7.36-2.063-9.688-4.9-.404.693-.634 1.5-.634 2.365 0 1.63.83 3.067 2.086 3.91a4.66 4.66 0 01-2.125-.586v.059c0 2.285 1.623 4.19 3.77 4.623a4.688 4.688 0 01-2.125.08c.6 1.875 2.325 3.25 4.375 3.25a9.36 9.36 0 01-5.75 1.975c-.375 0-.75-.022-1.125-.067a13.2 13.2 0 007.125 2.086c8.55 0 13.25-7.083 13.25-13.25 0-.2 0-.4-.014-.6A9.48 9.48 0 0024 4.5a9.36 9.36 0 01-2.357.645A4.688 4.688 0 0023.643 4.937z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com" // Link to Instagram
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#C13584] hover:text-pink-500"
                >
                  <svg
                    className="h-5 w-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.5c3.1 0 3.5.01 4.75.07 1.2.06 2.1.26 2.75.55.7.35 1.2.8 1.7 1.4.5.5 1 1 1.4 1.7.3.65.5 1.55.55 2.75.06 1.25.07 1.65.07 4.75s-.01 3.5-.07 4.75c-.06 1.2-.26 2.1-.55 2.75-.35.7-.8 1.2-1.4 1.7-.5.5-1 1-1.7 1.4-.65.3-1.55.5-2.75.55-1.25.06-1.65.07-4.75.07s-3.5-.01-4.75-.07c-1.2-.06-2.1-.26-2.75-.55-.7-.35-1.2-.8-1.7-1.4-.5-.5-1-1-1.4-1.7-.3-.65-.5-1.55-.55-2.75C2.51 12 2.5 11.65 2.5 8.5s.01-3.5.07-4.75c.06-1.2.26-2.1.55-2.75.35-.7.8-1.2 1.4-1.7.5-.5 1-1 1.7-1.4.65-.3 1.55-.5 2.75-.55C8.5 2.51 8.85 2.5 12 2.5zm0 1.5c-3.1 0-3.5.01-4.75.07-1.1.06-1.8.26-2.25.5-.5.25-.9.6-1.2 1.1-.3.3-.6.7-.8 1.2-.25.5-.45 1.15-.5 2.25-.06 1.25-.07 1.65-.07 4.75s.01 3.5.07 4.75c.06 1.1.26 1.8.5 2.25.25.5.6.9 1.1 1.2.3.25.7.45 1.25.5 1.25.06 1.65.07 4.75.07s3.5-.01 4.75-.07c1.1-.06 1.8-.26 2.25-.5.5-.25.9-.6 1.2-1.1.3-.3.6-.7.8-1.2.25-.5.45-1.15.5-2.25.06-1.25.07-1.65.07-4.75s-.01-3.5-.07-4.75c-.06-1.1-.26-1.8-.5-2.25-.25-.5-.6-.9-1.1-1.2-.3-.25-.7-.45-1.25-.5-1.25-.06-1.65-.07-4.75-.07zm0 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 1.5a5 5 0 110 10 5 5 0 010-10zm5-2.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-300 text-sm">
            © 2023 McDonald's. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage; // Exporting HomePage component for use in other parts of the application
