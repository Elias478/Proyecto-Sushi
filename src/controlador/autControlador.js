export const registro = (req,res) => {
    const {nombre,email,password} = req.body
    console.log(nombre,email,password)
    res.send('Registrando')
}

export const login = (req,res) => res.send('Login')
