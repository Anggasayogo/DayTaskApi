export const filterTaskByUserId = (id, startDate, endDate) => {
  return `
    SELECT 
      task.id, 
      task.task_name, 
      task.task_progres, 
      task.task_date, 
      task.task_duedate, 
      task.task_progres,
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

export const getTaskByUserId = (id, priority, task_progres, dateTime, keyword, type) => {
  // Jika type adalah 'all', tidak tambahkan kondisi WHERE berdasarkan id
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
  `;

  // Tambahkan kondisi WHERE berdasarkan id hanya jika type bukan 'all'
  if (type !== 'all') {
    query += ` WHERE task.id_pic = ${id}`;
  }

  // Tambahkan filter priority jika diberikan
  if (priority) {
    query += `${type !== 'all' ? ' AND' : ' WHERE'} priority.priority_name = '${priority}'`;
  }

  // Tambahkan filter task_progres jika diberikan
  if (task_progres) {
    query += `${type !== 'all' || priority ? ' AND' : ' WHERE'} task.task_progres = '${task_progres}'`;
  }

  // Tambahkan filter dateTime jika diberikan
  if (dateTime) {
    query += `${type !== 'all' || priority || task_progres ? ' AND' : ' WHERE'} DATE(task.task_date) = '${dateTime}'`;
  }

  // Tambahkan filter keyword jika diberikan
  if (keyword) {
    query += `${
      type !== 'all' || priority || task_progres || dateTime ? ' AND' : ' WHERE'
    } (task.task_name LIKE '%${keyword}%' OR task.task_docs LIKE '%${keyword}%')`;
  }

  query += ' ORDER BY task.createdAt DESC';

  return query;
};



export const getTaskByTaskId = (id) => {
  let query =
    "SELECT task.id, task.task_name, " +
    "task.id_pic, task.id_svp, point.id_point, " +
    "task.task_progres, task.task_date, " +
    "task.task_duedate, task.task_docs,  task.feedback, " +
    "users.username, users.email, point.point, " +
    "priority.priority_name as priority " +
    "FROM `task` " +
    "INNER JOIN users ON task.id_pic = users.id " +
    "INNER JOIN point ON task.id_point = point.id_point " +
    "INNER JOIN priority ON task.priority_id = priority.id_priority " +
    "WHERE task.id = " + id;

  return query;
};

export const getRewardById = () => {
  return `
    SELECT *
    FROM reward
    WHERE id_reward = :id
  `;
};

export const getRewardList = () => {
  return `
    SELECT *
    FROM reward
  `;
};

export const createRewardQuery = () => {
    return `INSERT INTO reward (id_reward, title, reward_name, voucher_code, created_at, updated_at) 
            VALUES (:id_reward, :title, :reward_name, :voucher_code, NOW(), NOW())`;
};

export const updateRewardQuery = () => {
    return `UPDATE reward 
            SET title = :title, reward_name = :reward_name, voucher_code = :voucher_code, updated_at = NOW() 
            WHERE id_reward = :id`;
};

export const deleteRewardQuery = () => {
    return `DELETE FROM reward WHERE id_reward = :id`;
};

export const getRankListQuery = () => {
  return (
    "WITH total_points AS ( "+
      "SELECT "+
          "u.id AS user_id,"+
          "u.username AS username,"+
          "u.avatar AS avatar,"+
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
      "avatar," +
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
