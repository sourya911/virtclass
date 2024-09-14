const db = require('../config/db');

exports.getClasses = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM classes');
    res.json(rows);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Add more functions to manage units, sessions, and classes as needed
