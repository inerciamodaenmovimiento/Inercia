// src/app/page.js
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Minimalista */}
      <nav className="p-8 flex justify-between items-center fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50">
        <h1 className="text-2xl font-black uppercase tracking-tighter italic">Inercia</h1>
        <div className="flex gap-10 text-[10px] uppercase font-bold tracking-[0.3em]">
          <a href="/" className="hover:line-through">Shop</a>
          <a href="/admin" className="hover:line-through">Admin</a>
        </div>
      </nav>

      {/* Hero Editorial: Moda en Movimiento */}
      <header className="h-screen flex flex-col justify-center items-center px-6">
        <h2 className="text-[18vw] font-black uppercase leading-[0.75] tracking-tighter text-center">
          Inercia<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>Studio</span>
        </h2>
        <div className="mt-12 flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.6em] text-gray-400 mb-8 italic">Moda en Movimiento</p>
          <button className="border border-black px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            Ver Colección 2024
          </button>
        </div>
      </header>
    </main>
  );
}
