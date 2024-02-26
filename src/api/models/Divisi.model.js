// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Divisi = db.define('divisi', {
  // Define attributes
  divisi_name: {
    type: DataTypes.STRING
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Divisi
export default Divisi;