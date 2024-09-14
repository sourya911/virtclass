import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('/api/class')
      .then(res => setClasses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Link to="/create-class" className="bg-blue-500 text-white px-4 py-2">Create New Class</Link>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Manage Classes</h2>
        <ul>
          {classes.map(cls => (
            <li key={cls.id} className="mt-4">
              <h3 className="text-lg font-semibold">{cls.title}</h3>
              <Link to={`/edit-class/${cls.id}`} className="text-blue-500">Edit</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
