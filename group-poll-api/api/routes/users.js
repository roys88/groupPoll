const express  = require('express');
const router =  express.Router();

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/',(req, res, next) =>{
    res.status(201).json({
        message: 'Order was created'
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
        res.status(200).json({
            message: 'You passed an ID: ',
            orderId: req.params.userId
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
    res.status(200).json({
        message: 'Deleted User!',
        orderId: req.params.userId
    });

});

module.exports = router;