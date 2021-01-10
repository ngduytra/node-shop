import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import createCode from '../utils/create2FA.js'
import User from '../models/userModel.js'
import sendMail from '../utils/sendMail.js'

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc Register a new user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async(req, res)=>{
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        username: name,
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Get user profile
// @route POST /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user.id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user.id)
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if(req.body.password){
        user.password = req.body.password
    }
    const updatedUser = await user.save()

    if(user){
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc Forget password
// @route POST /api/users/profile
// @access Private

const getforgetPassword = asyncHandler(async(req, res)=>{
    const {email} = req.body

    const user = await User.findOne({email})

    if(!user){
        res.status(400)
        throw new Error('User already exists')
    }
    const code = await createCode(user._id)

    await sendMail(email, 'Mã Đổi Mật Khẩu',code)
    res.status(200).json({success: 'success'})
})

// @desc GET all users
// @route Get /api/users
// @access Admin

const getUser = asyncHandler(async(req, res)=>{
    const users = await User.find({})
    res.json(users)
})

export {authUser, registerUser, getUserProfile, updateUserProfile,getUser,getforgetPassword}
