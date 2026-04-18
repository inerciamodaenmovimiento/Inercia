// Dependencias: React, Tailwind CSS, Lucide-react (para íconos)
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronRight, Settings } from 'lucide-react';

const InerciaModa = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Estado del Administrador: Configuración editable de la tienda
  const [siteConfig, setSiteConfig] = useState({
    brandName: "INERCIA",
    slogan: "Moda en Movimiento",
    heroTitle: "ESTÉTICA FLUIDA",
    primaryColor: "#000000",
  });

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      
      {/* --- NAVEGACIÓN --- */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
        <div className="text-2xl font-light tracking-[0.2em]">{siteConfig.brandName}</div>
        
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#" className="hover:opacity-50 transition underline-offset-4 hover:underline">Colección</a>
          <a href="#" className="hover:opacity-50 transition">Editorial</a>
          <a href="#" className="hover:opacity-50 transition">Tienda</a>
        </div>

        <div className="flex items-center gap-5">
          {/* Botón de Admin */}
          <button 
            onClick={() => setIsAdminOpen(!isAdminOpen)} 
            className="p-2 hover:bg-white/10 rounded-full transition"
            title="Panel de Control"
          >
            <Settings size={20} />
          </button>
          <ShoppingBag size={20} strokeWidth={1.5} />
          <Menu className="md:hidden" size={20} />
        </div>
      </nav>

      {/* --- SECCIÓN HERO (Inspiración Eunoia) --- */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="overflow-hidden mb-2">
          <h1 className="text-7xl md:text-[130px] font-light leading-none tracking-tighter uppercase italic">
            {siteConfig.heroTitle}
          </h1>
        </div>
        <p className="text-sm uppercase tracking-[0.5em] opacity-60 mb-10">{siteConfig.slogan}</p>
        
        <button className="group relative border border-black px-12 py-5 text-[10px] uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-white">
          <span className="relative z-10">Explorar la Nueva Era</span>
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </section>

      {/* --- GRILLA DE PRODUCTOS --- */}
      <section className="px-8 pb-32 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Producto 1 */}
        <div className="group cursor-pointer">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src="https://unsplash.com" 
               alt="Moda Inercia" 
               className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" 
             />
          </div>
          <div className="mt-6 flex justify-between items-start">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium">Top Cinético 01</h3>
              <p className="text-xs opacity-40 mt-1">Pre-Order Verano</p>
            </div>
            <span className="text-sm font-light">$120.00</span>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="group cursor-pointer md:mt-24">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src="https://unsplash.com" 
               alt="Moda Inercia" 
               className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" 
             />
          </div>
          <div className="mt-6 flex justify-between items-start">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-medium">Vestido Fluidez</h3>
              <p className="text-xs opacity-40 mt-1">Limited Edition</p>
            </div>
            <span className="text-sm font-light">$245.00</span>
          </div>
        </div>
      </section>

      {/* --- PANEL DE ADMINISTRADOR (CMS SIMULADO) --- */}
      {isAdminOpen && (
        <div className="fixed top-24 right-8 w-80 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-8 z-[60] border border-gray-100 rounded-lg animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="font-bold text-[11px] uppercase tracking-[0.2em] text-gray-500">Configuración Visual</h2>
            <X size={16} className="cursor-pointer hover:rotate-90 transition-transform" onClick={() => setIsAdminOpen(false)} />
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="text-[9px] uppercase font-bold text-black block mb-2">Nombre de Marca</label>
              <input
                className="w-full bg-gray-50 border-none rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-black outline-none transition"
                value={siteConfig.brandName}
                onChange={(e) => setSiteConfig({...siteConfig, brandName: e.target.value})}
              />
            </div>
            
            <div>
              <label className="text-[9px] uppercase font-bold text-black block mb-2">Título de Bienvenida</label>
              <input
                className="w-full bg-gray-50 border-none rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-black outline-none transition"
                value={siteConfig.heroTitle}
                onChange={(e) => setSiteConfig({...siteConfig, heroTitle: e.target.value})}
              />
            </div>

            <div className="pt-4">
              <div className="bg-black text-white text-[10px] text-center py-3 rounded uppercase tracking-widest opacity-80">
                Cambios guardados localmente
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Minimalista */}
      <footer className="p-8 border-t border-black/5 text-[9px] uppercase tracking-[0.3em] flex justify-between opacity-40">
        <span>© 2024 {siteConfig.brandName}</span>
        <span>Hecho para el movimiento</span>
      </footer>
    </div>
  );
};

export default InerciaModa;
