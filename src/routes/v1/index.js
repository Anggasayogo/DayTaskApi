// Import express
import { Router } from "express"; 
import Products from "./products.route.js"
// Init express router
const router = Router();
 
// Route get semua product
router.use('/products', Products);
 
// export router
export default router;