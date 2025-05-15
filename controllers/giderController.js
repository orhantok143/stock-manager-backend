const Gelir = require("../models/gelir");

class GiderCtrl {
  static addGider = async (req, res) => {
    const { tarih, tutar, aciklama, faturaTuru } = req.body;

    const yeniHareket = new Gelir({
      tarih,
      tutar,
      aciklama,
      faturaTuru,
      tur:"Gider"
    });
    try {
      const savedHareket = await yeniHareket.save();
      console.log(savedHareket);

      res.json(savedHareket);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static getGider = async (req, res) => {
    try {
      const hareketler = await Gelir.find()
      res.json(hareketler);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static updateGider = async (req, res) => {   
    try {
      const updatedHareket = await Gelir.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.json(updatedHareket);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static deleteGider = async (req, res) => {
    try {
      const deletedHareket = await Gelir.findByIdAndDelete(req.params.id);
      res.json({ message: "Gelir hareketi silindi", deletedHareket });
    } catch (err) {
      res.status(400).send(err);
    }
  };
}

module.exports = GiderCtrl;
