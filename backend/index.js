const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'timetracker'
});

app.post('/time', (req, res) => {
  const { user_id, project_id, start_time, end_time, duration, notes } = req.body;
  db.query('INSERT INTO time_entries (user_id, project_id, start_time, end_time, duration, notes) VALUES (?, ?, ?, ?, ?, ?)',
    [user_id, project_id, start_time, end_time, duration, notes],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    });
});

app.get('/time', (req, res) => {
  db.query('SELECT * FROM time_entries', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/projects', (req, res) => {
  const { user_id, name } = req.body;
  db.query('INSERT INTO projects (user_id, name) VALUES (?, ?)', [user_id, name], (err, result) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

app.get('/projects', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});