const mysql = require('../mysql/index')

const express = require('express');
const router = express.Router();

const auth = require('./auth')

router.post('/login', (req, res)=>{
    const userId = req.body.user_id;
    const sql = `SELECT * FROM members WHERE user_id = '${userId}'`;
    mysql.connection.query(sql, (err, users)=>{
      if(!users[0]) return res.status(404);
      if(users[0].user_pw == req.body.user_pw){
        req.session.user = {
          idx: users[0].idx,
          user_id: users[0].user_id
        };
        res.end();
      }
    });
});
router.post('/join', (req, res)=>{        //TODO err코드 수정(UserLogin과 비슷하게)
    const userId = req.body.user_id;
    const userPw = req.body.user_pw;
    const sql = `insert into members(user_id, user_pw) values('${userId}','${userPw}')`;
    mysql.connection.query(sql,(err, users)=>{
      if(err) throw err;
      return res
    });
});

module.exports = router;

// const userSearch = (req, res)=>{      //TODO /get요청 수정, err코드 수정(UserLogin과 비슷하게)
//   const userId = req.body.user_id;
//   const sql = `SELECT user_id FROM members WHERE user_id = '${userId}'`;
//   mysql.connection(query(sql,(err, users)=>{
//     if(err) throw err;
//     return users;
//   }));
// };
