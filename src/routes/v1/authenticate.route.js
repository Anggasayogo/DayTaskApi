import {Router} from "express";
import { login, register, getUsersList, test, updateProfile, changePassword } from "../../api/controller/AutenticateController.js";
import verifyToken from "../../api/middleware/authMiddleware.js";
import { upload } from "../../config/storage.js";
const router = Router();

router.post('/login', login)
router.get('/test', test)
router.get('/user/list', verifyToken, getUsersList)
router.put('/user/update/:id', verifyToken, upload.single('avatar') , updateProfile)
router.post('/user/changge-pwd/:id', verifyToken, changePassword)

export default router