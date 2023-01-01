const Review = require('../models/Reviews')

const allReviews = async(req,res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({reviews})
    } catch (error) {
        console.log(error)
    }
}

const createReview = async (req,res) => {
    try {
        const reviews = await Review.create(req.body)
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
    }
}




module.exports = {allReviews , createReview}