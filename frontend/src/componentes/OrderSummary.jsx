import React from 'react';

export default function OrderSummary({ customerName, product, quantity, total }) {
  return (
    <div className="mt-6 p-4 bg-white bg-opacity-90 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Resumen de la Orden</h2>
      <div className="space-y-2">
        <p><span className="font-medium">Cliente:</span> {customerName}</p>
        <p><span className="font-medium">Producto:</span> {product}</p>
        <p><span className="font-medium">Cantidad:</span> {quantity}</p>
        <p><span className="font-medium">Total:</span> ${total}</p>
      </div>
    </div>
  );
}