// Import express
import { Router } from "express"; 
import Task from "./task.route.mjs"
import Point from "./point.route.mjs"
import Products from "./products.route.mjs"
import Authenticate from "./authenticate.route.mjs"
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