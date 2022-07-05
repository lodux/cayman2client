const router = require("express").Router();
const Chiamate = require("../models/Chiamate");
const Registro=require("../models/Registro")

//registraare chiamata
router.post("/registra-chiamata", async (req, res) => {
    try {

      //create new call
      const newCall = new Chiamate({
        nome: req.body.nome,
        cognome: req.body.cognome,
        ntel: req.body.ntel,
        day: req.body.day,
        hour: req.body.hour,
      });
  
      //save user and respond
      const call = await newCall.save();
      res.status(200).json(call);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  

//ottenere registro chiamate

router.get("/ottieni-chiamate", async (req, res) => {
    try {
      const currentCall=await Chiamate.find().sort({ day : 1 ,hour:1})
      res.status(200).json(currentCall);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//remove call
router.delete("/:id", async (req, res) => {
    try {
      const call = await Chiamate.findById(req.params.id);
        await call.deleteOne();
        res.status(200).json("the post has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
});

//salva chiamata nel registro 
router.post("/registro", async (req, res) => {
  try {

    //create new call
    const newCall = new Registro({
      nome: req.body.nome,
      cognome: req.body.cognome,
      ntel: req.body.ntel,
      day: req.body.day,
      hour: req.body.hour,
    });

    //save user and respond
    const call = await newCall.save();
    res.status(200).json(call);
  } catch (err) {
    res.status(500).json(err)
  }
});


//show registro
router.get("/ottieni-registro", async (req, res) => {
  try {
    const All=await Registro.find().sort({day: 1})
    res.status(200).json(All);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;