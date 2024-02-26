// Import model Product
import Task from "../models/Task.model.js";
 
// Get semua product
export const getTaskById = async (req, res) => {
    try {
        const taskList = await Task.findAll();
        res.send(taskList);
    } catch (err) {
        console.log(err);
    }
}
 