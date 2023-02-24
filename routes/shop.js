const path = require('path');

const express = require('express');

const rootDir = require('../controllers/products');


const router = express.Router();

router.get('/',rootDir.shopcontrollers );

module.exports=router;
