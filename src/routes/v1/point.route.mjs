import {Router} from "express";
import { getRankList } from "../../api/controller/PointController.mjs";
const router = Router();

router.get('/rank', getRankList)

export default router;