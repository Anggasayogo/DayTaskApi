import {Router} from "express";
import { getRankList, getPointList } from "../../api/controller/PointController.js";
const router = Router();

router.get('/rank', getRankList)
router.get('/list', getPointList)

export default router;