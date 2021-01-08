import asyncHandler from 'express-async-handler'
import blogFeature from "../data/blog-featured/blog-featured.js";
import blogFeatureFives from "../data/blog-featured/blog-featured-five.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const getBlogFeatureDatas = asyncHandler(async(req, res)=>{
    // console.log(blogFeature);
    res.json(blogFeature)
})
const getAllBlogDatas = asyncHandler(async(req, res)=>{
    // console.log(blogFeature);
    res.json(blogFeatureFives)
})



export {getBlogFeatureDatas, getAllBlogDatas}
