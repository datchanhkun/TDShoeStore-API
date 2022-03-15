import express from "express";
import products from "./data/Product.js"
import {corsOptions} from './config/cors.js'
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/mongodb.js";
import ImportData from "./DataImport.js";
import productRoute from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import userRoute from "./routes/userRoutes.js";
import orderRoute from "./routes/orderRoutes.js";

const port = process.env.PORT || 5000
const SERVER_HOST = process.env.APP_HOST || '0.0.0.0'
dotenv.config()
connectDatabase()
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

//API
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/orders", orderRoute)
app.get("/api/config/paypal", (req,res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})

//API ERROR HANDLE
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})