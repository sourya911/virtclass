const API_URL = 'http://localhost:5000/api/auth';

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const login = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }
  
      // Parse and return JSON response
      const data = await response.json();
      return data;
  
    } catch (error) {
      // Handle errors in network requests
      console.error('Login error:', error);
      return { error: error.message }; // Return error message for further handling
    }
  };