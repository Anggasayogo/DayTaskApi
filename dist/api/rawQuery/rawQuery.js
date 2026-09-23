"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRewardQuery = exports.getTaskByUserId = exports.getTaskByTaskId = exports.getRewardList = exports.getRewardById = exports.getRankListQuery = exports.filterTaskByUserId = exports.deleteRewardQuery = exports.createRewardQuery = void 0;
var filterTaskByUserId = exports.filterTaskByUserId = function filterTaskByUserId(id, startDate, endDate) {
  return "\n    SELECT \n      task.id, \n      task.task_name, \n      task.task_progres, \n      task.task_date, \n      task.task_duedate, \n      task.task_progres,\n      task.task_docs, \n      users.username, \n      users.email, \n      point.point,\n      priority.priority_name as priority\n    FROM task\n    INNER JOIN users ON task.id_pic = users.id\n    INNER JOIN point ON task.id_point = point.id_point\n    INNER JOIN priority ON task.priority_id = priority.id_priority\n    WHERE task.id_pic = ".concat(id, "\n    ").concat(startDate && endDate ? "AND task.task_date BETWEEN '".concat(startDate, "' AND '").concat(endDate, "'") : "", "\n  ");
};

// export const getTaskByUserId = (id, priority, task_progres, dateTime, keyword, type) => {
//   let query = `
//     SELECT 
//       task.id, 
//       task.task_name, 
//       task.task_progres, 
//       task.task_date, 
//       task.task_duedate, 
//       task.task_docs, 
//       users.username, 
//       users.email, 
//       point.point,
//       priority.priority_name as priority
//     FROM task
//     INNER JOIN users ON task.id_pic = users.id
//     INNER JOIN point ON task.id_point = point.id_point
//     INNER JOIN priority ON task.priority_id = priority.id_priority
//     WHERE task.id_pic = ${id}
//   `;

//   if (priority) {
//     query += ` AND priority.priority_name = '${priority}'`;
//   }

//   if(task_progres){
//     query += ` AND task.task_progres = '${task_progres}'`;
//   }

//   if(dateTime){
//     query += ` AND DATE(task.task_date) = '${dateTime}'`;
//   }

//   if (keyword) {
//     query += ` AND (task.task_name LIKE '%${keyword}%' OR task.task_docs LIKE '%${keyword}%')`;
//   }

//   return query;
// };

var getTaskByUserId = exports.getTaskByUserId = function getTaskByUserId(id, priority, task_progres, dateTime, keyword, type) {
  // Jika type adalah 'all', tidak tambahkan kondisi WHERE berdasarkan id
  var query = "\n    SELECT \n      task.id, \n      task.task_name, \n      task.task_progres, \n      task.task_date, \n      task.task_duedate, \n      task.task_docs, \n      users.username, \n      users.email, \n      point.point,\n      priority.priority_name as priority\n    FROM task\n    INNER JOIN users ON task.id_pic = users.id\n    INNER JOIN point ON task.id_point = point.id_point\n    INNER JOIN priority ON task.priority_id = priority.id_priority\n  ";

  // Tambahkan kondisi WHERE berdasarkan id hanya jika type bukan 'all'
  if (type !== 'all') {
    query += " WHERE task.id_pic = ".concat(id);
  }

  // Tambahkan filter priority jika diberikan
  if (priority) {
    query += "".concat(type !== 'all' ? ' AND' : ' WHERE', " priority.priority_name = '").concat(priority, "'");
  }

  // Tambahkan filter task_progres jika diberikan
  if (task_progres) {
    query += "".concat(type !== 'all' || priority ? ' AND' : ' WHERE', " task.task_progres = '").concat(task_progres, "'");
  }

  // Tambahkan filter dateTime jika diberikan
  if (dateTime) {
    query += "".concat(type !== 'all' || priority || task_progres ? ' AND' : ' WHERE', " DATE(task.task_date) = '").concat(dateTime, "'");
  }

  // Tambahkan filter keyword jika diberikan
  if (keyword) {
    query += "".concat(type !== 'all' || priority || task_progres || dateTime ? ' AND' : ' WHERE', " (task.task_name LIKE '%").concat(keyword, "%' OR task.task_docs LIKE '%").concat(keyword, "%')");
  }
  query += ' ORDER BY task.createdAt DESC';
  return query;
};
var getTaskByTaskId = exports.getTaskByTaskId = function getTaskByTaskId(id) {
  // let query =
  //   "SELECT task.id, task.task_name, " +
  //   "task.id_pic, task.id_svp, point.id_point, " +
  //   "task.task_progres, task.task_date, " +
  //   "task.task_duedate, task.task_docs,  task.feedback, " +
  //   "users.username, users.email, point.point, " +
  //   "priority.priority_name as priority " +
  //   "FROM `task` " +
  //   "INNER JOIN users ON task.id_pic = users.id " +
  //   "INNER JOIN point ON task.id_point = point.id_point " +
  //   "INNER JOIN priority ON task.priority_id = priority.id_priority " +
  //   "WHERE task.id = " + id;

  var query = "SELECT " + "task.id, " + "task.task_name, " + "task.task_progres, " + "task.task_date, " + "task.task_duedate, " + "task.task_docs, " + "task.feedback, " + "task.id_pic, " + "pic.username as username, " + "task.id_svp, " + "svp.username as svp_name, " +
  // Nama Pemberi (SVP)
  "pic.email as email, " + "point.id_point, " + "point.point, " + "priority.priority_name as priority " + "FROM `task` " + "INNER JOIN users as pic ON task.id_pic = pic.id " +
  // Alias pic
  "LEFT JOIN users as svp ON task.id_svp = svp.id " +
  // Alias svp (pakai LEFT JOIN agar aman jika SVP kosong)
  "INNER JOIN point ON task.id_point = point.id_point " + "INNER JOIN priority ON task.priority_id = priority.id_priority " + "WHERE task.id = " + id;
  return query;
};
var getRewardById = exports.getRewardById = function getRewardById() {
  return "\n    SELECT *\n    FROM reward\n    WHERE id_reward = :id\n  ";
};
var getRewardList = exports.getRewardList = function getRewardList() {
  return "\n    SELECT *\n    FROM reward\n  ";
};
var createRewardQuery = exports.createRewardQuery = function createRewardQuery() {
  return "INSERT INTO reward (id_reward, title, reward_name, voucher_code, created_at, updated_at) \n            VALUES (:id_reward, :title, :reward_name, :voucher_code, NOW(), NOW())";
};
var updateRewardQuery = exports.updateRewardQuery = function updateRewardQuery() {
  return "UPDATE reward \n            SET title = :title, reward_name = :reward_name, voucher_code = :voucher_code, updated_at = NOW() \n            WHERE id_reward = :id";
};
var deleteRewardQuery = exports.deleteRewardQuery = function deleteRewardQuery() {
  return "DELETE FROM reward WHERE id_reward = :id";
};
var getRankListQuery = exports.getRankListQuery = function getRankListQuery() {
  return "WITH total_points AS ( " + "SELECT " + "u.id AS user_id," + "u.username AS username," + "u.avatar AS avatar," + "SUM(p.point) AS total_point," + "RANK() OVER (ORDER BY SUM(p.point) DESC) AS ranking " + "FROM " + "users u " + "JOIN " + "task t ON u.id = t.id_pic " + "JOIN " + "point p ON t.id_point = p.id_point " + "WHERE " + "t.task_progres = 'done' " + "GROUP BY " + "u.id, u.username " + ") " + "SELECT " + "user_id," + "username," + "avatar," + "total_point," + "ranking " + "FROM " + "total_points " + "WHERE " + "ranking BETWEEN 1 AND 10 " + "ORDER BY " + "ranking;";
};