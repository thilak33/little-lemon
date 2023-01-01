const express = require('express')
const router = express.Router()
const {allReviews, createReview} = require('../controllers/reviews')


router.get('/reviews',allReviews)
router.post('/reviews',createReview)

module.exports = router