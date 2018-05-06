const express = require('express')
const router = express.Router()

const auth = require('./auth.ctrl')

router.post('/login', auth.login)
router.post('/join', auth.join)
router.get('/logout', auth.logout)

module.exports = router
