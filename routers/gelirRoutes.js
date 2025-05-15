const express = require('express');
const { getGelir, addGelir, updateGelir, deleteGelir } = require('../controllers/gelirController');

const router = express.Router();

// Gelir-Gider listeleme
router.get('/',getGelir );

// Gelir-Gider ekleme
router.post('/',addGelir);

// Gelir-Gider güncelleme
router.put('/:id',updateGelir);

// Gelir-Gider silme
router.delete('/:id',deleteGelir);

module.exports = router;
