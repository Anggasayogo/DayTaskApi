import db from "./src/config/database.js";
import { envStation } from "./src/config/envoirmentStation.js";
import app from "./src/config/express.js";

// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// listen on port
app.listen(envStation?.APP_PORT, () => console.log('Server running at http://localhost:5001'));