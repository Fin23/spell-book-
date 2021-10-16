const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  strength: {
    type: String,
    required: true,
    athletics:{type: String, required: true, proficient: String }
  },
  dexterity: {
    type: String,
    required: true,
    acrobatics:{type: String, required: true, proficient: String },
    sleightOfHand:{type: String, required: true, proficient: String },
    stealth:{type: String, required: true, proficient: String }
  },
  constitution: {
    type: String,
    required: true,
    healthBonus:{type: String, required: true, proficient: String }
  },
  intelligence: {
    type: String,
    required: true,
    arcana:{type: String, required: true, proficient: String },
    history:{type: String, required: true, proficient: String },
    investigation:{type: String, required: true, proficient: String },
    nature:{type: String, required: true, proficient: String },
    religion:{type: String, required: true, proficient: String }
  },
  wisdom: {
    type: Date,
    default: Date.now,
    animalHandling:{type: String, required: true, proficient: String },
    insight:{type: String, required: true, proficient: String },
    medicine:{type: String, required: true, proficient: String },
    perception:{type: String, required: true, proficient: String },
    survival:{type: String, require:true, proficient: String}
  },
  charisma: {
    type: String,
    required: true,
    deception:{type: String, required: true, proficient: String },
    intimidation:{type: String, required: true, proficient: String },
    performance:{type: String, required: true, proficient: String }

  },
  image: {
    type: String,
  },
  level: {
    type: String,
  },
  race: {
    type: String,
  },
  class: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Character", CharacterSchema);