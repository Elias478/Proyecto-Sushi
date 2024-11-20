// UsuarioContext.jsx
import { createContext, useContext, useState } from "react";
import { crearUsuario, getUsuarios } from "../api/usuarios.js"

const UsuarioContext = createContext()

export const useUsuario = () => {
    const context = useContext(UsuarioContext)
    if(!context){
        throw new Error("useUsuario debe ser usado dentro de un UsuarioProvider")
    }
    return context
}

export function UsuarioProvider({children}) {
    const [usuarios, setUsuarios] = useState([])

    const agregarUsuario = async (usuario) => {
        try {
            const res = await crearUsuario(usuario)
            setUsuarios([...usuarios, res.data])
        } catch (error) {
            console.error("Error al crear el usuario:", error)
        }
    }

    return(
        <UsuarioContext.Provider 
        value= {{
            usuarios,
            agregarUsuario
        }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}