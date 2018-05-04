const express  = require('express');
const router =  express.Router();

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/',(req, res, next) =>{
    const order = {
        productId:req.body.productId,
        quantity:req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        orderCreated: order
    });
});

router.get('/:orderId',(req, res, next) =>{
    const id = req.params.orderId;
    if(id=='special'){
        res.status(200).json({
            message: 'You discovered the special id',
            orderId: req.params.orderId
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID: ',
            orderId: req.params.orderId
        });
    }

});

router.patch('/:orderId',(req, res, next) =>{
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Updated order!',
        orderId: req.params.orderId
    });

});

router.delete('/:orderId',(req, res, next) =>{
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Deleted order!',
        orderId: req.params.orderId
    });

});

module.exports = router;