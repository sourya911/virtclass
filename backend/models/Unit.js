const db = require('../config/db');

class Unit {
  static async findByClassId(classId) {
    const [rows] = await db.query('SELECT * FROM units WHERE classId = ?', [classId]);
    return rows;
  }

  // Add more methods as needed
}

module.exports = Unit;
