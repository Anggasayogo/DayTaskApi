// import sequelize
import sqlize from "sequelize";
import { envStation } from "./envoirmentStation.js";

// create connection
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
 
// export connection
export default db;