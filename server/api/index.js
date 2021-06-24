const router = require("express").Router();
const {
  countCharacters,
  countWords,
  countSentences,
  countParagraphs,
  countUniqueBigrams,
} = require("../utility");

// Character Count
router.post("/characterCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let charCount = countCharacters(text);
      res.send({ count: charCount });
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
router.post("/wordCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let wordCount = countWords(text);
      res.send({ count: wordCount });
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please include text in the body in order to get the word count.");
  }
});

// Sentence Count
router.post("/sentenceCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let sentenceCount = countSentences(text);
      res.send({ count: sentenceCount });
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Please include text in the body in order to get the sentence count.");
  }
});

// Paragraph Count
router.post("/paragraphCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let paragraphCount = countParagraphs(text);
      res.send({ count: paragraphCount });
    } catch (error) {
      next(error);
    }
  } else {
    res.send(
      "Please include text in the body in order to get the paragraph count."
    );
  }
});

// Unique Bigrams Count
router.post("/uniqueBigramsCount", (req, res, next) => {
  if (req.body) {
    try {
      let { text } = req.body;
      let uniqueBigramsCount = countUniqueBigrams(text);
      res.send({ count: uniqueBigramsCount });
    } catch (error) {
      next(error);
    }
  } else {
    res.send(
      "Please include text in the body in order to get the unique bigrams count."
    );
  }
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
