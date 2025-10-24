import React from 'react';
import TaskManager from '../components/TaskManager';

const Tasks = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage all your tasks in one place. Add, complete, and organize your to-do items.
        </p>
      </div>
      <TaskManager />
    </div>
  );
};

export default Tasks;