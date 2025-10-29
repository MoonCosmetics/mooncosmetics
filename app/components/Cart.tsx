"use client";

import { motion } from "framer-motion";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart({ cart, setCart, onClose }: any) {
  const total = cart.reduce(
    (sum: number, item: any) => sum + item.precio * item.cantidad,
    0
  );

  const changeQuantity = (id: number, amount: number) => {
    setCart((prev: any[]) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: Math.max(1, item.cantidad + amount) }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev: any[]) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    const message = `Hola, quiero finalizar mi compra en MoonCosmetics 🛍️:\n\n${cart
      .map(
        (item: any) =>
          `• ${item.nombre} x${item.cantidad} - S/${(
            item.precio * item.cantidad
          ).toFixed(2)}`
      )
      .join("\n")}\n\n💰 Total: S/${total.toFixed(
      2
    )}\n\n¿Podrían ayudarme a confirmar mi pedido? 💕`;

    const url = `https://wa.me/51992200823?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-6 flex flex-col"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#C5A78E]">
          Tu carrito 🛍️
        </h2>
        <button onClick={onClose}>
          <FaTimes className="text-gray-500 hover:text-gray-700 text-xl" />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          Tu carrito está vacío 💄
        </p>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.map((item: any) => (
            <div key={item.id} className="flex items-center gap-3 border-b pb-3">
              <img
                src={item.img}
                alt={item.nombre}
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.nombre}</h4>
                <p className="text-gray-600 text-sm">
                  S/{(item.precio * item.cantidad).toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => changeQuantity(item.id, -1)}
                    className="text-[#C5A78E] hover:text-[#A18C75]"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-sm font-semibold">
                    {item.cantidad}
                  </span>
                  <button
                    onClick={() => changeQuantity(item.id, 1)}
                    className="text-[#C5A78E] hover:text-[#A18C75]"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-400 hover:text-red-600"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4">
          <p className="text-right font-semibold text-[#333] mb-2">
            Total: S/{total.toFixed(2)}
          </p>
          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all"
          >
            Finalizar compra 💬
          </button>
        </div>
      )}
    </motion.div>
  );
}




