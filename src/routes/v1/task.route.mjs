import {Router} from "express";
import {
    updateTask,
    destroyTask,
    getTaskList,
    getTaskById,
    getTaskListByUserId,
    createNassignTask
} from '../../api/controller/TaskController.mjs'
const router = Router();

router.get('/list', getTaskList)
router.get('/detail/:id', getTaskById)
router.get('/user/list/:id', getTaskListByUserId)
router.post('/create', createNassignTask)
router.delete('/destroy/:id', destroyTask)
router.put('/update', updateTask)

export default router