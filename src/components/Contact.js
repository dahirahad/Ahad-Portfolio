import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mwpqjlep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ahaddahir7@gmail.com',
      link: 'mailto:ahaddahir7@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 307 349 5496',
      link: 'tel:+923073495496',
      description: 'Call me during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bahawalpur, Pakistan',
      link: null,
      description: 'Based in Bahawalpur, Pakistan, available worldwide'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdulahad-dahir-78b448379',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/abdulahad-dahir',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/abdul-ahad',
      color: 'hover:bg-blue-400'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you have a question about my work, want to discuss a potential project, 
                or just want to say hello, I'd love to hear from you. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {info.value}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Availability
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>• Available for freelance projects</p>
                <p>• Open to full-time opportunities</p>
                <p>• Willing to relocate for the right opportunity</p>
                <p>• Response time: Usually within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                formStatus.success 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
              }`}>
                {formStatus.success ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{formStatus.message}</span>
              </div>
            )}

            <form 
              action="https://formspree.io/f/mwpqjlep" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                I typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-20 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Other Ways to Connect
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Perfect for detailed project discussions
                </p>
                <a
                  href="mailto:ahaddahir7@gmail.com"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  Send Email
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Phone Call
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Great for urgent matters or quick questions
                </p>
                <a
                  href="tel:+923073495496"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                >
                  Call Now
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  In-Person
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Available for meetings in Pakistan
                </p>
                <span className="text-purple-600 dark:text-purple-400 font-medium">
                  Schedule Meeting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;