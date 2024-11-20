// rutasUsuarios.js
import { Router } from "express"
import {
    getUsuarios,
    getUsuario,
    crearUsuario,
    deleteUsuario,
    updateUsuario
} from '../controlador/usuariosControl.js'
const router = Router()

router.get('/usuarios', getUsuarios)
router.get('/usuarios/:id', getUsuario)
router.post('/usuarios', crearUsuario)
router.delete('/usuarios/:id', deleteUsuario)
router.put('/usuarios/:id', updateUsuario)

export default router