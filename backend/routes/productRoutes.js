import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
  createProductReview
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts)

// @desc    Fetch a single product
// @route   GET /api/products/:id
// @access  Public
router.route('/:id').get(getProductById)
router.route('/:id/reviews').post(protect, createProductReview)

export default router
