const router = require('express').Router()
const { characterCount } = require('../utility');

// Character Count
router.get("/characterCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let charCount = characterCount(text);
      res.send(`Character Count: ${charCount}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please provide text in the body.")
  }
});

// Word Count
router.get("/wordCount", (req, res, next) => {
  res.send("Hi, I'm wordCount")
});

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router;
