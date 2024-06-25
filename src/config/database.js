// import sequelize
import sqlize from "sequelize";
import { envStation } from "./envoirmentStation.js";

// create connection
const db = new sqlize.Sequelize(envStation?.DB_NAME, envStation?.DB_USERNAME, envStation?.DB_PASSWORD, {
    host: envStation?.DB_HOST,
    dialect: envStation?.DB_DIALEC
});
 
// export connection
export default db;