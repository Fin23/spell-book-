const mongoose = require("mongoose");

const PurseSchema = new mongoose.Schema({
  platinum: {
    type: Number,
    required: true,
  },
  gold: {
    type: Number,
    required: true,
  },
  silver: {
    type: Number,
    required: true,
  },
  copper: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
 
});

module.exports = mongoose.model("Purse", PurseSchema);
