import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import sliderRouter from './routes/sliderRoutes.js'
import blogRouter from './routes/blogRoutes.js'
import {notFound, errorHandler}from './middlewares/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.get('/', (req,res)=>{
    res.send('Api is running .....')
})

app.use('/api/products', productRouter )
app.use('/api/users', userRouter )
app.use('/api/orders', orderRouter )
app.use('/api/sliders', sliderRouter )
app.use('/api/blogs', blogRouter )

app.get('/api/config/paypal',(req, res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green.underline))