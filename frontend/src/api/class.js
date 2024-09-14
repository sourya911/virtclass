const API_URL = 'http://localhost:5000/api/class';

const getAuthToken = () => localStorage.getItem('token'); // Retrieve token from localStorage

export const getClasses = async () => {
  const response = await fetch(`${API_URL}/classes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`, // Include token here
    },
  });
  return response.json();
};

export const createClass = async (classData) => {
  const response = await fetch(`${API_URL}/classes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`, // Include token here
    },
    body: JSON.stringify(classData),
  });
  return response.json();
};
