const mysql = require('../mysql/index')

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = `select * from bookmark where type = 0`;
    mysql.query(sql, (err, bookmarks) => {
        if(err) return res.status(500).end()
        res.json(
            bookmarks
        )
    })
});

router.get('/search', (req, res) => {
    const keyword = req.query.keyword 
    const sql = `select * from bookmark where type = 0 and title like '%${keyword}%'`;
    console.log(sql)
    mysql.query(sql, (err, bookmarks) => {
        if(err) return res.status(500).end()
        res.json(
            bookmarks
        )
    })
});

router.post('/register', (req, res, next) => {
    if(req.session.user == undefined) res.status(403)
    else next();
})

router.post('/register', (req, res) => {
    const bookmarkTitle = req.body.title;
    const bookmarkUrl = req.body.url;
    const sql = `insert into bookmark(user_idx ,title, url, type) values('${req.session.user.idx}','${bookmarkTitle}','${bookmarkUrl}', '0')`;
    mysql.query(sql, (err, users) => {
        if(err) return res.status(500).end()
        return res.json({
            state: 'success regist'
          });
    });
});
module.exports = router