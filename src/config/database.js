// import sequelize
import sqlize from "sequelize";
 
// create connection
const db = new sqlize.Sequelize('todaytask', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;