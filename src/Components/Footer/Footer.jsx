import React from "react";
import habitLogo from "../../assets/Habit-rise.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-lightBg border-t border-secondary/30 px-8 py-10 text-textMain font-body">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={habitLogo} alt="HabitRise Logo" className="w-14" />
            </div>
            <p className="text-sm opacity-80">
              Build habits with intention. Transform your day, your mind, your
              life.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-primary font-semibold mb-3">
              Contact
            </h3>
            <p>
              Email: <span className="opacity-90">support@habitrise.app</span>
            </p>
            <p>
              Phone: <span className="opacity-90">+880 1234-567890</span>
            </p>
            <p>
              Location: <span className="opacity-90">Dhaka, Bangladesh</span>
            </p>
          </div>

          <div>
            <h3 className="font-heading text-primary font-semibold mb-3">
              Legal
            </h3>
            <Link to="/terms&conditions" className="block hover:text-primary transition text-sm">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="block hover:text-primary transition text-sm">
              Privacy Policy
            </Link>
          </div>
          <div>
            <h3 className="font-heading text-primary font-semibold mb-3">
              Follow Us
            </h3>
            <div className="flex items-center gap-4 text-primary text-xl">
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://x.com/">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-sm opacity-70">
          © {new Date().getFullYear()} HabitRise. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
