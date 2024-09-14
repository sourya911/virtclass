import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ClassPage from './pages/ClassPage';
import { useEffect, useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally verify token validity
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/classes" /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/classes" /> : <Register />} />
        <Route path="/classes" element={isAuthenticated ? <ClassPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/classes" />} />
      </Routes>
    </Router>
  );
};

export default App;
