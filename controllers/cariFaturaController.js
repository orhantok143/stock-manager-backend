const CariFatura = require("../models/cariFaturaModel")

class CariFaturaCrtl {
  static addCariFatura = async (req, res) => {
    console.log(req.body);
    
    const { cari,faturaTuru,tutar,aciklama,tarih } =
      req.body;
    const yeniCariFatura = new CariFatura({
      cari,
      faturaTuru,
      tutar,
      tarih,
      aciklama,
    });
    try {
      const savedCariFatura = await yeniCariFatura.save();
      res.json(savedCariFatura);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static getCariFatura = async (req, res) => {
    try {
      const CariFaturaler = await CariFatura.find();
      res.json(CariFaturaler);
    } catch (err) {
      res.status(400).send(err);
    }
  };
  static updateCariFatura = async (req, res) => {
    try {
      const updatedCariFatura = await CariFatura.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedCariFatura);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static deleteCariFatura = async (req, res) => {
    try {
      const deletedCariFatura = await CariFatura.findByIdAndDelete(req.params.id);
      res.json({ message: "Ürün silindi", deletedCariFatura });
    } catch (err) {
      res.status(400).send(err);
    }
  };
}


module.exports = CariFaturaCrtl