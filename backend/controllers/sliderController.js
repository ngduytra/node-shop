import asyncHandler from 'express-async-handler'
import heroSliderData from "../data/hero-sliders/hero-slider-one.js";
import bannerOne from "../data/banner/banner-one.js"

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const getHelloSliderData = asyncHandler(async(req, res)=>{
    // console.log(heroSliderData);
    res.json(heroSliderData)
})

const getBannerOne = asyncHandler(async(req, res)=>{
    res.json(bannerOne)
})


export {getHelloSliderData,getBannerOne}
