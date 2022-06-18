import express from "express";
const router = express.Router();
const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

console.log(30)
module.exports = router;