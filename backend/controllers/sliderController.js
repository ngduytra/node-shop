import asyncHandler from 'express-async-handler'
import heroSliderData from "../data/hero-sliders/hero-slider-one.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const getHelloSliderData = asyncHandler(async(req, res)=>{
    // console.log(heroSliderData);
    res.json(heroSliderData)
})


export {getHelloSliderData}
