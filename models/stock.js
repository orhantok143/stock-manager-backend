// model: Stok.js
const mongoose = require("mongoose");

const StokSchema = new mongoose.Schema({
  isim: String,
  adet: Number,
  tutar: Number,

});

module.exports = mongoose.model("Stok", StokSchema);
