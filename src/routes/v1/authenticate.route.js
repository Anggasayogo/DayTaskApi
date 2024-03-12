import {Router} from "express";
import { login, register, getUsersList } from "../../api/controller/AutenticateController.js";
import verifyToken from "../../api/middleware/authMiddleware.js";
const router = Router();

router.post('/register', register)
router.post('/login', login)
router.get('/user/list', verifyToken, getUsersList)

export default router