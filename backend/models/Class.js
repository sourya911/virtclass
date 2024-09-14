const db = require('../config/db');

class Class {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM classes');
    return rows;
  }

  // Add more methods as needed
}

module.exports = Class;
