import { useState } from "react";
import SliderCard from "../components/SliderCard";
import AllProducts from "../components/AllProducts";

export default function TopPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {/* Banner */}
      <section>
        <div className="flex flex-col items-center justify-center text-center bg-gray-800 text-white px-6 py-10 rounded">
          <p className="font-quicksand text-2xl font-extrabold">Top</p>
          <p className="font-quicksand text-sm text-gray-300">Home → Shop</p>
        </div>
      </section>
      <div className="container mx-auto px-2 py-4">
        {/* Botón Mostrar/Ocultar Filtros */}
        <div className="flex justify-start mb-3">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-xs text-gray-700 font-medium bg-orange-400 px-3 py-1 rounded hover:bg-orange-400 transition"
          >
            {showSidebar ? "Ocultar filtros" : "Mostrar filtros"}
          </button>
        </div>

        {/* Layout filtros + slider */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Filtros (Aside) */}
          {showSidebar && (
            <aside className="w-full lg:w-1/4 p-4 space-y-6 bg-white rounded border border-gray-200">
              {/* Categoría */}
              <div>
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  Categoría
                </h4>
                <ul className="space-y-1 text-sm">
                  {["Pines", "Llaveros", "Personalizados"].map(
                    (item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="block px-2 py-1 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Precio */}
              <div>
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  Precio
                </h4>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="$ Min"
                    className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <input
                    type="number"
                    placeholder="$ Max"
                    className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Colores */}
              <div>
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  Colores
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      name: "Blanco",
                      color: "bg-white",
                      ring: "ring-gray-300",
                    },
                    {
                      name: "Gris",
                      color: "bg-gray-500",
                      ring: "ring-gray-500",
                    },
                    { name: "Rojo", color: "bg-red-500", ring: "ring-red-500" },
                    { name: "Negro", color: "bg-black", ring: "ring-black" },
                    {
                      name: "Azul",
                      color: "bg-blue-500",
                      ring: "ring-blue-500",
                    },
                    {
                      name: "Verde",
                      color: "bg-green-500",
                      ring: "ring-green-500",
                    },
                  ].map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 cursor-pointer text-sm"
                    >
                      <input
                        type="radio"
                        name="color"
                        className="hidden peer"
                      />
                      <span
                        className={`w-5 h-5 rounded-full border ${item.color} peer-checked:ring-2 ${item.ring}`}
                      />
                      <span className="text-gray-700">{item.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tamaños */}
              <div>
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  Tamaños
                </h4>
                <div className="space-y-1 text-sm">
                  {["Grande", "Mediano", "Pequeño", "Mini"].map(
                    (size, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-blue-600"
                      >
                        <input
                          type="radio"
                          name="size"
                          value={size.toLowerCase()}
                        />
                        {size}
                      </label>
                    )
                  )}
                </div>
              </div>
            </aside>
          )}

          {/* Slider */}
          {/* Slider - usa todo el ancho disponible */}
          <div
            className={`w-full transition-all duration-300 ${
              showSidebar ? "lg:w-3/4" : "lg:w-full"
            }`}
          >
            <div
              className={`transition-all duration-300 ${
                showSidebar ? "lg:w-3/4" : "w-full"
              } flex`}
            >
              <SliderCard forceFullWidth={!showSidebar} />
            </div>
          </div>
        </div>

        <AllProducts />

        {/* fin */}
      </div>
    </>
  );
}
