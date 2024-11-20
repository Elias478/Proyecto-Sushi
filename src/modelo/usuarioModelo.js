// usuarioModelo.js
import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema({
    run: {
        type: String,
        required: true,
        unique: true
    },
    nombreCompleto: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    comuna: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro'],
        required: true
    },
    correoElectronico: {
        type: String,
        required: true,
        unique: true
    },
    numeroTelefonico: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Usuario', usuarioSchema)