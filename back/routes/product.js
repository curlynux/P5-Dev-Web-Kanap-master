const express = require("express");
const router = express.Router();
const productCtrl = require('../controllers/product');
const data = require("../../front/js/script");

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

console.log(30);
console.log(data);
module.exports = router;