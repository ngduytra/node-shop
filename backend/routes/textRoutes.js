import express from 'express'
const router = express.Router()
import {getTextGridData} from '../controllers/getText.js'

router.route('/gettextgrid').get(getTextGridData)


export default router