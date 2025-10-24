import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

/**
 * Component to display sample English data (simulating API data)
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Sample English data instead of Latin
  const sampleEnglishPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      body: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components and manage state efficiently.",
      userId: 1,
      category: "Programming"
    },
    {
      id: 2,
      title: "Understanding JavaScript ES6 Features",
      body: "ES6 introduced many new features to JavaScript like arrow functions, template literals, and destructuring assignments that make coding more efficient.",
      userId: 2,
      category: "JavaScript"
    },
    {
      id: 3,
      title: "CSS Flexbox Layout Guide",
      body: "Flexbox is a CSS layout module that makes it easier to design flexible responsive layout structure without using float or positioning.",
      userId: 1,
      category: "CSS"
    },
    {
      id: 4,
      title: "Introduction to Tailwind CSS",
      body: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML.",
      userId: 3,
      category: "CSS"
    },
    {
      id: 5,
      title: "React Hooks Explained",
      body: "Hooks are functions that let you use state and other React features without writing a class. They simplify component logic and reuse.",
      userId: 2,
      category: "React"
    },
    {
      id: 6,
      title: "Responsive Web Design Principles",
      body: "Responsive design ensures that web applications work well on a variety of devices and window or screen sizes using flexible layouts and media queries.",
      userId: 1,
      category: "Web Design"
    },
    {
      id: 7,
      title: "JavaScript Array Methods",
      body: "Modern JavaScript provides powerful array methods like map, filter, and reduce that help manipulate arrays in a functional programming style.",
      userId: 3,
      category: "JavaScript"
    },
    {
      id: 8,
      title: "Building RESTful APIs",
      body: "RESTful APIs follow specific architectural constraints and are stateless, cacheable, and have a uniform interface between components.",
      userId: 2,
      category: "Backend"
    },
    {
      id: 9,
      title: "Git Version Control Basics",
      body: "Git is a distributed version control system that helps developers track changes in source code during software development.",
      userId: 1,
      category: "Tools"
    },
    {
      id: 10,
      title: "Introduction to Node.js",
      body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server side.",
      userId: 3,
      category: "Backend"
    }
  ];

  // Simulate API call with setTimeout
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Use our English data instead of API call
        setPosts(sampleEnglishPosts);
        setError(null);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <Card>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading learning resources...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <div className="text-center py-8 text-red-600 dark:text-red-400">
          <p>Error: {error}</p>
          <Button 
            variant="primary" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Web Development Learning Resources</h2>
        
        {/* Search Feature */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search topics, categories, or content..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        {/* Posts Count */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Showing {currentPosts.length} of {filteredPosts.length} resources
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {currentPosts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No learning resources found matching your search.
          </p>
        ) : (
          currentPosts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {post.body}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <span>Category: {post.category}</span>
                <span>Resource ID: {post.id}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center space-x-2">
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ApiData;