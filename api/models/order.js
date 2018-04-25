const mongoose = require('mongoose');

const productScheme = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    product : {type: mongoose.Schema.Types.ObjectId , ref :'Product' , requred:true  },
    quantity : {type : Number , default : 1 } 
});

module.exports = mongoose.model('Order',productScheme);