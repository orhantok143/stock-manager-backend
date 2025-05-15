const mongoose = require('mongoose');

const cariSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String },
  phone: { type: String },
  status:{ type: String,enum: ['Borçlu', 'Alacaklı'],default: "Alacaklı" },
  address: { type: String },
  cariTuru: { type: String, enum: ['Müşteri', 'Tedarikçi'],default: "Tedarikçi", required: true },
  bakiye: { type: Number, default: 0 }
});

module.exports = mongoose.model('Cari', cariSchema);
