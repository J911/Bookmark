const mysql = require('../mysql/index')

const express = require('express');
const router = express.Router();

const auth = require('./auth')

router.post('/login', (req, res)=>{
    const userId = req.body.user_id;
    const sql = `SELECT * FROM members WHERE user_id = '${userId}'`;
    mysql.query(sql, (err, users)=>{
      if(!users[0]) return res.status(404).end();
      if(users[0].user_pw == req.body.user_pw){
        req.session.user = {
          idx: users[0].idx,
          user_id: users[0].user_id
        };
        return res.json({
          state: 'success login'
        });
      }
    });
});
router.post('/join', (req, res)=>{ 
    const userId = req.body.user_id;
    const userPw = req.body.user_pw;

    const sql = `SELECT * FROM members WHERE user_id = '${userId}'`;
    mysql.query(sql, (err, users)=>{
      if(users[0]) return res.status(409).end(); // conflict
      const sql = `insert into members(user_id, user_pw) values('${userId}','${userPw}')`;
      mysql.query(sql,(err, users)=>{
        if(err) res.status(500).end()
        return res.json({
          state: 'success join'
        });
      });
    });
});

router.get('/logout', (req, res) => {
  req.session = null;
  res.clearCookie('sid');
  res.redirect('/');
});

module.exports = router;
