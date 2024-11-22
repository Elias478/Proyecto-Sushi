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

// Agregar una ruta raíz simple
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API' })
})

app.use('/api', router)
app.use('/api', usuariosRutas)

export default app