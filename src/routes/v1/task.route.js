import {Router} from "express";
import { getTaskById } from "../../api/controller/TaskController";
const router = Router();

router.post('/list', getTaskById)

export default router