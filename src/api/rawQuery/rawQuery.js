export const getTaskByUserId = (id) => {
  return (
    "SELECT task.id, task.task_name,"+ 
    "task.task_progres, task.task_date,"+ 
    "task.task_duedate, task.task_docs,"+
    "users.username, users.email, point.point "+
    "FROM `task` INNER JOIN users ON task.id_pic = users.id "+
    "INNER JOIN point ON task.id_point = point.id_point "+
    "WHERE task.id_pic = " +
    id
  );
};
