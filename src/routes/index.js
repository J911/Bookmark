const express = require('express');
const router = express.Router()
const auth = require('./auth')
const bookmark = require('./bookmark')
const user = require('./user')

router.use('/auth', auth)
router.use('/bookmark', bookmark)

module.exports = router