export default function Admin() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] p-8 md:p-20">
      <header className="flex justify-between items-end mb-20">
        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-2 font-bold">Inercia Backend</p>
          <h1 className="text-6xl font-black uppercase tracking-tighter">Dashboard</h1>
        </div>
        <a href="/" className="text-xs font-bold underline uppercase tracking-widest">Back to Store</a>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario de Carga */}
        <div className="lg:col-span-1 bg-white p-8 border border-gray-200 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-8 border-b pb-4">Add Product</h2>
          <form className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400">Product Name</label>
              <input type="text" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400">Price (USD)</label>
              <input type="number" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" />
            </div>
            <button className="w-full bg-black text-white p-5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800">
              Update Catalog
            </button>
          </form>
        </div>

        {/* Listado de Productos (Vista Previa) */}
        <div className="lg:col-span-2 bg-white p-8 border border-gray-200 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-8 border-b pb-4">Live Inventory</h2>
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-gray-400 uppercase tracking-widest border-b">
                <th className="py-4">Item</th>
                <th className="py-4">Status</th>
                <th className="py-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-6 font-bold uppercase">Oversized Hoodie "Daze"</td>
                <td className="py-6 italic text-gray-400">In Stock</td>
                <td className="py-6 text-right font-black">$120.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
