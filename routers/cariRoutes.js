const express = require('express');
const Cari = require("../models/cari");
const { AddCari, getCari, updateCari, deleteCari } = require('../controllers/cariController');
const router = express.Router();

// Cari listeleme
router.get('/', getCari);

// Cari ekleme
router.post('/', AddCari);

// Cari güncelleme
router.put('/:id',updateCari );

// Cari silme
router.delete('/:id', deleteCari);


module.exports = router;
