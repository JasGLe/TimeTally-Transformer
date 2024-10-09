# TimeTally-Transformer
**Project Overview** 

TimeTally Transformer is a robust SQL query tool designed to streamline the sorting and analysis of monthly performance scores. This tool is specifically tailored for enterprises needing accurate chronological order of month names for enhanced data reporting and analysis. Built using Node.js, Express, CORS, and PostgreSQL, this project provides a back-end setup to handle requests and aggregate performance data based on the society or company specified by the user.

**Technical Setup**

Node.js: As the JavaScript runtime, Node.js facilitates the backend services.<br>	
Express: This minimalistic web framework structures our API's routing mechanisms.<br>
CORS (Cross-Origin Resource Sharing): Implemented to allow or restrict requested resources on a web server depending on where the HTTP request was initiated.<br>
PostgreSQL: Used for database management, storing societies and their respective scores.
Database Design<br>

**The database comprises two primary tables:**

society: Stores society IDs and names.<br>
id: Unique identifier for each society.<br>
name: Name of the society.<br>
scores: Keeps track of scores, linked to societies through society_id.<br>
society_id: References id in the society table.<br>
week_start: Start date of the scoring week.<br>
week_end: End date of the scoring week.<br>
score: Numeric score.<br>
month: Month name for the scoring period.<br>

**API Functionality**

The API endpoint /monthly-scores retrieves the total scores for a given society sorted by month. It accepts a query parameter for the society name, fetches the corresponding ID from the society table, and then calculates the total scores from the scores table grouped by month. Months are sorted chronologically through a CASE statement in the SQL query.
```javascript
app.get('/monthly-scores', async (req, res) => {
  const {societyName} = req.query;
  try {
    const societyQuery = `SELECT id FROM society WHERE name = $1`;
    const societyRes = await pool.query(societyQuery, [societyName]);
    const societyId = societyRes.rows[0].id;
```
**Front-end Integration**

The front-end component utilizes HTML and Chart.js to display the data. Users input a society name, triggering a fetch request to the backend, which responds with the relevant scoring data. This data is then plotted using a bar chart that updates dynamically based on the input.



https://github.com/user-attachments/assets/8117b295-d39a-43d1-9ee5-4fe06a22db93


**Preventing SQL Injection**

SQL injection is a common security vulnerability that can allow an attacker to interfere with the queries that an application makes to its database. To prevent SQL injection, TimeTally Transformer utilizes parameterized queries, one of the most effective ways to safeguard against this type of attack.

#### Using `pool.query` with Parameterized Queries

The `pool.query` function from the `pg` module (node-postgres) supports parameterized queries, where SQL command strings and the data they use are sent to the database server separately. This method ensures that the data is bound to a parameter in the SQL query, rather than being directly executed as part of the SQL command.

Here is an example from our application:

```javascript
const societyQuery = `SELECT id FROM society WHERE name = $1`;
const result = await pool.query(societyQuery, [societyName]);
```


**Future Enhancements**

Implement authentication and authorization to secure access.<br>
Extend database schema to include more detailed analytics.<br>
Integrate with other data visualization tools for more comprehensive reporting capabilities.<br>
This documentation provides a comprehensive overview of the TimeTally Transformer, detailing its functionality, technical structure, and potential improvements, ensuring stakeholders have a clear understanding of the project's capabilities and architecture.


**Install dependencies:**<br>
```bash

npm install
```
**Set up your PostgreSQL database:**<br>
Ensure PostgreSQL is installed and running.
Create the required tables using the SQL script provided in `/sql/setup.sql.

**Configuration**<br>
Create a .env file in the root directory and update it with your database credentials:

```makefile

DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=postgres
DB_PASSWORD=yourpassword
DB_PORT=5432
```
**Usage**<br>
To start the server, run:

```bash
npm run dev
```
Navigate to "localhost" to view the application.


**Contact**<br>
Jasser yahyaoui - Jasseryahyaoui36@gmail.com

**Acknowledgments**<br>
Node.js<br>
PostgreSQL<br>
Chart.js<br>
Express



