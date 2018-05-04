const express  = require('express');
const app = express();
const bodtParser  = require('body-parser');


const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

//for parsing income requests
app.use(bodtParser.urlencoded({extended: false}));
app.use(bodtParser.json());

//Adding headers to the response
app.use((req,res,next)=> {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization ');
    if(req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, PUT');
        return res.status(200).json({});
    }
});

//Routes that handles requests
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) =>{
    const error  = new Error('Not Found');
    error.status =404;
    next(error);
    });


app.use((error,req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;
