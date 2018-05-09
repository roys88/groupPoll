const express  = require('express');
const router =  express.Router();


const mysql  = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Aa221221',
    database:'testdb'
});


router.get('/',(req, res, next) =>{
    console.log('fetching the data');
    var sql = 'SELECT * FROM person';
    conn.query(sql,function (err,results) {
        if(err){
            res.status(500).json({
                err
            });
        }else{
            console.log(results);
            res.status(200).json({
                results
            });
        }
    });
});

router.post('/',(req, res, next) =>{
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        countryCode: req.body.countryCode,
        phone: req.body.phone,
        password:req.body.password
    };
    //  Validation start

    // email already used
    var sql = `SELECT count(*) FROM person WHERE email like '${req.body.email}`;

    // phone already used
    sql = `SELECT count(*) FROM person WHERE countryCode ='${req.body.countryCode}' AND phone= '${req.body.phone}`;

    //  Validation end
    sql = `INSERT INTO testdb.person(firstName, lastName,email,countryCode,phone) VALUES ('${user.firstName}','${user.lastName}','${user.email}','${user.countryCode}','${user.phone}');`;
    conn.query(sql,function (err,results) {
        if(err){
            res.status(500).json({
                err
            });
        }else{
            console.log(results);
            res.status(200).json({
                results
            });
        }
    });
});

router.get('/:userId',(req, res, next) =>{
    const id = req.params.userId;
    if(id=='special'){
        res.status(200).json({
            message: 'You discovered the special id',
            orderId: req.params.userId
        });
    } else {
        var sql = `select * from person where idPerson = ${id}`;
        conn.query(sql,function (err,results) {
            if(err){
                res.status(500).json({
                    err
                });
            }else{
                console.log(results);
                res.status(200).json({
                    results
                });
            }
        });
    }

});

router.patch('/:userId',(req, res, next) =>{
    const id = req.params.userId;
    res.status(200).json({
        message: 'Updated user!',
        orderId: req.params.userId
    });

});

router.delete('/:userId',(req, res, next) =>{
    const id = req.params.userId;
    let sql = 'delete from person where idPerson = ' + req.params.userId;
    conn.query(sql,function (err,results) {
        if(err){
            res.status(500).json({
                err
            });
        }else{
            console.log(results);
            res.status(200).json({
                results
            });
        }
    });

});

module.exports = router;