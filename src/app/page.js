export default function Home() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white">
      {/* HEADER MINIMALISTA */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-8 mix-blend-difference text-white">
        <div className="text-2xl font-black tracking-tighter uppercase">Inercia</div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#" className="hover:line-through">Shop</a>
          <a href="/admin" className="hover:line-through">Admin</a>
          <a href="#" className="hover:line-through">Cart (0)</a>
        </div>
      </nav>

      {/* HERO SECTION - ESTILO EDITORIAL */}
      <section className="h-screen flex flex-col justify-center px-8">
        <h1 className="text-[20vw] leading-[0.8] font-black uppercase tracking-tighter italic">
          Inercia<br />
          <span className="text-outline not-italic">Studio</span>
        </h1>
        
        <div className="flex justify-between items-end mt-12">
          <p className="max-w-xs text-[10px] uppercase tracking-widest leading-relaxed text-gray-500">
            A fashion concept store focused on movement, minimalist aesthetics and high-end urban wear.
          </p>
          <div className="text-right uppercase">
            <span className="block text-4xl font-light italic mb-4">2024 ©</span>
            <button className="bg-black text-white px-12 py-5 text-[10px] tracking-[0.3em] font-bold hover:scale-105 transition-transform">
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* GRID DE PRODUCTOS (SIMULADO) */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center italic text-gray-400">Campaign_01.jpg</div>
        <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center italic text-gray-400">Campaign_02.jpg</div>
        <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center italic text-gray-400">Campaign_03.jpg</div>
      </section>
    </main>
  );
}
