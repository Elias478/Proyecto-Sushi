import React, { useState } from 'react';
import OrderForm from '../componentes/OrderForm';
import OrderSummary from '../componentes/OrderSummary';

export default function OrdenCompra() {
  const [orderSummary, setOrderSummary] = useState(null);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/src/sushi.jpg)',
        }}
      >
        {/* Gradiente decreciente solo en el 25% inferior */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.85) 100%)',
            }}
          ></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative min-h-screen flex items-center justify-center z-10">
        <div className="max-w-lg w-full p-6 bg-black bg-opacity-90 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Orden de Compra Fukusuke Sushi
          </h1>
          <OrderForm onSubmit={setOrderSummary} />
          {orderSummary && (
            <div className="mt-6 p-4 bg-red-900 bg-opacity-80 text-white rounded-lg">
              <OrderSummary {...orderSummary} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
