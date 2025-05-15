const express = require('express');
const { getGider, addGider, updateGider, deleteGider } = require('../controllers/giderController');

const router = express.Router();

// Gelir-Gider listeleme
router.get('/',getGider );

// Gelir-Gider ekleme
router.post('/',addGider);

// Gelir-Gider güncelleme
router.put('/:id',updateGider);

// Gelir-Gider silme
router.delete('/:id',deleteGider);

module.exports = router;
