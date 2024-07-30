import {Router} from "express";
import { getRankList } from "../../api/controller/PointController.js";
const router = Router();

router.get('/rank', getRankList)

export default router;