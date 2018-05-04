const express  = require('express');
const router =  express.Router();

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Handling GET requets to /products'
    });
});

router.post('/',(req, res, next) =>{
    const product = {
      name:req.body.name,
      price:req.body.price
    };
    res.status(201).json({
        message: 'Handling POST requets to /products',
        createdProduct: product
    });
});

router.get('/:productId',(req, res, next) =>{
    const id = req.params.productId;
    if(id=='special'){
        res.status(200).json({
            message: 'You discovered the special id',
            productId: req.params.productId
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID: ',
            productId: req.params.productId
        });
    }

});

router.patch('/:productId',(req, res, next) =>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Updated product!',
        productId: req.params.productId
    });

});

router.delete('/:productId',(req, res, next) =>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Deleted product!',
        productId: req.params.productId
    });

});

module.exports = router;