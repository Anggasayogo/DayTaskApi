import {Router} from "express";
import { login, register, getUsersList, test, updateProfile } from "../../api/controller/AutenticateController.js";
import verifyToken from "../../api/middleware/authMiddleware.js";
const router = Router();

router.post('/register', register)
router.post('/login', login)
router.get('/test', test)
router.get('/user/list', verifyToken, getUsersList)
router.put('/user/update/:id', verifyToken, updateProfile)

export default router