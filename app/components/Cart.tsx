"use client";

import { motion } from "framer-motion";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart({ cartItems, onClose, onCheckout, onRemove, onUpdateQuantity }: any) {
  const total = cartItems.reduce((sum: number, item: any) => sum + item.precio * item.cantidad, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-6 flex flex-col"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#B58EBF]">Tu carrito 🛍️</h2>
        <button onClick={onClose}><FaTimes className="text-gray-500 text-xl hover:text-gray-700" /></button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Tu carrito está vacío 💄</p>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-4">
          {cartItems.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-3 border-b pb-2">
              <img src={item.img} alt={item.nombre} className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.nombre}</h4>
                <p className="text-gray-600 text-sm">S/{item.precio.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button onClick={() => onUpdateQuantity(item.nombre, -1)} className="bg-gray-200 rounded-full p-1"><FaMinus size={10} /></button>
                  <span className="text-sm font-medium">{item.cantidad}</span>
                  <button onClick={() => onUpdateQuantity(item.nombre, 1)} className="bg-gray-200 rounded-full p-1"><FaPlus size={10} /></button>
                </div>
              </div>
              <button onClick={() => onRemove(item.nombre)} className="text-red-500 hover:text-red-700 text-sm"><FaTimes /></button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-4">
          <p className="text-right font-semibold text-[#333] mb-2">Total: S/{total.toFixed(2)}</p>
          <button onClick={onCheckout} className="w-full bg-gradient-to-r from-[#FADADD] to-[#F8C8DC] text-[#333] py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">Finalizar compra 💬</button>
        </div>
      )}
    </motion.div>
  );
}

