const mysql = require('../mysql/index')

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = req.query.query; //??
    const siteName = req.query.siteName;
    const siteDomain = req.query.siteDomain;
    const siteDescription = req.query.siteDescription;
    const type = req.query.type;
    const sql = '';

    if (query != undefined) // 북마크 리스트 중복 확인
        if(serchCtrl(req.query.user_id)) // 본인의 북마크 리스트를 통해서 중복으로 등록되는것을 확인하고자함.. 그래서 searchCtrl를 통해서 확인한 리턴 값을 통해 알아내려고 함..
            sql = "INSERT INTO 'bookmark' VALUES ('%${siteName}%', '%${siteDomain}%', '%${siteDescription}%', '%${type}%')"
        else
            connection.
    else

});


module.exports = router;