import express from "express"
import cookieParser from 'cookie-parser'
import api from './routes/api.routes.js'

const app = express()


//esta sentencia es para que entienda json si no se coloca sale undefined
app.use(express.json())

//aqui se usa cookier parser para leer las cookies, si no se instala y se usa saldra undefined es como express json
app.use(cookieParser())


//routes si no se coloca daria error de peticion
app.use("/api/todos", api)



export default app