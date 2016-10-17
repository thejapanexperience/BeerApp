const express = require ('express')
const router = express.Router()

router.use('/beer', require('./beer'))
router.use('/saved', require('./saved'))

module.exports = router
