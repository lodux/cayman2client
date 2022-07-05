const mongoose = require("mongoose");

const ChiamateSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      require: true,
      max: 20,
    },
    cognome: {
      type: String,
      required: true,
      min: 6,
    },
    ntel: {
        type: String,
        require: true,
        min: 9,
        max: 20,
      },
    day: {
        type: Date,
        required: true,
      },
    hour: {
        type: String,
        required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chiamate", ChiamateSchema);