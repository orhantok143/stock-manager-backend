const express = require('express');
const Cari = require("../models/cari");
const { getCariFatura, addCariFatura, updateCariFatura, deleteCariFatura } = require('../controllers/cariFaturaController');
const router = express.Router();

// Cari listeleme
router.get('/', getCariFatura);

// Cari ekleme
router.post('/', addCariFatura);

// Cari güncelleme
router.put('/:id',updateCariFatura );

// Cari silme
router.delete('/:id', deleteCariFatura);


module.exports = router;
