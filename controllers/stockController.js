const Stok = require("../models/stock");

class Stock {
  static getStock = async (req, res) => {
    try {
      const stoklar = await Stok.find();
      res.json(stoklar);
    } catch (error) {
      res.status(500).json({ error: "Stoklar alınamadı", details: error.message });
    }
  };

  static addStock = async (req, res) => {
    try {
      const yeni = new Stok(req.body);
      console.log(yeni);
      
      await yeni.save();
      res.json(yeni);
    } catch (error) {
      res.status(500).json({ error: "Stok eklenemedi", details: error.message });
    }
  };

  static updateStock = async (req, res) => {
    try {
      const guncel = await Stok.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!guncel) {
        return res.status(404).json({ error: "Stok bulunamadı" });
      }
      res.json(guncel);
    } catch (error) {
      res.status(500).json({ error: "Stok güncellenemedi", details: error.message });
    }
  };

  static deleteStock = async (req, res) => {
    try {
      const deleted = await Stok.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Stok bulunamadı" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Stok silinemedi", details: error.message });
    }
  };
}

module.exports = Stock;
