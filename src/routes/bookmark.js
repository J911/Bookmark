const express = require('express')
const router = express.Router()

const bookmark = require('./bookmark.ctrl')

router.get('/', bookmark.getBookmark)
router.get('/search', bookmark.searchBookmark)

router.post('/', (req, res, next) => req.session.user == undefined ? res.status(403) : next())
router.post('/',bookmark.registBookmark)
module.exports = router