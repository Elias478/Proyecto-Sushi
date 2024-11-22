// usuariosControl.js
import Usuario from '../modelo/usuarioModelo.js'

export const getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

export const getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    if (!usuario) return res.status(404).json({mensaje: 'Usuario no encontrado'})
    res.json(usuario)
}

export const crearUsuario = async (req, res) => {
    const {run, nombreCompleto, direccion, comuna, provincia, region, fechaNacimiento, sexo, correoElectronico, numeroTelefonico} = req.body
    const nuevoUsuario = new Usuario({
        run,
        nombreCompleto,
        direccion,
        comuna,
        provincia,
        region,
        fechaNacimiento,
        sexo,
        correoElectronico,
        numeroTelefonico
    })
    try {
        const usuarioGuardado = await nuevoUsuario.save()
        res.status(201).json(usuarioGuardado)
    } catch (error) {
        res.status(400).json({mensaje: error.message})
    }
}

export const deleteUsuario = async (req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id)
    if (!usuario) return res.status(404).json({mensaje: 'Usuario no encontrado'})
    res.sendStatus(204)
}

export const updateUsuario = async (req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!usuario) return res.status(404).json({mensaje: 'Usuario no encontrado'})
    res.json(usuario)
}