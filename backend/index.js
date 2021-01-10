import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import sliderRouter from './routes/sliderRoutes.js'
import blogRouter from './routes/blogRoutes.js'
import textRouter from './routes/textRoutes.js'
import {notFound, errorHandler}from './middlewares/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

app.use(express.json())

app.use('/api/products', productRouter )
app.use('/api/users', userRouter )
app.use('/api/orders', orderRouter )
app.use('/api/sliders', sliderRouter )
app.use('/api/blogs', blogRouter )
app.use('/api/texts', textRouter )

app.get('/api/config/paypal',(req, res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green.underline))