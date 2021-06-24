const router = require('express').Router()

// Character Count
router.get("/", (req, res, next) => {
  res.send("hi, I'm characterCount")
});

// // Word Count
// router.get('/wordCount', (req, res, next) => {
//   console.log("hi, I'm wordCount")
// });

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router;
