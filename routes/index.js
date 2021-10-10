const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const connectionPool = mysql.createPool({
  host: 'localhost',
  user: 'youtubeuser',
  password: 'password',
  database: 'youtube',
  connectionLimit: 10,
});

router.post('/user', (req, res) => {
  const user = req.body;
  connectionPool.query(
    'INSERT INTO user (username, email) VALUES (?,?)',
    [user.username, user.email],
    (err, results) => {
      if (err) {
        console.log(err);
        res.send({ message: 'Request Failed' });
        return;
      }

      res.send({ message: 'Request Successful', data: results });
    }
  );
});

router.put('/user', (req, res) => {
  const user = req.body;
  connectionPool.query(
    'UPDATE user SET username = ?, email = ? WHERE id = ?',
    [user.username, user.email, user.id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.send({ message: 'Request Failed' });
        return;
      }

      res.send({ message: 'Request Successful', data: results });
    }
  );
});

router.get('/user/:id', (req, res) => {
  const id = req.params.id;
  connectionPool.query(
    'SELECT * FROM user WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.send({ message: 'Request Failed' });
        return;
      }

      res.send({ message: 'Request Successful', data: results });
    }
  );
});

router.delete('/user/:id', (req, res) => {
  const id = req.params.id;
  connectionPool.query(
    'DELETE FROM user WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.send({ message: 'Request Failed' });
        return;
      }

      res.send({ message: 'Request Successful', data: results });
    }
  );
});

module.exports = router;
