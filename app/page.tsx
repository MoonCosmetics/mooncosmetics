"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import Cart from "./components/Cart";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");

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
    <main className="min-h-screen bg-gradient-to-b from-[#FFFDFB] to-[#F7EFEA] text-[#2F2F2F] font-[Poppins] flex flex-col items-center relative overflow-hidden">
      {/* BOTÓN DEL CARRITO */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-8 right-8 bg-[#D4BFAA] text-white p-3 rounded-full shadow-md hover:bg-[#C5A78E] transition-all"
      >
        <FaShoppingCart className="text-xl" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-[#C5A78E] text-xs px-2 py-[1px] rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* LOGO */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mt-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center"
        >
          <h1 className="text-[90px] font-[Playfair_Display] font-bold tracking-tight leading-none">
            <span className="text-[#E7D3C1]">M</span>
            <span className="text-[#AFA8A0]">C</span>
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-[18px] tracking-[4px] font-[Poppins] text-[#7D7266]">
            MOON COSMETICS
          </p>
        </motion.div>
      </motion.header>

      {/* BUSCADOR */}
      <div className="relative mt-10 w-80">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-[#E6D9C8] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4BFAA] text-gray-700"
        />
        <FaSearch className="absolute top-3 right-5 text-[#C5A78E] text-xl" />
      </div>

      {/* BOTONES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#skincare"
          className="bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Skincare
        </a>
        <a
          href="#maquillaje"
          className="bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Maquillaje
        </a>
      </motion.div>

      {/* SECCIONES */}
      {["skincare", "maquillaje"].map((cat) => (
        <section key={cat} id={cat} className="mt-20 max-w-6xl px-6 w-full">
          <h3 className="text-2xl font-semibold text-center mb-10 text-[#C5A78E] capitalize">
            {cat} {cat === "skincare" ? "✨" : "💄"}
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {filteredProducts
              .filter((p) => p.categoria === cat)
              .map((producto) => (
                <motion.div
                  key={producto.id}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[250px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                >
                  <img
                    src={producto.img}
                    alt={producto.nombre}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-[#2F2F2F]">
                      {producto.nombre}
                    </h4>
                    <p className="text-[#7D7266] mt-1">S/{producto.precio}</p>
                    <button
                      onClick={() => addToCart(producto)}
                      className="mt-3 bg-gradient-to-r from-[#D4BFAA] to-[#C5A78E] text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
          <div className="text-center mt-6">
            <button className="text-[#C5A78E] font-medium underline hover:text-[#A18C75] transition">
              Ver más productos →
            </button>
          </div>
        </section>
      ))}

      {/* REDES SOCIALES */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 flex flex-wrap justify-center gap-6"
      >
        <a
          href="https://www.instagram.com/camiluna1612"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all"
        >
          <FaInstagram className="text-2xl" />
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@camiluna23"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all"
        >
          <FaTiktok className="text-2xl" />
          TikTok
        </a>
        <a
          href="https://wa.me/51992200823"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </a>
      </motion.div>

      {/* FOOTER */}
      <footer className="mt-20 w-full bg-[#F5EDE3] py-8 text-center text-[#7D7266]">
        <p className="text-sm">
          © {new Date().getFullYear()} MoonCosmetics · Todos los derechos
          reservados.
        </p>
      </footer>

      {cartOpen && (
        <Cart
          cart={cart}
          setCart={setCart}
          onClose={() => setCartOpen(false)}
        />
      )}
    </main>
  );
}

