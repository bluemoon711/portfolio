var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  const data = {
    person: {
      firstName: 'Ying',
      lastName: 'Fan',
      url:'https://github.com/bluemoon711'
    }
  }
 res.render('index', {person: data.person})
})

router.get('/contact', (req, res) => {
  res.render('contact');
}) 

router.get('/thanks', (req, res) => {
  res.render('thanks', {contact: req.body});
}) 

module.exports = router

