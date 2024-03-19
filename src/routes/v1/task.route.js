import {Router} from "express";
import {
    destroyTask,
    getTaskList,
    getTaskById,
    getTaskListByUserId,
    createNassignTask
} from '../../api/controller/TaskController.js'
const router = Router();

router.get('/list', getTaskList)
router.get('/detail/:id', getTaskById)
router.get('/user/list/:id', getTaskListByUserId)
router.post('/create', createNassignTask)
router.delete('/destroy/:id', destroyTask)

export default router