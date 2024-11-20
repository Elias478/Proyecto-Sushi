import React, { useState } from 'react';

const prices = {
  sushi_roll: 10,
  nigiri: 8,
  sashimi: 12
};

export default function OrderForm({ onSubmit }) {
  const [customerName, setCustomerName] = useState('');
  const [product, setProduct] = useState('sushi_roll');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = prices[product] * quantity;
    onSubmit({
      customerName,
      product: product.replace('_', ' ').toUpperCase(),
      quantity,
      total: total.toFixed(2)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre del Cliente */}
      <div>
        <label
          htmlFor="customerName"
          className="block text-sm font-medium text-gray-300"
        >
          Nombre del Cliente:
        </label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md bg-black text-white placeholder-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Producto */}
      <div>
        <label
          htmlFor="product"
          className="block text-sm font-medium text-gray-300"
        >
          Producto:
        </label>
        <select
          id="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          className="mt-1 block w-full rounded-md bg-black text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="sushi_roll">Sushi Roll - $10</option>
          <option value="nigiri">Nigiri - $8</option>
          <option value="sashimi">Sashimi - $12</option>
        </select>
      </div>

      {/* Cantidad */}
      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-300"
        >
          Cantidad:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
          required
          className="mt-1 block w-full rounded-md bg-black text-white placeholder-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="w-full py-2 px-4 rounded-md bg-red-600 text-white font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Generar Orden
      </button>
    </form>
  );
}
