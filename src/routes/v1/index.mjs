// Import express
import { Router } from "express"; 
import Task from "./task.route.js"
import Point from "./point.route.js"
import Products from "./products.route.js"
import Authenticate from "./authenticate.route.js"
import verifyToken from "../../api/middleware/authMiddleware.mjs"
// Init express router
const router = Router();
 
// Route get semua product
router.use('/auth', Authenticate);
router.use('/products', verifyToken, Products);
router.use('/task', verifyToken, Task);
router.use('/point', verifyToken, Point);
 
// export router
export default router;