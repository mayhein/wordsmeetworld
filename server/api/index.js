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
    res.send(
      "Please include text in the request body in order to get the character count."
    );
  }
});

// Word Count
router.get("/wordCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let wordCount = countWords(text);
      res.send(`Word Count: ${wordCount}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please include text in the body in order to get the word count.");
  }
});

// Paragraph Count
router.get("/paragraphCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let paragraphCount = countParagraphs(text);
      res.send(`Paragraph Count: ${paragraphCount}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please include text in the body in order to get the paragraph count.");
  }
});

// Unique Bigrams Count
router.get("/uniqueBigramsCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let uniqueBigramsCount = countUniqueBigrams(text);
      res.send(`Unique Bigrams Count: ${uniqueBigramsCount}`);
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please include text in the body in order to get the unique bigrams count.");
  }
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
