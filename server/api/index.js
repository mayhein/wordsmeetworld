const router = require("express").Router();
const {
  countCharacters,
  countWords,
  countParagraphs,
  countUniqueBigrams,
} = require("../utility");

// Character Count
router.get("/characterCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let charCount = countCharacters(text);
      res.send(`Character Count: ${charCount}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please provide text in the body.");
  }
});

// Word Count
router.get("/wordCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let wordCount = wordCount(text);
      res.send(`Character Count: ${charCount}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please provide text in the body.");
  }
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
