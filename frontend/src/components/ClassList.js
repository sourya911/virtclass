import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('/api/class')
      .then(res => setClasses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classes.map(cls => (
          <div key={cls.id} className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{cls.title}</h2>
            <p>{cls.description}</p>
            <Link to={`/class/${cls.id}`} className="text-blue-500 mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassList;
