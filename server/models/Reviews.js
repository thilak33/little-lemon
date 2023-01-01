const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true,
    },
    rating:{
        type:Number,
        required: true,
    },
    description:{
        type:String,
        required: true,
    }
})


module.exports = mongoose.model('Review',reviewSchema)