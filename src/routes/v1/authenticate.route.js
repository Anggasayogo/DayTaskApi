import {Router} from "express";
import { login, register, getUsersList, test, updateProfile } from "../../api/controller/AutenticateController.js";
import verifyToken from "../../api/middleware/authMiddleware.js";
import { upload } from "../../config/storage.js";
const router = Router();

router.post('/login', login)
router.get('/test', test)
router.get('/user/list', verifyToken, getUsersList)
router.put('/user/update/:id', verifyToken, upload.single('avatar') , updateProfile)

export default router