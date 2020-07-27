const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const Purse = require("../models/Purse");
const Story = require("../models/Story");

router.get("/addMoney", ensureAuth, (req, res) => {
  res.render("stories/addMoney.hbs");
});

router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Purse.create(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//show edit page
// GET /stories/edi/:id
router.get("/editMoney/:id", ensureAuth, async (req, res) => {
  try {
    const purse = await Purse.findOne({
      _id: req.params.id,
    }).lean();
    // const story = await Story.findOne({
    //   _id: req.params.id,
    // }).lean();
    // console.log(story);
    if (!purse) {
      return res.render("error/404");
    }
    if (purse.user != req.user.id) {
      res.redirect("/stories");
    } else {
      res.render("stories/editMoney", {
        purse,
      });
    }
  } catch (error) {
    console.error(error);
    return res.render("error/500");
  }
});

/// delete money
// DELETE /purse/:id

// router.delete("/:id", ensureAuth, async (req, res) => {
//   try {
//     await Story.remove({ _id: req.params.id });
//     res.redirect("/dashboard");
//   } catch (error) {
//     console.error(err);
//     return res.render("error/500");
//   }
// });

// update story
// PUT /stories/:id

router.put("/:id", ensureAuth, async (req, res) => {
  try {
    let purse = await Purse.findById(req.params.id).lean();

    if (!purse) {
      return res.render("error/404");
    }

    if (purse.user != req.user.id) {
      res.redirect("/stories");
    } else {
      purse = await Purse.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      });
      res.redirect("/dashboard");
    }
  } catch (error) {
    console.error(err);
    return res.render("error/500");
  }
});

module.exports = router;
