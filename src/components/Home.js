import React from 'react';
import { Linkedin, Github, Twitter, Mail, MapPin } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdulahad-dahir-78b448379', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/abdulahad-dahir', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/abdul-ahad', label: 'Twitter' },
    { icon: Mail, href: 'mailto:ahaddahir7@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="section-padding pt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                <img
                  src="/images/abdul-ahad-profile.jpg"
                  alt="Abdul Ahad - MERN Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Abdul Ahad
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-600 dark:text-primary-400">
                MERN Stack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
                Passionate developer crafting exceptional web experiences with modern technologies
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection('#experience')}
                className="btn-secondary"
              >
                Experience
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Based in Pakistan</span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
