export const filterTaskByUserId = (id, startDate, endDate) => {
  return `
    SELECT 
      task.id, 
      task.task_name, 
      task.task_progres, 
      task.task_date, 
      task.task_duedate, 
      task.task_docs, 
      users.username, 
      users.email, 
      point.point,
      priority.priority_name as priority
    FROM task
    INNER JOIN users ON task.id_pic = users.id
    INNER JOIN point ON task.id_point = point.id_point
    INNER JOIN priority ON task.priority_id = priority.id_priority
    WHERE task.id_pic = ${id}
    ${
      startDate && endDate
        ? `AND task.task_date BETWEEN '${startDate}' AND '${endDate}'`
        : ""
    }
  `;
};


export const getTaskByUserId = (id, priority, task_progres, dateTime, keyword) => {
  let query = `
    SELECT 
      task.id, 
      task.task_name, 
      task.task_progres, 
      task.task_date, 
      task.task_duedate, 
      task.task_docs, 
      users.username, 
      users.email, 
      point.point,
      priority.priority_name as priority
    FROM task
    INNER JOIN users ON task.id_pic = users.id
    INNER JOIN point ON task.id_point = point.id_point
    INNER JOIN priority ON task.priority_id = priority.id_priority
    WHERE task.id_pic = ${id}
  `;

  // Tambahkan filter priority jika diberikan
  if (priority) {
    query += ` AND priority.priority_name = '${priority}'`;
  }

  if(task_progres){
    query += ` AND task.task_progres = '${task_progres}'`;
  }

  if(dateTime){
    query += ` AND DATE(task.task_date) = '${dateTime}'`;
  }

  if (keyword) {
    query += ` AND (task.task_name LIKE '%${keyword}%' OR task.task_docs LIKE '%${keyword}%')`;
  }

  return query;
};


export const getTaskByTaskId = (id) => {
  let query =
    "SELECT task.id, task.task_name, " +
    "task.task_progres, task.task_date, " +
    "task.task_duedate, task.task_docs, " +
    "users.username, users.email, point.point, " +
    "priority.priority_name as priority " +
    "FROM `task` " +
    "INNER JOIN users ON task.id_pic = users.id " +
    "INNER JOIN point ON task.id_point = point.id_point " +
    "INNER JOIN priority ON task.priority_id = priority.id_priority " +
    "WHERE task.id = " + id;

  return query;
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
        "t.task_progres = 'done' "+
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
