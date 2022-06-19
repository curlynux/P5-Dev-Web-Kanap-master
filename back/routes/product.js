const express = require("express");
const router = express.Router();
const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);
module.exports = router;

var data = url => console.log(url);
data("http://127.0.0.1:5500/front/html/product.html?id=42");