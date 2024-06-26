export const getTaskByUserId = (id) => {
  return (
    "SELECT task.id, task.task_name," +
    "task.task_progres, task.task_date," +
    "task.task_duedate, task.task_docs," +
    "users.username, users.email, point.point " +
    "FROM `task` INNER JOIN users ON task.id_pic = users.id " +
    "INNER JOIN point ON task.id_point = point.id_point " +
    "WHERE task.id_pic = " +
    id
  );
};

export const getTaskByTaskId = (id) => {
  return (
    "SELECT task.id, task.task_name," +
    "task.task_progres, task.task_date," +
    "task.task_duedate, task.task_docs," +
    "users.username, users.email, point.point " +
    "FROM `task` INNER JOIN users ON task.id_pic = users.id " +
    "INNER JOIN point ON task.id_point = point.id_point " +
    "WHERE task.id = " +
    id
  );
};

export const getRankListQuery = () => {
  return (
    "WITH total_points AS ( "+
      "SELECT "+
          "u.id AS user_id,"+
          "u.username AS username,"+
          "SUM(p.point) AS total_point,"+
          "RANK() OVER (ORDER BY SUM(p.point) DESC) AS ranking "+
      "FROM "+
          "users u "+
      "JOIN "+
          "task t ON u.id = t.id_pic "+
      "JOIN "+
          "point p ON t.id_point = p.id_point "+
      "WHERE "+
        "t.task_progres = 'success' "+
      "GROUP BY "+
          "u.id, u.username "+
  ") " +
  
  "SELECT "+
      "user_id,"+
      "username,"+
      "total_point,"+
      "ranking "+
  "FROM "+
      "total_points "+
  "WHERE "+
      "ranking BETWEEN 1 AND 10 "+
  "ORDER BY "+
      "ranking;" 
  )
}
