const express = require('express');
const Urun = require('../models/Urun');
const { getUrun, addUrun, updateUrun, deleteUrun } = require('../controllers/urunController');

const router = express.Router();

// Ürün listeleme
router.get('/', getUrun);

// Ürün ekleme
router.post('/',addUrun);

// Ürün güncelleme
router.put('/:id',updateUrun);

// Ürün silme
router.delete('/:id',deleteUrun);

module.exports = router;
