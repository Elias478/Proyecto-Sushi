import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsuarioProvider } from './contexto/UsuarioContext.jsx';
import RegistroUsuario from './paginas/RegistroUsuario.jsx';
import OrdenCompra from './paginas/OrdenCompra.jsx';

export default function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/registro' element={<RegistroUsuario />} />
          <Route path='/orden' element={<OrdenCompra />} />
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  );
}