"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import Cart from "./components/Cart";

export default function Home() {
  useEffect(() => {
    document.title = "MoonCosmetics | Maquillaje y Skincare Premium";
  }, []);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [showAllSkincare, setShowAllSkincare] = useState(false);
  const [showAllMakeup, setShowAllMakeup] = useState(false);

  const skincareRef = useRef<HTMLDivElement>(null);
  const makeupRef = useRef<HTMLDivElement>(null);

  const addToCart = (producto: any) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.nombre === producto.nombre);
      if (existing) {
        return prev.map((p) =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const updateQuantity = (nombre: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.nombre === nombre
            ? { ...item, cantidad: Math.max(1, item.cantidad + delta) }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const removeFromCart = (nombre: string) => {
    setCartItems((prev) => prev.filter((item) => item.nombre !== nombre));
  };

  const skincare = [
    { nombre: "Sérum Facial Glow", precio: 79.9, img: "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=80&w=800" },
    { nombre: "Mascarilla Hidratante", precio: 39.9, img: "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?fm=jpg&q=80&w=800" },
    { nombre: "Tónico Refrescante", precio: 45.9, img: "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?fm=jpg&q=80&w=800" },
    { nombre: "Crema Facial Nocturna", precio: 89.9, img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?fm=jpg&q=80&w=800" },
    { nombre: "Limpiador Facial Suave", precio: 59.9, img: "https://images.unsplash.com/photo-1603657539295-b78b9f4a3d3b?fm=jpg&q=80&w=800" },
    { nombre: "Exfoliante de Arroz", precio: 69.9, img: "https://images.unsplash.com/photo-1611080626765-1cce8b0a4d1b?fm=jpg&q=80&w=800" },
  ];

  const maquillaje = [
    { nombre: "Labial Mate Rosé", precio: 49.9, img: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=80&w=800" },
    { nombre: "Base Líquida Natural", precio: 69.9, img: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?fm=jpg&q=80&w=800" },
    { nombre: "Paleta de Sombras Pink Dream", precio: 89.9, img: "https://www.hiyamarianne.com/wp-content/uploads/2022/04/Product-still-life-photography-content-creation-for-Barry-M-Cosmetics.-Beauty-product-photography-styling-by-Marianne-Taylor._0009-1.jpg" },
    { nombre: "Rubor Satinado Coral", precio: 59.9, img: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=80&w=800" },
    { nombre: "Iluminador Golden Touch", precio: 54.9, img: "https://images.unsplash.com/photo-1585386959984-a4155224a1b3?fm=jpg&q=80&w=800" },
    { nombre: "Delineador Preciso Black", precio: 39.9, img: "https://images.unsplash.com/photo-1620917669809-c7f885013311?fm=jpg&q=80&w=800" },
  ];

  const handleCheckout = () => {
    if (cartItems.length === 0) return alert("Tu carrito está vacío 💄");

    const total = cartItems.reduce(
      (sum, item) => sum + item.precio * item.cantidad,
      0
    );
    const productos = cartItems
      .map(
        (item) =>
          `- ${item.nombre} x${item.cantidad} (S/${(
            item.precio * item.cantidad
          ).toFixed(2)})`
      )
      .join("%0A");

    const mensaje = `Hola 💖, quiero comprar:%0A%0A${productos}%0A%0ATotal: S/${total.toFixed(2)}%0A`;
    const numero = "51992200823";
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
  };

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredSkincare = skincare.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );
  const filteredMakeup = maquillaje.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#FFF5F8] text-[#333] font-[Poppins] flex flex-col items-center relative scroll-smooth">
      {/* 🛒 Carrito */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-6 right-6 bg-[#F8C8DC] p-4 rounded-full shadow-md hover:scale-110 transition-all z-50"
      >
        <FaShoppingCart className="text-2xl" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.reduce((a, b) => a + b.cantidad, 0)}
          </span>
        )}
      </button>
      {cartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}

      {/* 🌙 Logo */}
      <header className="mt-8 text-center">
        <h1 className="text-[90px] font-[Playfair_Display] font-bold tracking-tight leading-none">
          <span className="text-[#FADADD]">M</span>
          <span className="text-[#888]">C</span>
        </h1>
        <p className="text-[#666] tracking-[4px] text-sm">MOON COSMETICS</p>
      </header>

      {/* 🔍 Buscador y Navegación */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 px-6 w-full max-w-2xl">
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 flex-grow">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
        <button
          onClick={() => scrollToSection(skincareRef)}
          className="bg-[#FADADD] text-[#333] px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
        >
          Skincare
        </button>
        <button
          onClick={() => scrollToSection(makeupRef)}
          className="bg-[#F8C8DC] text-[#333] px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
        >
          Maquillaje
        </button>
      </div>

      {/* ✨ Secciones */}
      <Section
        title="Skincare ✨"
        productos={filteredSkincare}
        onAdd={addToCart}
        showAll={showAllSkincare}
        setShowAll={setShowAllSkincare}
        refProp={skincareRef}
      />

      <Section
        title="Maquillaje 💄"
        productos={filteredMakeup}
        onAdd={addToCart}
        showAll={showAllMakeup}
        setShowAll={setShowAllMakeup}
        refProp={makeupRef}
      />

      {/* 🌸 Redes Sociales */}
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
          className="flex items-center gap-2 bg-gradient-to-r from-[#FADADD] to-[#F8C8DC] text-[#333333] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all"
        >
          <FaInstagram className="text-2xl" />
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@camiluna23"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#FADADD] to-[#F8C8DC] text-[#333333] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all"
        >
          <FaTiktok className="text-2xl" />
          TikTok
        </a>
        <a
          href="https://wa.me/51992200823"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#FADADD] to-[#F8C8DC] text-[#333333] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </a>
      </motion.div>

      <footer className="mt-16 py-8 text-center text-[#777] text-sm bg-[#FFF0F5] w-full">
        © {new Date().getFullYear()} MoonCosmetics · Todos los derechos reservados.
      </footer>
    </main>
  );
}

function Section({ title, productos, onAdd, showAll, setShowAll, refProp }: any) {
  const visibleProducts = showAll ? productos : productos.slice(0, 4);

  return (
    <section ref={refProp} className="mt-20 w-full max-w-6xl px-6">
      <h3 className="text-2xl font-semibold text-center mb-6 text-[#B58EBF]">{title}</h3>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {visibleProducts.map((producto: any, index: number) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[250px] bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img src={producto.img} alt={producto.nombre} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h4 className="font-medium text-[#333]">{producto.nombre}</h4>
              <p className="text-[#888] mt-1">S/{producto.precio.toFixed(2)}</p>
              <button
                onClick={() => onAdd(producto)}
                className="mt-3 bg-gradient-to-r from-[#FADADD] to-[#F8C8DC] px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
              >
                Agregar al carrito
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && productos.length > 4 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="text-[#B58EBF] font-semibold hover:underline"
          >
            Ver más productos →
          </button>
        </div>
      )}
    </section>
  );
}

