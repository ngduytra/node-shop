import asyncHandler from 'express-async-handler'
import textGrid from "../data/text-grid/text-grid-one.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

const getTextGridData = asyncHandler(async(req, res)=>{
    // console.log(heroSliderData);
    res.json(textGrid)
})

export {getTextGridData}