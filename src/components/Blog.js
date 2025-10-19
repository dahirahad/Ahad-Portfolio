import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Plus, Edit3, Search, X, Trash2, Eye } from 'lucide-react';

const Blog = () => {
  // Sample blog data - in a real app, this would come from an API or database
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Building Scalable MERN Stack Applications",
      excerpt: "Learn the best practices for building scalable and maintainable MERN stack applications. From project structure to deployment strategies.",
      content: "Full blog content would go here...",
      author: "Abdul Ahad",
      date: "2025-04-15",
      readTime: "8 min read",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      excerpt: "Discover advanced techniques to optimize your React applications for better performance and user experience.",
      content: "Full blog content would go here...",
      author: "Abdul Ahad",
      date: "2025-5-14",
      readTime: "12 min read",
      category: "React",
      image: "https://images.wallpapersden.com/image/download/programming-coding-language_bGhpbm6UmZqaraWkpJRmbmdlrWZlbWU.jpg",
      tags: ["React", "Performance", "Optimization", "JavaScript"]
    },
    {
      id: 3,
      title: "Node.js Security Best Practices",
      excerpt: "Essential security practices every Node.js developer should implement to protect their applications from common vulnerabilities.",
      content: "Full blog content would go here...",
      author: "Abdul Ahad",
      date: "2025-05-16",
      readTime: "10 min read",
      category: "Node.js",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      tags: ["Node.js", "Security", "Authentication", "Best Practices"]
    },
    {
      id: 4,
      title: "MongoDB Schema Design Patterns",
      excerpt: "Learn effective MongoDB schema design patterns for different use cases and how to optimize your database structure.",
      content: "Full blog content would go here...",
      author: "Abdul Ahad",
      date: "2025-7-28",
      readTime: "15 min read",
      category: "MongoDB",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      tags: ["MongoDB", "Database", "Schema Design", "NoSQL"]
    },
    {
      id: 5,
      title: "Modern JavaScript ES6+ Features",
      excerpt: "Explore the powerful features introduced in ES6 and beyond that make JavaScript development more efficient and enjoyable.",
      content: "Full blog content would go here...",
      author: "Abdul Ahad",
      date: "2025-6-20",
      readTime: "14 min read",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      tags: ["JavaScript", "ES6", "Modern JS", "Web Development"]
    },
    {
      id: 6,
      title: "Deploying MERN Apps to Production",
      excerpt: "A comprehensive guide to deploying your MERN stack applications to production with best practices and tools.",
      content: "Full blog content would go here...",
      author: "Abdul Ahad",
      date: "2025-8-15",
      readTime: "18 min read",
      category: "Deployment",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      tags: ["Deployment", "Production", "MERN", "DevOps"]
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    excerpt: '',
    category: '',
    tags: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    const blog = {
      id: blogs.length + 1,
      ...newBlog,
      author: "Abdul Ahad",
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(newBlog.excerpt.length / 200)} min read`,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      tags: newBlog.tags.split(',').map(tag => tag.trim()),
      content: "Full blog content would go here..."
    };
    
    setBlogs([blog, ...blogs]);
    setNewBlog({ title: '', excerpt: '', category: '', tags: '' });
    setShowAddForm(false);
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    if (searchValue.trim() === '') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchValue.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchValue.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchValue.toLowerCase()))
      );
      setFilteredBlogs(filtered);
    }
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredBlogs(blogs);
  };

  const handleDeleteBlog = (blogId) => {
    setBlogs(blogs.filter(blog => blog.id !== blogId));
    setFilteredBlogs(filteredBlogs.filter(blog => blog.id !== blogId));
    setShowDeleteConfirm(null);
  };

  const confirmDelete = (blogId) => {
    setShowDeleteConfirm(blogId);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };

  // If a blog is selected, show the blog detail view
  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-900">
        <div className="container-custom py-8">
          {/* Back Button */}
          <button
            onClick={closeBlog}
            className="mb-6 inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Blogs
          </button>

          {/* Blog Header */}
          <div className="mb-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
                {selectedBlog.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedBlog.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {selectedBlog.excerpt}
              </p>
            </div>

            {/* Blog Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{selectedBlog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(selectedBlog.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{selectedBlog.readTime}</span>
              </div>
            </div>

            {/* Blog Image */}
            <div className="w-full h-96 rounded-2xl overflow-hidden mb-8">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {selectedBlog.content}
              </p>
              
              {/* Sample content for demonstration */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This is a detailed blog post about {selectedBlog.title.toLowerCase()}. 
                Here you would find comprehensive information, code examples, and practical insights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Points
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>First important point about {selectedBlog.category}</li>
                <li>Second key insight for developers</li>
                <li>Third practical application</li>
                <li>Fourth best practice to follow</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Conclusion
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                In conclusion, {selectedBlog.title.toLowerCase()} is an essential topic for modern web development. 
                By following these best practices, you can build better applications and improve your development skills.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {selectedBlog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs
                .filter(blog => blog.id !== selectedBlog.id && blog.category === selectedBlog.category)
                .slice(0, 3)
                .map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => openBlog(blog)}
                    className="card overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="h-32 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Tutorials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights from my journey in web development
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs by title, content, category, or tags..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white text-lg transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* Search Results Count */}
            {searchTerm && (
              <div className="mt-4 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Found {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}

                </p>
              </div>
            )}
          </div>
        </div>

        {/* Add New Blog Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-2 btn-primary"
          >
            {showAddForm ? <Edit3 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            {showAddForm ? 'Cancel' : 'Add New Blog'}
          </button>
        </div>

        {/* Add Blog Form */}
        {showAddForm && (
          <div className="card p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Add New Blog Post
            </h3>
            <form onSubmit={handleAddBlog} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={newBlog.excerpt}
                  onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newBlog.tags}
                    onChange={(e) => setNewBlog({...newBlog, tags: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white"
                    placeholder="React, Node.js, MongoDB"
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="w-full btn-primary">
                Add Blog Post
              </button>
            </form>
          </div>
        )}

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="card overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      confirmDelete(blog.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                    title="Delete blog"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Blog Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blog.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {/* Read More Button */}
                    <button
                      onClick={() => openBlog(blog)}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 group/btn"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No blogs found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchTerm 
                ? `No blogs match your search for "${searchTerm}". Try different keywords or browse all blogs.`
                : "No blogs available at the moment."
              }
            </p>
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="btn-primary"
              >
                Clear Search
              </button>
            )}
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Get notified when I publish new articles and tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Delete Blog Post
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Are you sure you want to delete this blog post? This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={cancelDelete}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(showDeleteConfirm)}
                    className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
