"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskByUserId = exports.getTaskByTaskId = exports.getRankListQuery = exports.filterTaskByUserId = void 0;
var filterTaskByUserId = exports.filterTaskByUserId = function filterTaskByUserId(id, startDate, endDate) {
  return "\n    SELECT \n      task.id, \n      task.task_name, \n      task.task_progres, \n      task.task_date, \n      task.task_duedate, \n      task.task_docs, \n      users.username, \n      users.email, \n      point.point,\n      priority.priority_name as priority\n    FROM task\n    INNER JOIN users ON task.id_pic = users.id\n    INNER JOIN point ON task.id_point = point.id_point\n    INNER JOIN priority ON task.priority_id = priority.id_priority\n    WHERE task.id_pic = ".concat(id, "\n    ").concat(startDate && endDate ? "AND task.task_date BETWEEN '".concat(startDate, "' AND '").concat(endDate, "'") : "", "\n  ");
};
var getTaskByUserId = exports.getTaskByUserId = function getTaskByUserId(id, priority, task_progres, dateTime, keyword) {
  var query = "\n    SELECT \n      task.id, \n      task.task_name, \n      task.task_progres, \n      task.task_date, \n      task.task_duedate, \n      task.task_docs, \n      users.username, \n      users.email, \n      point.point,\n      priority.priority_name as priority\n    FROM task\n    INNER JOIN users ON task.id_pic = users.id\n    INNER JOIN point ON task.id_point = point.id_point\n    INNER JOIN priority ON task.priority_id = priority.id_priority\n    WHERE task.id_pic = ".concat(id, "\n  ");

  // Tambahkan filter priority jika diberikan
  if (priority) {
    query += " AND priority.priority_name = '".concat(priority, "'");
  }
  if (task_progres) {
    query += " AND task.task_progres = '".concat(task_progres, "'");
  }
  if (dateTime) {
    query += " AND DATE(task.task_date) = '".concat(dateTime, "'");
  }
  if (keyword) {
    query += " AND (task.task_name LIKE '%".concat(keyword, "%' OR task.task_docs LIKE '%").concat(keyword, "%')");
  }
  return query;
};
var getTaskByTaskId = exports.getTaskByTaskId = function getTaskByTaskId(id) {
  var query = "SELECT task.id, task.task_name, " + "task.task_progres, task.task_date, " + "task.task_duedate, task.task_docs, " + "users.username, users.email, point.point, " + "priority.priority_name as priority " + "FROM `task` " + "INNER JOIN users ON task.id_pic = users.id " + "INNER JOIN point ON task.id_point = point.id_point " + "INNER JOIN priority ON task.priority_id = priority.id_priority " + "WHERE task.id = " + id;
  return query;
};
var getRankListQuery = exports.getRankListQuery = function getRankListQuery() {
  return "WITH total_points AS ( " + "SELECT " + "u.id AS user_id," + "u.username AS username," + "SUM(p.point) AS total_point," + "RANK() OVER (ORDER BY SUM(p.point) DESC) AS ranking " + "FROM " + "users u " + "JOIN " + "task t ON u.id = t.id_pic " + "JOIN " + "point p ON t.id_point = p.id_point " + "WHERE " + "t.task_progres = 'done' " + "GROUP BY " + "u.id, u.username " + ") " + "SELECT " + "user_id," + "username," + "total_point," + "ranking " + "FROM " + "total_points " + "WHERE " + "ranking BETWEEN 1 AND 10 " + "ORDER BY " + "ranking;";
};