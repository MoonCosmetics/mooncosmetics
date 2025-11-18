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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Sweet Factory | Tortas Personalizadas";
  }, []);

  const productos = [
    { id: 1, nombre: "Torta 1", precio: 89.9, categoria: "tortas", img: "/torta1.jpg" },
    { id: 2, nombre: "Torta 2", precio: 89.9, categoria: "tortas", img: "/torta2.jpg" },
    { id: 3, nombre: "Torta 3", precio: 89.9, categoria: "tortas", img: "/torta3.jpg" },
    { id: 4, nombre: "Torta 4", precio: 89.9, categoria: "tortas", img: "/torta4.jpg" },
    { id: 5, nombre: "Torta 5", precio: 89.9, categoria: "tortas", img: "/torta5.jpg" },
    { id: 6, nombre: "Torta 6", precio: 89.9, categoria: "tortas", img: "/torta6.jpg" },
    { id: 7, nombre: "Torta 7", precio: 89.9, categoria: "tortas", img: "/torta7.jpg" },
    { id: 8, nombre: "Torta 8", precio: 89.9, categoria: "tortas", img: "/torta8.jpg" },
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

      {/* MENÚ HAMBURGUESA */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 left-4 sm:hidden bg-[#D4BFAA] text-white p-3 rounded-full shadow-md hover:bg-[#C5A78E] transition-all z-50"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MENÚ LATERAL MÓVIL */}
      {menuOpen && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: -200 }}
          className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-2xl z-40 p-6 flex flex-col items-start gap-6 text-[#2F2F2F]"
        >
          <a
            href="#tortas"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-[#C5A78E]"
          >
            Tortas
          </a>
          <a
            href="https://www.instagram.com/sweetfactory_aqp/"
            target="_blank"
            className="text-lg font-medium hover:text-[#A18C75]"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@sweetfactoryaqp"
            target="_blank"
            className="text-lg font-medium hover:text-[#A18C75]"
          >
            TikTok
          </a>
          <a
            href="https://wa.me/51913918132"
            target="_blank"
            className="text-lg font-medium hover:text-[#A18C75]"
          >
            WhatsApp
          </a>
        </motion.div>
      )}

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
          className="relative flex flex-col items-center"
        >
          <img
            src="/logo-sf.png"
            alt="Sweet Factory Logo"
            className="w-[140px] sm:w-[200px] object-contain"
          />

          <p className="mt-3 text-[16px] sm:text-[20px] tracking-[4px] font-[Playfair_Display] text-[#7D7266]">
            SWEET FACTORY
          </p>
        </motion.div>
      </motion.header>

      {/* BUSCADOR */}
      <div className="relative mt-10 w-full max-w-xs sm:max-w-md">
        <input
          type="text"
          placeholder="Buscar torta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-[#E6D9C8] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4BFAA] text-gray-700 text-sm sm:text-base"
        />
        <FaSearch className="absolute top-3 right-5 text-[#C5A78E] text-xl" />
      </div>

      {/* BOTONES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        <a
          href="#tortas"
          className="bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Tortas
        </a>
      </motion.div>

      {/* SECCIÓN DE TORTAS */}
      <section
        id="tortas"
        className="mt-16 sm:mt-20 max-w-6xl px-2 sm:px-6 w-full"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-10 text-[#C5A78E]">
          Tortas 🎂
        </h3>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {filteredProducts.map((producto) => (
            <motion.div
              key={producto.id}
              whileHover={{ scale: 1.05 }}
              className="snap-center min-w-[200px] sm:min-w-[250px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={producto.img}
                alt={producto.nombre}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="font-medium text-[#2F2F2F] text-sm sm:text-base">
                  {producto.nombre}
                </h4>
                <p className="text-[#7D7266] mt-1 text-sm sm:text-base">
                  S/{producto.precio}
                </p>
                <button
                  onClick={() => addToCart(producto)}
                  className="mt-3 bg-gradient-to-r from-[#D4BFAA] to-[#C5A78E] text-white px-5 py-2 rounded-full shadow hover:scale-105 transition text-sm sm:text-base"
                >
                  Agregar al carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REDES SOCIALES */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6"
      >
        {[
          {
            href: "https://www.instagram.com/sweetfactory_aqp/",
            icon: <FaInstagram className="text-xl sm:text-2xl" />,
            label: "Instagram",
          },
          {
            href: "https://www.tiktok.com/@sweetfactoryaqp",
            icon: <FaTiktok className="text-xl sm:text-2xl" />,
            label: "TikTok",
          },
          {
            href: "https://wa.me/51913918132",
            icon: <FaWhatsapp className="text-xl sm:text-2xl" />,
            label: "WhatsApp",
          },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#EDE0D4] to-[#D4BFAA] text-[#2F2F2F] px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-semibold shadow-md hover:scale-105 transition-all"
          >
            {icon}
            {label}
          </a>
        ))}
      </motion.div>

      {/* FOOTER */}
      <footer className="mt-14 sm:mt-20 w-full bg-[#F5EDE3] py-6 sm:py-8 text-center text-[#7D7266] text-xs sm:text-sm">
        <p>
          © {new Date().getFullYear()} Sweet Factory · Todos los derechos reservados.
        </p>
      </footer>

      {cartOpen && (
        <Cart cart={cart} setCart={setCart} onClose={() => setCartOpen(false)} />
      )}
    </main>
  );
}
