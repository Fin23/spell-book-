const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const Story = require("../models/Story");
const Purse = require("../models/Purse");
const Character = require("../models/Character");
//login landing page

//passing ensureGuest and ensureAuth in as arguments in the function coming from middleware, ...passport
router.get("/", ensureGuest, (req, res) => {
  res.render("login.hbs", {
    layout: "login",
  });
});

//dashboard
//route get /
router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.user.id,
    }).lean();
    const purse = await Purse.find({
      // platinum: Number,
      user: req.user.id,
    }).lean();
    res.render("dashboard.hbs", {
      name: req.user.firstName,
      purse,
      stories,
    });
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }

  // console.log(req.user);
});

router.get("/home", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.user.id,
    }).lean();
    const purse = await Purse.find({
      user: req.user.id,
      // platinum: Number,
    }).lean();
    res.render("index.hbs", {
      layout: "index",
      name: req.user.firstName,
      stories,
      purse,
    });
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }
});

router.get("/conditions", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.user.id,
    }).lean();
    const purse = await Purse.find({
      user: req.user.id,
    }).lean();
    res.render("conditions.hbs", {
      layout: "conditions",
      name: req.user.firstName,
      stories,
      purse,
    });
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }
});

router.get("/character", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.user.id,
    }).lean();

    const purse = await Purse.find({
      user: req.user.id,
    }).lean();
    const character = await Character.find({
      user: req.user.id,
    });
    res.render("character.hbs", {
      layout: "character",
      name: req.user.firstName,
      stories,
      purse,
    });
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }
});

router.get("/marketPlace", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.user.id,
    }).lean();
    const purse = await Purse.find({
      user: req.user.id,
      // platinum: Number,
    }).lean();
    res.render("marketPlace.hbs", {
      layout: "marketPlace",
      name: req.user.firstName,
      stories,
      purse,
    });
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }
});

router.get("/journal", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.user.id,
    }).lean();
    const purse = await Purse.find({
      user: req.user.id,
    }).lean();
    res.render("journal.hbs", {
      layout: "journal",
      name: req.user.firstName,
      purse,
      stories,
    });
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }

  // console.log(req.user);
});

module.exports = router;
