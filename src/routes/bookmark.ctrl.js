const mysql = require('../mysql/index')
const express = require('express')
const router = express.Router()

const getBookmark = (req, res) => {
    const sql = `select * from bookmark`
    mysql.query(sql, (err, bookmarks) => {
        if(err) return res.status(500).end()
        return res.json(bookmarks)
    });
}

const searchBookmark = (req, res) => {
    const keyword = req.query.keyword 
    const sql = `select * from bookmark where title like '%${keyword}%'`
    console.log(sql)
    mysql.query(sql, (err, bookmarks) => {
        if(err) return res.status(500).end()
        return res.json(bookmarks)
    })
}

const registBookmark = (req, res) => {
    const title = req.body.title;
    const url = req.body.url;
    const sql = `insert into bookmark(user_idx ,title, url, type) values('${req.session.user.idx}','${title}','${url}', '0')`
    mysql.query(sql, (err, users) => {
        if(err) return res.status(500).end()
        return res.json({
            state: 'success regist'
        })
    });
}
module.exports = {
    getBookmark,
    searchBookmark,
    registBookmark
}