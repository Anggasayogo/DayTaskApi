// Import model Product
import Task from "../models/Task.model.js";

// Get semua product
export const getTaskList = async (req, res) => {
  try {
    const taskList = await Task.findAll();
    res.send(taskList);
  } catch (err) {
    console.log("HELLO",err)
    res.status(500).json({
      error: "Failed Load task",
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const product = await Task.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (product?.length > 0) {
      res.send(product[0]);
    } else {
      res.status(404).json({
        error: "Task id not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "Failed Load task by id",
    });
  }
};

export const getTaskListByUserId = async (req, res) => {
  try {
    const product = await Task.findAll({
      where: {
        id_pic: req.params.id,
      },
    });
    if (product?.length > 0) {
      res.send(product);
    } else {
      res.status(404).json({
        error: "user id not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "Failed Load task by user id",
    });
  }
};

export const createNassignTask = async (req, res) => {
  try {
    const {
      id_point,
      task_name,
      task_progres,
      task_date,
      task_duedate,
      task_docs,
      id_pic,
      id_svp,
    } = req.body;

    if(id_point,task_name,task_progres,task_date,task_duedate,task_docs,id_pic,id_svp){
        //  create and assign task
        const newTaskData = {
            id_point: id_point,
            task_name: task_name,
            task_progres: task_progres,
            task_date: new Date(task_date),
            task_duedate: new Date(task_duedate),
            task_docs: task_docs,
            id_pic: id_pic,
            id_svp: id_svp,
        };
        
        const task = new Task(newTaskData)
        await task.save();
        res.status(201).json({ message: 'Task created successfully', data: newTaskData });
    }else{
        res.status(400).json({
          error: "fields is required",
        });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error when creating task",
    });
  }
};
