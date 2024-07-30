import {Router} from "express";
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../../api/controller/ProductController.mjs";
const router = Router();

// Route get semua product
router.get('/list', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create product baru
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);


export default router