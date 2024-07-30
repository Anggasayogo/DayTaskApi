// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.mjs";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Point = db.define('point', {
  // Define attributes
  point: {
    type: DataTypes.INTEGER
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Point
export default Point;