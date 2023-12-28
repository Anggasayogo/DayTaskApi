// index.js
const express = require('express');
const mysql2 = require('./src/config/mysql2');

const app = express()
const PORT = 4000

// open mysql2 connection
mysql2.sequelize.sync().then(() => {
  console.log("Synced db.");
}).catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app