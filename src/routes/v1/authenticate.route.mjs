import {Router} from "express";
import { login, register, getUsersList, test } from "../../api/controller/AutenticateController.mjs";
import verifyToken from "../../api/middleware/authMiddleware.mjs";
const router = Router();

router.post('/register', register)
router.post('/login', login)
router.get('/test', test)
router.get('/user/list', verifyToken, getUsersList)

export default router