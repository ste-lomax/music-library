// exports.create = (req, res) => {
//     res.sendStatus(201);
// }

const getDb = require('../services/db');

// exports.create = async (req, res) => {
//     const db = await getDb();
//     const { name, genre } = req.body;
  
//     try {
//       await db.query(`INSERT INTO Artist (name, genre) VALUES ('${name}', '${genre}')`);
  
//       res.sendStatus(201);
//     } catch (err) {
//       res.sendStatus(500).json(err);
//     }
  
//     db.close();
//   };

  exports.create = async (req, res) => {
    const db = await getDb();
    const { name, genre } = req.body;
  
    try {
      await db.query('INSERT INTO Artist (name, genre) VALUES (?, ?)', [
        name,
        genre,
      ]);
  
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(500).json(err);
    }
  
    db.close();
  };

// exports.read = (req, res) => {
//     res.sendStatus(200);
// }

exports.read = async (req, res) => {
    const db = await getDb();
  
    try {
      const [artists] = await db.query('SELECT * FROM Artist');
  
      res.status(200).json(artists);
    } catch (err) {
      res.status(500).json(err);
    }
    db.close();
  };