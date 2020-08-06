// module that loads environment variables from a .env file into process.env
require('dotenv').config();
// web framework for node.js
const express = require('express');
// node.js body parsing middleware
const bodyParser = require('body-parser');
// import controller for employees endpoints
const employeesCtrl = require('./controllers/employees');

// create an object representing the express application
const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 3030;

// MIDDLEWARE
app.use(bodyParser.json());

// ENDPOINTS
app.post('/employee-salary', employeesCtrl.readEmployeeData);

// start up the server on port 3030
app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
