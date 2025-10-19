import React from 'react';
import { BookOpen, Star, ExternalLink } from 'lucide-react';

const Books = () => {
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      image: " https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "A handbook of agile software craftsmanship. Learn how to write code that is clean, readable, and maintainable.",
      rating: 5,
      category: "Software Development",
      link: "#"
    },
    {
      title: "Design Patterns",
      author: "Erich Gamma, Richard Helm",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Elements of Reusable Object-Oriented Software. Essential reading for understanding software design patterns.",
      rating: 5,
      category: "Software Architecture",
      link: "#"
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Your journey to mastery. Learn practical approaches to software development and career advancement.",
      rating: 5,
      category: "Career Development",
      link: "#"
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Discover the beautiful, elegant, and expressive language that is JavaScript at its best.",
      rating: 4,
      category: "JavaScript",
      link: "#"
    },
    {
      title: "React: Up & Running",
      author: "Stoyan Stefanov",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Building Web Applications. A comprehensive guide to building React applications from scratch.",
      rating: 4,
      category: "React",
      link: "#"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="books" className="section-padding bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-dark-800 dark:to-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recommended Books
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Books that have shaped my understanding of software development and continue to inspire my work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="card overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Book Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    {book.category}
                  </span>
                </div>
              </div>

              {/* Book Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    by {book.author}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {renderStars(book.rating)}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    {book.rating}/5
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {book.description}
                </p>

                {/* Read More Link */}
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-300 group/link"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Reading Section */}
        <div className="mt-20 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Never Stop Learning
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              The software development landscape is constantly evolving. These books represent just a fraction of the knowledge 
              that's helped me grow as a developer. I'm always on the lookout for new resources to expand my understanding.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>• Continuous Learning</span>
              <span>• Best Practices</span>
              <span>• Industry Standards</span>
              <span>• Modern Approaches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
