const express = require('express');
const serverless = require('serverless-http');
const sqlize = require('sequelize');
const env = require('dotenv');
const app = express();
const router = express.Router();
export const envStation = env?.config()?.parsed;

let records = [];
const db = new sqlize.Sequelize(envStation?.DB_NAME, envStation?.DB_USERNAME, envStation?.DB_PASSWORD, {
    host: envStation?.DB_HOST,
    dialect: envStation?.DB_DIALEC,
    port: envStation?.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    retry: {
      max: 3,
    },
});

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log("error",error)
}

router.get('/', (req, res) => {
  res.send('App is running..');
});

router.post('/add', (req, res) => {
  res.send('New record added.');
});

router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

router.put('/', (req, res) => {
  res.send('Updating existing record');
});


router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Aayush',
    },
    {
      id: '002',
      name: 'rohit',
    },
    {
      id: '003',
      name: 'Mohit',
    },
  ]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
