import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const Background = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React.js, Next.js, HTML5, CSS3, JavaScript' },
    { icon: Database, title: 'Backend Development', description: 'Node.js, Express.js, MongoDB, PostgreSQL' },
    { icon: Globe, title: 'Full Stack Solutions', description: 'MERN Stack, REST APIs, GraphQL' },
    { icon: Zap, title: 'Performance & Security', description: 'Optimization, Authentication, Best Practices' },
  ];

  return (
    <section id="background" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey & Background
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From passionate learner to experienced developer, here's my story
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              The Beginning
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
              I began my journey at 7 Skies as a student, starting out as a Front-End Developer. This was where I first applied my skills in real projects and gained practical exposure to the development process.
              </p>
              <p>
              During my time there, I worked on a variety of projects using HTML, CSS, JavaScript, and React.js, while also learning teamwork, collaboration, and adaptability.
              </p>
              <p>
              Later, I joined MJS in Bahawalpur as a Front-End Developer, where I continued to grow by working on diverse client projects and strengthening my problem-solving skills.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-r from-primary-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <Code className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-xl font-semibold">Code. Create. Innovate.</h4>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full animate-bounce-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Growth Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-64 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <Database className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-xl font-semibold">Build. Scale. Deploy.</h4>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Growth & Evolution
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
              I transitioned into full-stack development by learning Node.js and MongoDB, which allowed me to build complete MERN stack applications and focus on scalability and architecture.
              </p>
              <p>
              Each project enhanced my skills in UX design, database optimization, API security, and deployment, reinforcing that learning in this field never stops.
              </p>
              <p>
              Later, I joined IntellixSoft as a Web Development Instructor and Team Leader while also studying at NexSkill to strengthen backend concepts and explore AI integration.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="card p-6 text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                <skill.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Future Vision */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Looking Forward
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            As technology continues to evolve, I'm excited to explore new frontiers in web development. 
            From AI integration to blockchain applications, from progressive web apps to serverless architectures - 
            the future is bright, and I'm ready to build it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Background;

