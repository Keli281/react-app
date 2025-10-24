import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Tasks from './pages/tasks';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        {/* Navbar Component */}
        <Navbar />

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;