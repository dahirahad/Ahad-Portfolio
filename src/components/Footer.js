import React from 'react';
import { Linkedin, Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/abdul-ahad', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/abdul-ahad', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/abdul-ahad', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@abdul-ahad.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white py-16">
      <div className="container-custom">
        <div className="text-center space-y-8">
          {/* Name */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Abdul Ahad
            </h2>
            <p className="text-xl text-gray-300">
              MERN Stack Developer
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gray-800 hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-300">
            <a href="#home" className="hover:text-primary-400 transition-colors duration-300">
              Home
            </a>
            <a href="#experience" className="hover:text-primary-400 transition-colors duration-300">
              Experience
            </a>
            <a href="#books" className="hover:text-primary-400 transition-colors duration-300">
              Books
            </a>
            <a href="#blog" className="hover:text-primary-400 transition-colors duration-300">
              Blog
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-gray-400 space-y-2">
            <p>Based in Pakistan</p>
            <p>Available for freelance opportunities</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              <span>© {currentYear} Abdul Ahad. All rights reserved.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Pakistan
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

