// Import model Product
import { QueryTypes } from "sequelize";
import db from "../../config/database.js";
import Task from "../models/Task.model.js";
import { getTaskByTaskId, getTaskByUserId } from "../rawQuery/rawQuery.js";

// Get semua product
export const getTaskList = async (req, res) => {
  try {
    const taskList = await Task.findAll();
    res.status(200).json({
      status: "successfuly",
      data: taskList,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed Load task",
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const product = await db.query(getTaskByTaskId(req.params.id), {
      type: QueryTypes.SELECT,
    });

    if (product?.length > 0) {
      res.status(200).json({
        error: "Task id not found",
        data: product[0],
      });
    } else {
      res.status(404).json({
        error: "Task id not found",
        data: null,
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
    const product = await db.query(getTaskByUserId(req.params.id), {
      type: QueryTypes.SELECT,
    });
    if (product?.length > 0) {
      res.status(200).json({
        status: "success",
        data: product,
      });
    } else {
      res.status(404).json({
        status: "user id not be found",
        data: [],
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

    if (
      (id_point,
      task_name,
      task_progres,
      task_date,
      task_duedate,
      task_docs,
      id_pic,
      id_svp)
    ) {
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

      const task = new Task(newTaskData);
      await task.save();
      res
        .status(201)
        .json({ message: "Task created successfully", data: newTaskData });
    } else {
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


export const destroyTask = async (req,res) => {
  try {
    const taskDestroyed = await Task.destroy({
      where: {
        id: req.params.id
      }
    })
    if(taskDestroyed === 1){
      res.status(200).json({
        status: "Success destroying task",
      });
    }else{
      res.status(400).json({
        status: "failed destroying task",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error when deleting task",
    });
  }
}


export const updateTask = async (req,res) => {
  try {
    const {
      id_task,
      id_point,
      task_name,
      task_progres,
      task_date,
      task_duedate,
      task_docs,
      id_pic,
      id_svp,
    } = req.body;

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

    const taskUpdated = await Task.update(newTaskData, {
      where: {
        id: id_task
      }
    });
    
    if(taskUpdated?.[0] === 1){
      res
        .status(201)
        .json({ message: "Task updated successfully", data: newTaskData });
    }else{
      res.status(400).json({
        status: "failed updating task",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error when updating task",
    });
  }
}
