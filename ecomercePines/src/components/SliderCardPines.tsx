import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { getFeaturedProducts } from "../services/api"; // Asegúrate de tener esta función

import "swiper/swiper-bundle.css";

export default function SliderCardPines({ forceFullWidth = false }: { forceFullWidth?: boolean }) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getFeaturedProducts();
        const formatted = result
          .map((item: any) => item.productos)
          .filter((p: any) => p !== null);
        setProducts(formatted);
      } catch (err) {
        console.error("Error al obtener productos destacados:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="w-full px-2 sm:px-4">
      <div className="mb-8">
        <Swiper
          className="w-full"
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000 }}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: forceFullWidth ? 4 : 3 },
            1280: { slidesPerView: forceFullWidth ? 2 : 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="w-64 flex flex-col items-center text-center group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                {/* Imagen */}
                <div className="relative w-full h-52 bg-gray-100">
                  <img
                    src={product.imagen_path}
                    alt={product.nombre}
                    className="w-full h-full object-cover"
                  />

                  <ul className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    {[
                      { icon: "fa fa-heart", href: "#" },
                      { icon: "fa fa-retweet", href: "#" },
                      { icon: "fa fa-shopping-cart", href: "#" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="bg-white text-black hover:text-orange-400 rounded-full w-10 h-10 flex items-center justify-center shadow transition"
                        >
                          <i className={item.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4">
                  <span className="text-xs text-gray-500">Pines</span>
                  <h6 className="font-medium text-gray-800 hover:text-gray-800 transition">
                    <a href="#">{product.nombre}</a>
                  </h6>
                  <h5 className="text-gray-800 font-bold">
                    ${product.precio?.toFixed(2)}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
