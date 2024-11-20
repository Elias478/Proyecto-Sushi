// app.js
import express from 'express'
import morgan from 'morgan'
import router from './rutas/autRutas.js'
import usuariosRutas from './rutas/rutasUsuarios.js'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', router)
app.use('/api', usuariosRutas)

export default app