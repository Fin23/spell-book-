const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

const Story = require("../models/Story");
const Purse = require("../models/Purse");

//show add page
// get /stories/add

router.get("/add", ensureAuth, async (req, res) => {
  try {
    const purse = await Purse.find({
      // platinum: Number,
      user: req.user.id,
    }).lean();
    res.render("stories/add.hbs", {
      name: req.user.firstName,
      purse,
    });
  } catch (error) {
    console.error(error);
    res.render("error/500");
  }
});

//Process add form
// route : POST /stories
router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Story.create(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

router.get("/", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ status: "public" })
      .populate("user")
      .sort({ createdAt: "desc" })
      .lean();
    const purse = await Purse.find({
      // platinum: Number,
      user: req.user.id,
    }).lean();

    res.render("stories/storyIndex", {
      name: req.user.firstName,
      // gold: req.user.gold,
      purse,
      stories,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

// show single story
// GET /stories/:id
router.get("/:id", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).populate("user").lean();
    const purse = await Purse.find({
      // platinum: Number,
      user: req.user.id,
    }).lean();
    if (!story) {
      return res.render("error/404");
    }
    res.render("stories/show", {
      name: req.user.firstName,
      story,
      purse,
    });
  } catch (error) {
    console.error(error);
    res.render("error/404");
  }
});

//show edit page
// GET /stories/edi/:id
router.get("/edit/:id", ensureAuth, async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.id,
    }).lean();
    const purse = await Purse.find({
      // platinum: Number,
      user: req.user.id,
    }).lean();
    // console.log(story);

    if (!story) {
      return res.render("error/404");
    }

    if (story.user != req.user.id) {
      res.redirect("/stories");
    } else {
      res.render("stories/edit", {
        name: req.user.firstName,
        story,
        purse,
      });
    }
  } catch (error) {
    console.error(err);
    return res.render("error/500");
  }
});

// update story
// PUT /stories/:id

router.put("/:id", ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).lean();

    if (!story) {
      return res.render("error/404");
    }

    if (story.user != req.user.id) {
      res.redirect("/stories");
    } else {
      story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
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

// delete story
// DELETE /stories/:id

router.delete("/:id", ensureAuth, async (req, res) => {
  try {
    await Story.remove({ _id: req.params.id });
    res.redirect("/dashboard");
  } catch (error) {
    console.error(err);
    return res.render("error/500");
  }
});

// user stories
// GET /stories/user/:userId

router.get("/user/:userId", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.params.userId,
      status: "public",
    })
      .populate("user")
      .lean();
    const purse = await Purse.find({
      // platinum: Number,
      user: req.user.id,
    }).lean();

    res.render("stories/storyIndex", {
      name: req.user.firstName,
      stories,
      purse,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;
