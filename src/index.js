import db from "./config/database.js";
import { envStation } from "./config/envoirmentStation.js";
import app from "./config/express.js";

// Define an async function to handle the setup
async function startServer() {
    // Testing database connection 
    try {
        await db.authenticate();
        console.log('🐋 Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return; // Exit if the connection fails
    }
    
    // Listen on port
    const port = envStation?.APP_PORT || 5001; // Default to 5001 if APP_PORT is not set
    app.listen(port, '0.0.0.0', () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

// Start the server
startServer();
