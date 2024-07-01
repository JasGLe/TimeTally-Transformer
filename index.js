const cors = require('cors');
const express = require('express');
const {Pool} = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'ancs2024',
  port: 5432
});

app.use(express.json(), cors());

app.get('/monthly-scores', async (req, res) => {
  const {societyName} = req.query;
  try {
    const societyQuery = `SELECT id FROM society WHERE name = $1`;
    const societyRes = await pool.query(societyQuery, [societyName]);
    const societyId = societyRes.rows[0].id;

    const scoreQuery = `
    SELECT month, SUM(score) AS total_score
    FROM scores
    WHERE society_id = $1
    GROUP BY society_id, month
    ORDER BY CASE
             WHEN month = 'January' THEN 1
             WHEN month = 'February' THEN 2
             WHEN month = 'March' THEN 3
             WHEN month = 'April' THEN 4
             WHEN month = 'May' THEN 5
             WHEN month = 'June' THEN 6
             WHEN month = 'July' THEN 7
             WHEN month = 'August' THEN 8
             WHEN month = 'September' THEN 9
             WHEN month = 'October' THEN 10
             WHEN month = 'November' THEN 11
             WHEN month = 'December' THEN 12
         END;
`;
    const scoreRes = await pool.query(scoreQuery, [societyId]);
    res.json(scoreRes.rows);
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
