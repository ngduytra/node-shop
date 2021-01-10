import express from 'express'
const router = express.Router()
import {getHelloSliderData, getBannerOne} from '../controllers/sliderController.js'

router.route('/gethelloslider1').get(getHelloSliderData)
router.route('/getbannerone').get(getBannerOne)


export default router