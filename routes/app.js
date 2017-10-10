var express    = require('express')
var bodyParser = require('body-parser')
var router     = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// define the home page route
router.get('/', function (req, res) {
  	res.render('index')
})

module.exports = router