const mongoose = require('mongoose');

const gelirSchema = new mongoose.Schema({
  tarih: { type: Date, default: Date.now },
  tutar: { type: Number, required: true },
  aciklama: { type: String },
  faturaTuru: { type: String, required: true },
  tur:{ type: String, enum:["Gider","Gelir"], default:"Gider" },
});

module.exports = mongoose.model('Gelir', gelirSchema);
