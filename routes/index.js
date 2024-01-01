var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hey, my name is Sameera Sameer",
    userName: "Sameera Sameer",
    dateAdded: new Date().toDateString(),
  },
  {
    text: "Hey, my name is Haider Falah",
    userName: "Axis1995",
    dateAdded: new Date().toDateString(),
  },
  {
    text: "Hey, my name is Ameer Hameed",
    userName: "Stan96",
    dateAdded: new Date().toDateString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini-Message Board", messages: messages });
});

// Get Post
router.get("/new", function (req, res, next) {
  res.render("form");
});

// POST New
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.messageText,
    userName: req.body.userName,
    dateAdded: new Date().toDateString(),
  });
  res.redirect("/");
});
module.exports = router;
