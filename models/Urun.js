const mongoose = require('mongoose');

const urunSchema = new mongoose.Schema({
  adi: { type: String, required: true },
  kategori: { type: String },
  stokMiktari: { type: Number, default: 0 },
  fiyat: { type: Number, required: true },
  satisFiyati: { type: Number, required: true },
  aciklama: { type: String }
});

module.exports = mongoose.model('Urun', urunSchema);
