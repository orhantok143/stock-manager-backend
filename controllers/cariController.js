const Cari = require("../models/cari");

class CariCrtl {
    static AddCari = async (req, res) => {
      const yeniCari = new Cari(req.body);
   
      try {
        const savedCari = await yeniCari.save();
        res.json(savedCari);
      } catch (err) {
        res.status(400).send(err);
      }
    }

    static getCari = async (req, res) => {
      try {
        const cariler = await Cari.find()
        res.json(cariler);
      } catch (err) {
        res.status(400).send(err);
      }
    }

    static updateCari =  async (req, res) => {
      console.log(req.params);
      
      try {
        const updatedCari = await Cari.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCari);
      } catch (err) {
        res.status(400).send(err);
      }
    }

    static deleteCari = async (req, res) => {
  try {
    const deletedCari = await Cari.findByIdAndDelete(req.params.id);
    res.json({ message: "Cari silindi", deletedCari });
  } catch (err) {
    res.status(400).send(err);
  }
}
}



module.exports = CariCrtl