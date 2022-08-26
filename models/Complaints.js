const mongoose = require('mongoose')

const complain = new mongoose.Schema({
    _id:String,
    complaint:String,
    source:String,
},
    {
        timestamps:true
    }
    )


module.exports = mongoose.model('complain', complain)