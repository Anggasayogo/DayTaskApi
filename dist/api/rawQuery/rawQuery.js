"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskByUserId = exports.getTaskByTaskId = exports.getRankListQuery = void 0;
var getTaskByUserId = exports.getTaskByUserId = function getTaskByUserId(id) {
  return "\n    SELECT \n      task.id, \n      task.task_name, \n      task.task_progres, \n      task.task_date, \n      task.task_duedate, \n      task.task_docs, \n      users.username, \n      users.email, \n      point.point,\n      priority.priority_name as priority\n    FROM task\n    INNER JOIN users ON task.id_pic = users.id\n    INNER JOIN point ON task.id_point = point.id_point\n    INNER JOIN priority ON task.priority_id = priority.id_priority\n    WHERE task.id_pic = ".concat(id, "\n  ");
};
var getTaskByTaskId = exports.getTaskByTaskId = function getTaskByTaskId(id) {
  return "SELECT task.id, task.task_name," + "task.task_progres, task.task_date," + "task.task_duedate, task.task_docs," + "users.username, users.email, point.point, " + "priority.priority_name as priority " + "FROM `task` INNER JOIN users ON task.id_pic = users.id " + "INNER JOIN point ON task.id_point = point.id_point " + "INNER JOIN priority ON task.priority_id = priority.id_priority " + "WHERE task.id = " + id;
};
var getRankListQuery = exports.getRankListQuery = function getRankListQuery() {
  return "WITH total_points AS ( " + "SELECT " + "u.id AS user_id," + "u.username AS username," + "SUM(p.point) AS total_point," + "RANK() OVER (ORDER BY SUM(p.point) DESC) AS ranking " + "FROM " + "users u " + "JOIN " + "task t ON u.id = t.id_pic " + "JOIN " + "point p ON t.id_point = p.id_point " + "WHERE " + "t.task_progres = 'success' " + "GROUP BY " + "u.id, u.username " + ") " + "SELECT " + "user_id," + "username," + "total_point," + "ranking " + "FROM " + "total_points " + "WHERE " + "ranking BETWEEN 1 AND 10 " + "ORDER BY " + "ranking;";
};