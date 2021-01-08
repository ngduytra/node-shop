import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, registerUser, updateUserProfile, getUser, getforgetPassword} from '../controllers/userController.js'
import {protect,admin} from  '../middlewares/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin,getUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/forgotpassword').post(getforgetPassword)


export default router