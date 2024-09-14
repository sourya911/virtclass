const db = require('../config/db');

class Session {
  static async findByUnitId(unitId) {
    const [rows] = await db.query('SELECT * FROM sessions WHERE unitId = ?', [unitId]);
    return rows;
  }

  // Add more methods as needed
}

module.exports = Session;
