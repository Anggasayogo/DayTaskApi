import {Router} from "express";
import { getPrioList } from "../../api/controller/PriorityController.js";
const router = Router();

router.get('/list', getPrioList)

export default router;