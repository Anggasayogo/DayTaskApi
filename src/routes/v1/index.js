// Import express
import { Router } from "express"; 
import Products from "./products.route.js"
import Authenticate from "./authenticate.route.js"
import verifyToken from "../../api/middleware/authMiddleware.js";
// Init express router
const router = Router();
 
// Route get semua product
router.use('/auth', Authenticate);
router.use('/products', verifyToken, Products);
 
// export router
export default router;