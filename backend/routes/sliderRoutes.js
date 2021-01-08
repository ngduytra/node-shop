import express from 'express'
const router = express.Router()
import {getHelloSliderData} from '../controllers/sliderController.js'

router.route('/gethelloslider1').get(getHelloSliderData)


export default router