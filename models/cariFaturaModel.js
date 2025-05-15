const mongoose = require('mongoose');

const cariFaturaSchema = new mongoose.Schema({
  cari: { type: String, required: true },
  faturaTuru: { type: String, enum: ["Gelir Faturası", "Gider Faturası","Ödeme"],default: "Gider Faturası", required: true },
  tutar: { type: Number, default: 0 },
  aciklama: { type: String },
  tarih: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CariFatura', cariFaturaSchema);
