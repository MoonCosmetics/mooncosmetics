"use client";

export default function Home() {
  return (
    <div className="font-sans bg-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-600">MoonCosmetics</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-pink-500">Inicio</a>
          <a href="#productos" className="hover:text-pink-500">Productos</a>
          <a href="#sobre" className="hover:text-pink-500">Sobre Nosotros</a>
          <a href="#contacto" className="hover:text-pink-500">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="text-center py-20 bg-gradient-to-b from-pink-100 to-pink-50">
        <h2 className="text-4xl font-bold text-pink-700">Belleza Importada Para Ti</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Productos premium de maquillaje y skincare seleccionados cuidadosamente.
        </p>
        <a
          href="https://wa.me/51992200823"
          target="_blank"
          className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-pink-700"
        >
          Comprar Ahora
        </a>
      </section>

      {/* Productos */}
      <section id="productos" className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-8">Productos</h3>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          <div className="bg-pink-100 p-6 rounded-2xl shadow text-center">
            <h4 className="font-bold text-xl text-pink-700">Maquillaje</h4>
            <p className="mt-2">Bases, sombras, labiales de marcas importadas.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow text-center">
            <h4 className="font-bold text-xl text-pink-700">Skincare</h4>
            <p className="mt-2">Cremas faciales, serums y rutinas completas.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow text-center">
            <h4 className="font-bold text-xl text-pink-700">Accesorios</h4>
            <p className="mt-2">Brochas, esponjas y kits profesionales.</p>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre" className="py-20 bg-pink-50">
        <h3 className="text-3xl font-bold text-center text-pink-600">Sobre Nosotros</h3>
        <p className="mt-6 max-w-3xl mx-auto text-center text-lg">
          En MoonCosmetics importamos productos auténticos y de alta calidad.
          Ofrecemos asesoría personalizada para ayudarte a elegir lo mejor para tu piel.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-pink-600">Contacto</h3>
        <div className="flex flex-col items-center mt-6 space-y-4">
          <a
            href="https://www.instagram.com/camiluna1612"
            target="_blank"
            className="bg-pink-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-pink-700"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/51992200823"
            target="_blank"
            className="bg-pink-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-pink-700"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-pink-100 text-gray-700">
        © {new Date().getFullYear()} MoonCosmetics - Todos los derechos reservados
      </footer>
    </div>
  );
}
