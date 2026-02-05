import {Router} from "express";
import {
    updateTask,
    destroyTask,
    getTaskList,
    getTaskById,
    getTaskListByUserId,
    createNassignTask,
    downloadReport
} from '../../api/controller/TaskController.js'
import { upload } from "../../config/storage.js";
const router = Router();

router.get('/list', getTaskList)
router.get('/detail/:id', getTaskById)
router.get('/user/list', getTaskListByUserId)
router.post('/create', upload.single('task_file'), createNassignTask)
router.delete('/destroy/:id', destroyTask)
router.put('/update', updateTask)
router.get('/download-report', downloadReport)

export default router