import React from 'react';
import Card from '../components/Card';
import ApiData from '../components/ApiData';

const About = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          About PLP Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is a React application built for the Power Learn Project assignment, 
          demonstrating modern frontend development practices.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold mb-3">🛠️ Technologies Used</h3>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>• React.js with Hooks</li>
            <li>• Tailwind CSS for styling</li>
            <li>• React Router for navigation</li>
            <li>• Local Storage for data persistence</li>
            <li>• Responsive design</li>
            <li>• Context API for state management</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-3">🎯 Features</h3>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>• Add, complete, and delete tasks</li>
            <li>• Filter tasks (All, Active, Completed)</li>
            <li>• Dark/Light theme support</li>
            <li>• Mobile-responsive design</li>
            <li>• Data persistence with localStorage</li>
            <li>• API integration with search & pagination</li>
          </ul>
        </Card>
      </div>

      {/* API Data Section */}
      <ApiData />
    </div>
  );
};

export default About;