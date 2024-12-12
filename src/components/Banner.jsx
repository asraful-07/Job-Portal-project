import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left px-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Find Your Dream Job Today!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover thousands of job opportunities at your fingertips. Let us
            help you take the next step in your career journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Explore Jobs
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="https://media.istockphoto.com/id/2158226013/photo/business-people-working-with-a-digital-tablet-in-a-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBqxJ7LZ0aXLOmJznpAo4J_j1CzbJjKCtp7Lj4-KqyE="
            alt="Job search illustration"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
