import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-5">
      <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        
       <div>
        <h2 className="text-xl font-bold mb-4">About Us</h2>
        <p className="text-gray-400 mb-4">
        At Code Crafters Studio, we are dedicated to merging design,
        technology, and strategic thinking to create impactful solutions.
        <a href="/About" className="text-accent hover:underline"> Learn more</a>
        </p>
       </div>

       <div>
       <h2 className="text-xl font-bold mb-4">Quick Links</h2>
       <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/Expertise" className="hover:underline">Expertise</a>
              </li>
              <li>
                <a href="/Collaborate" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-gray-400 hover:text-accent transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-accent transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-gray-400 hover:text-accent transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-accent transition duration-300" />
              </a>
            </div>
          </div>
       </div>
      </div>
      
      <div className="text-center mt-5 border-t border-gray-600 pt-4">
       <p className="text-gray-400 text-sm">
        &copy;{new Date().getFullYear()} Code Crafters Studio. All rights reserved.
       </p>
      </div>
    </footer>
  );
};

export default Footer;
