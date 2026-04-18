// src/app/admin/page.js
export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 md:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-10 text-black">
          Dashboard <span className="text-gray-300 font-light">/ Inercia</span>
        </h1>
        
        <div className="bg-white border border-gray-200 p-8 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6 border-b pb-4">Gestionar Inventario</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Nombre de la prenda" className="border-b p-3 outline-none focus:border-black text-sm" />
            <input type="number" placeholder="Precio (€)" className="border-b p-3 outline-none focus:border-black text-sm" />
            <button className="md:col-span-2 bg-black text-white py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-gray-800 transition-colors">
              Actualizar Tienda
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
