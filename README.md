# TimeTally-Transformer
Project Overview
TimeTally Transformer is a robust SQL query tool designed to streamline the sorting and analysis of monthly performance scores. This tool is specifically tailored for enterprises needing accurate chronological order of month names for enhanced data reporting and analysis. Built using Node.js, Express, CORS, and PostgreSQL, this project provides a back-end setup to handle requests and aggregate performance data based on the society or company specified by the user.

Technical Setup

Node.js: As the JavaScript runtime, Node.js facilitates the backend services.
Express: This minimalistic web framework structures our API's routing mechanisms.
CORS (Cross-Origin Resource Sharing): Implemented to allow or restrict requested resources on a web server depending on where the HTTP request was initiated.
PostgreSQL: Used for database management, storing societies and their respective scores.
Database Design

The database comprises two primary tables:

society: Stores society IDs and names.
id: Unique identifier for each society.
name: Name of the society.
scores: Keeps track of scores, linked to societies through society_id.
society_id: References id in the society table.
week_start: Start date of the scoring week.
week_end: End date of the scoring week.
score: Numeric score.
month: Month name for the scoring period.
API Functionality

The API endpoint /monthly-scores retrieves the total scores for a given society sorted by month. It accepts a query parameter for the society name, fetches the corresponding ID from the society table, and then calculates the total scores from the scores table grouped by month. Months are sorted chronologically through a CASE statement in the SQL query.

Front-end Integration

The front-end component utilizes HTML and Chart.js to display the data. Users input a society name, triggering a fetch request to the backend, which responds with the relevant scoring data. This data is then plotted using a bar chart that updates dynamically based on the input.

Security and Deployment

Ensure to handle CORS appropriately, configure your database securely, and manage environment variables for sensitive information like database credentials. Consider deploying the application using a cloud service provider that supports Node.js environments.

Future Enhancements

Implement authentication and authorization to secure access.
Extend database schema to include more detailed analytics.
Integrate with other data visualization tools for more comprehensive reporting capabilities.
This documentation provides a comprehensive overview of the TimeTally Transformer, detailing its functionality, technical structure, and potential improvements, ensuring stakeholders have a clear understanding of the project's capabilities and architecture.







