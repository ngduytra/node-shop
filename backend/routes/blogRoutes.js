import express from 'express'
const router = express.Router()
import {getBlogFeatureDatas,getAllBlogDatas} from '../controllers/blogController.js'

router.route('/getblogfeatures').get(getBlogFeatureDatas)
router.route('/getallblogs').get(getAllBlogDatas)


export default router