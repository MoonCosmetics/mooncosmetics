"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Cart from "./components/Cart";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // 👈 añadido

  useEffect(() => {
    document.title = "MoonCosmetics | Maquillaje y Skincare Premium";
  }, []);

  const productos = [
    {
      id: 1,
      nombre: "Sérum Facial Glow",
      precio: 79.9,
      categoria: "skincare",
      img: "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=80&w=800",
    },
    {
      id: 2,
      nombre: "Mascarilla Hidratante",
      precio: 39.9,
      categoria: "skincare",
      img: "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?fm=jpg&q=80&w=800",
    },
    {
      id: 3,
      nombre: "Tónico Refrescante",
      precio: 45.9,
      categoria: "skincare",
      img: "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?fm=jpg&q=80&w=800",
    },
    {
      id: 4,
      nombre: "Crema Facial Nocturna",
      precio: 89.9,
      categoria: "skincare",
      img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?fm=jpg&q=80&w=800",
    },
    {
      id: 5,
      nombre: "Labial Mate Rosé",
      precio: 49.9,
      categoria: "maquillaje",
      img: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=80&w=800",
    },
    {
      id: 6,
      nombre: "Base Líquida Natural",
      precio: 69.9,
      categoria: "maquillaje",
      img: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?fm=jpg&q=80&w=800",
    },
    {
      id: 7,
      nombre: "Paleta de Sombras Pink Dream",
      precio: 89.9,
      categoria: "maquillaje",
      img: "https://www.hiyamarianne.com/wp-content/uploads/2022/04/Product-still-life-photography-content-creation-for-Barry-M-Cosmetics.-Beauty-product-photography-styling-by-Marianne-Taylor._0009-1.jpg",
    },
    {
      id: 8,
      nombre: "Rubor Satinado Coral",
      precio: 59.9,
      categoria: "maquillaje",
      img: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=80&w=800",
    },
  ];

  const filteredProducts = productos.filter((p) =>
    p.nombre.toLowerCase().includes(query.toLowerCase())
  );

  const addToCart = (producto: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === producto.id);
      if (existing) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFDFB] to-[#F7EFEA] text-[#2F2F2F] font-[Poppins] flex flex-col items-center relative overflow-hidden px-4 sm:px-0">
      {/* BOTÓN DEL CARRITO */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-4 right-4 sm:top-8 sm:right-8 bg-[#D4BFAA] text-white p-3 rounded-full shadow-md hover:bg-[#C5A78E] transition-all z-50"
      >
        <FaShoppingCart className="text-lg sm:text-xl" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-[#C5A78E] text-xs px-2 py-[1px] rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* 🔥 BOTÓN DEL MENÚ HAMBURGUESA (solo móvil) */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 bg-[#D4BFAA] text-white p-3 rounded-full shadow-md hover:bg-[#C5A78E] transition-all z-50 sm:hidden"
      >
        <FaBars className="text-lg" />
      </button>

      {/* 🔥 OVERLAY Y PANEL DEL MENÚ */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[60] backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></motion.div>

          {/* Panel */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 w-64 h-full bg-[#FFF9F5]/95 backdrop-blur-md shadow-2xl z-[70] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-semibold text-[#C5A78E]">
                MoonCosmetics
              </h2>
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes className="text-gray-600 text-xl" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <a
                href="#skincare"
                onClick={() => setMenuOpen(false)}
                className="text-[#2F2F2F] hover:text-[#C5A78E] text-base font-medium"
              >
                Skincare ✨
              </a>
              <a
                href="#maquillaje"
                onClick={() => setMenuOpen(false)}
                className="text-[#2F2F2F] hover:text-[#C5A78E] text-base font-medium"
              >
                Maquillaje 💄
              </a>
            </nav>

            <div className="mt-auto pt-6 border-t border-[#E6D9C8]">
              <p className="text-xs text-[#7D7266] mb-3">Síguenos:</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/camiluna1612"
                  target="_blank"
                  className="text-[#C5A78E] hover:text-[#A18C75] text-lg"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@camiluna23"
                  target="_blank"
                  className="text-[#C5A78E] hover:text-[#A18C75] text-lg"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://wa.me/51992200823"
                  target="_blank"
                  className="text-[#C5A78E] hover:text-[#A18C75] text-lg"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* 🩵 TODO TU CÓDIGO ORIGINAL SIGUE IGUAL ABAJO */}
      {/* LOGO */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mt-14 sm:mt-10 text-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center"
        >
          <h1 className="text-[60px] sm:text-[90px] font-[Playfair_Display] font-bold tracking-tight leading-none">
            <span className="text-[#E7D3C1]">M</span>
            <span className="text-[#AFA8A0]">C</span>
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-[14px] sm:text-[18px] tracking-[3px] sm:tracking-[4px] font-[Poppins] text-[#7D7266]">
            MOON COSMETICS
          </p>
        </motion.div>
      </motion.header>

      {/* BUSCADOR */}
      <div className="relative mt-10 w-full max-w-xs sm:max-w-md">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-[#E6D9C8] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4BFAA] text-gray-700 text-sm sm:text-base"
        />
        <FaSearch className="absolute top-3 right-5 text-[#C5A78E] text-xl" />
      </div>

      {/* RESTO DE TU CÓDIGO ORIGINAL — SIN CAMBIOS */}
      {/* ... */}
      
      {cartOpen && (
        <Cart
          cart={cart}
          setCart={setCart}
          onClose={() => setCartOpen(false)}
        />
      )}
    </main>
  );
  
  
