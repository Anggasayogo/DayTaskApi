// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Reward = db.define('reward', {
  // Define attributes
  reward_name: {
    type: DataTypes.STRING
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Reward
export default Reward;