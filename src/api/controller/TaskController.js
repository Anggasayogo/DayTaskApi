// Import model Product
import Task from "../models/Task.model.js";
 
// Get semua product
export const getTaskList = async (req, res) => {
    try {
        const taskList = await Task.findAll();
        res.send(taskList);
    } catch (err) {
        res.status(500).json({ 
            error: 'Failed Load task' 
        });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const product = await Task.findAll({
            where: {
                id: req.params.id
            }
        });
        if(product?.length > 0){
            res.send(product[0]);
        }else{
            res.status(404).json({ 
                error: 'Task id not found' 
            });
        }
    } catch (err) {
        res.status(500).json({ 
            error: 'Failed Load task by id' 
        });
    }
}


export const getTaskListByUserId = async (req, res) => {
    try {
        const product = await Task.findAll({
            where: {
                id_pic: req.params.id
            }
        });
        if(product?.length > 0){
            res.send(product);
        }else{
            res.status(404).json({ 
                error: 'user id not found' 
            });
        }
    } catch (err) {
        res.status(500).json({ 
            error: 'Failed Load task by user id' 
        });
    }
}


export const createNassignTask = async (req, res) => {
    try {
        console.log(req)
    } catch (error) {
        console.log(err);
    }
}
 