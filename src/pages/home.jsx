import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to PLP Task Manager
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Organize your tasks and boost your productivity
          </p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl font-semibold mb-3">📝 Easy Task Management</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Create, organize, and track your tasks with our intuitive interface.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-3">🎯 Stay Focused</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Filter tasks by status and focus on what matters most.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-3">💾 Data Persistence</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Your tasks are saved locally so you never lose your progress.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;