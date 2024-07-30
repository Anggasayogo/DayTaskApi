import serverless from 'serverless-http';
import db from "../src/config/database.mjs";
import app from "../src/config/express.mjs";

// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports.handler = serverless(app);