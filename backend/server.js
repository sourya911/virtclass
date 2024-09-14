require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


const app = express();
const port = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET;


// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes); 

// // Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/class', require('./routes/classRoutes'));


// Example of using JWT_SECRET
app.post('/login', (req, res) => {
  const token = jwt.sign({ userId: 1 }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
