// usuarios.js
import axios from './axios.js'

export const getUsuarios = () => axios.get('/usuarios')
export const getUsuario = (id) => axios.get(`/usuarios/${id}`)
export const crearUsuario = (usuario) => axios.post('/usuarios', usuario)
export const updateUsuario = (usuario) => axios.put(`/usuarios/${usuario._id}`, usuario)
export const borrarUsuario = (id) => axios.delete(`/usuarios/${id}`)