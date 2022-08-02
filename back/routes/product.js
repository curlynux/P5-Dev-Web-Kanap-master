<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

=======
const express = require("express");
const router = express.Router();
const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);
>>>>>>> 06770cf (quantite marche pas)
module.exports = router;