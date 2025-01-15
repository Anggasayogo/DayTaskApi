import PDFDocument from 'pdfkit';
import { QueryTypes } from "sequelize";
import db from "../../config/database.js";
import Task from "../models/Task.model.js";
import { filterTaskByUserId, getTaskByTaskId, getTaskByUserId } from "../rawQuery/rawQuery.js";

// Get semua product
export const getTaskList = async (req, res) => {
  try {
    const taskList = await Task.findAll();
    res.status(200).json({
      status: true,
      message: "successfuly",
      data: taskList,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed Load task",
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const product = await db.query(getTaskByTaskId(taskId), {
      type: QueryTypes.SELECT,
    });

    if (product?.length > 0) {
      res.status(200).json({
        status: true,
        message: "Success Get Detail Task",
        data: product[0],
      });
    } else {
      res.status(404).json({
        status: false,
        message: "Task id not found",
        data: null,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed Load task by id",
    });
  }
};

export const getTaskListByUserId = async (req, res) => {
  try {
    const { id, priority, task_progres, filterDate, keyword } = req.query;
    const product = await db.query(getTaskByUserId(id, priority, task_progres, filterDate, keyword), {
      type: QueryTypes.SELECT,
    });
    if (product?.length > 0) {
      res.status(200).json({
        status: true,
        message: "success",
        data: product,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "user id not be found",
        data: [],
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed Load task by user id",
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
      id_priority,
    } = req.body;

    if (
      (id_point,
      task_name,
      task_progres,
      task_date,
      task_duedate,
      task_docs,
      id_pic,
      id_svp,
      id_priority)
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
        priority_id: id_priority,
      };

      const task = new Task(newTaskData);
      await task.save();
      res.status(201).json({
        status: true,
        message: "Task created successfully",
        data: newTaskData,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "fields is required",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error when creating task",
    });
  }
};

export const destroyTask = async (req, res) => {
  try {
    const taskDestroyed = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (taskDestroyed === 1) {
      res.status(200).json({
        status: true,
        message: "Success destroying task",
      });
    } else {
      res.status(400).json({
        status: false,
        message: "failed destroying task",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error when deleting task",
    });
  }
};

export const updateTask = async (req, res) => {
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
        id: id_task,
      },
    });

    if (taskUpdated?.[0] === 1) {
      res.status(201).json({
        status: true,
        message: "Task updated successfully",
        data: newTaskData,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "failed updating task",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error when updating task",
    });
  }
};

export const downloadReport = async (req, res) => {
  const { id, start, end } = req.query;
  const tasks = await db.query(filterTaskByUserId(id, start, end), {
    type: QueryTypes.SELECT,
  });

  const doc = new PDFDocument({ size: "A4", margin: 50 });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="task-report.pdf"');
  doc.pipe(res);

  // Header with Title
  doc
    .fontSize(20)
    .font("Helvetica-Bold")
    .text("Task Report", { align: "center" })
    .moveDown(1);

  // User Information
  const user = tasks[0];
  doc
    .fontSize(14)
    .font("Helvetica-Bold")
    .text("User Information", { underline: true })
    .moveDown(0.5)
    .font("Helvetica")
    .fontSize(12)
    .text(`Name: ${user.username}`)
    .text(`Email: ${user.email}`)
    .moveDown(1.5);

  // Task Overview Section
  let totalPoints = 0;
  tasks.forEach((task) => (totalPoints += task.point));

  doc
    .fontSize(14)
    .font("Helvetica-Bold")
    .text("Task Overview", { underline: true })
    .moveDown(0.5)
    .fontSize(12)
    .font("Helvetica")
    .text(`Total Tasks: ${tasks.length}`)
    .text(`Total Points: ${totalPoints}`)
    .moveDown(1.5);

  // Task Details Table Header
  const tableTop = doc.y;
  doc.font("Helvetica-Bold").fontSize(12);

  doc
    .text("ID", 50, tableTop, { width: 50, align: "left" })
    .text("Task Name", 100, tableTop, { width: 200, align: "left" })
    .text("Priority", 300, tableTop, { width: 80, align: "center" })
    .text("Progress", 380, tableTop, { width: 80, align: "center" })
    .text("Points", 460, tableTop, { width: 50, align: "right" });

  doc.moveDown(1);

  // Task Details Table Rows
  doc.font("Helvetica").fontSize(10);
  tasks.forEach((task) => {
    const rowTop = doc.y;
    doc
      .text(task.id, 50, rowTop, { width: 50, align: "left" })
      .text(task.task_name, 100, rowTop, { width: 200, align: "left" })
      .text(task.priority, 300, rowTop, { width: 80, align: "center" })
      .text(task.task_progress, 380, rowTop, { width: 80, align: "center" })
      .text(task.point, 460, rowTop, { width: 50, align: "right" });
    doc.moveDown(0.5);
  });

  doc.moveDown(2);

  // Footer with Generated Date
  doc
    .fontSize(10)
    .font("Helvetica-Oblique")
    .text(
      `Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
      { align: "right" }
    );

  doc.end();
};
