const express = require('express');
const router = express.Router();

const { getBookmark } = require('modules')

router.get('/Bookmark', (req, res)=> getBookmark(req, res));

module.exports = router;
