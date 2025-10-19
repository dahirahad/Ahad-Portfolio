import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Software Engineering',
      institution: 'The Islamia University',
      location: 'Bahawalpur, Pakistan',
      period: '2023 - 2027',
      description: 'Pursuing a degree in Software Engineering with hands-on experience in algorithms, data structures, and web development projects.',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'work',
      title: 'Front-End Web Developer',
      institution: '7 Skies Solution',
      location: 'Bahawalpur',
      period: '2023 - 2024',
      description: 'Front-End Web Developer and Team Leader at 7 Skies, delivering responsive interfaces with React.js, collaborating with design teams, and leading multiple client projects.',
      icon: Briefcase,
      color: 'from-green-500 to-green-600'
    },
    {
      type: 'work',
      title: 'Web Development Instructor',
      institution: 'Intellixsoft',
      location: 'Pakistan',
      period: '2024 - Present',
      description: 'Leading development teams, mentoring junior developers, and architecting scalable solutions. Managing project timelines, code reviews, and ensuring best practices across the team.',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600'
    },
    {
      type: 'Student',
      title: 'Backend Development Student',
      institution: 'NexSkill',
      location: 'Lahore ',
      period: ' (2024, 2 months)',
      description: 'Focused on learning backend concepts with AI integration and gaining hands-on experience in advanced backend technologies.',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const getIconBg = (color) => {
    return `bg-gradient-to-r ${color}`;
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 dark:from-primary-800 dark:via-primary-600 dark:to-primary-800"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline item */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card p-6 hover:shadow-2xl transition-all duration-300">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-full text-white mb-4 ${getIconBg(exp.color)}`}>
                      <exp.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.institution}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills showcase */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Frontend Development
              </h4>
              <div className="space-y-3">
                {['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Material-UI'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Backend Development
              </h4>
              <div className="space-y-3">
                {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'JWT'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Tools & Others
              </h4>
              <div className="space-y-3">
                {['Git', 'Firebase', 'Figma', 'Postman', 'VS Code', 'Deepsite', 'Google Studio AI'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
