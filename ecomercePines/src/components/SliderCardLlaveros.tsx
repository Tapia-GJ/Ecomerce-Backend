import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Estilos oficiales Swiper
import "swiper/swiper-bundle.css";

const products = [
    {img: "/product/3l.jpg", category: "Llaveros", name: "Llavero Michi Abeja", price: 26, oldPrice: 34},
    {img: "/product/4l.jpg", category: "Llaveros", name: "Llaveros Pareja Memes", price: 35, oldPrice: 48},
    {img: "/product/6l.jpg", category: "Llaveros", name: "Llaveros Gatitos", price: 20, oldPrice: 27},
    {img: "/product/13l.jpg", category: "Llaveros", name: "Llaveros Michis", price: 30, oldPrice: 38},
    {img: "/product/14l.jpg", category: "Llaveros", name: "Llavero Pinguino", price: 22, oldPrice: 28},
    {img: "/product/16l.jpg", category: "Llaveros", name: "Llavero Payaso", price: 25, oldPrice: 30},
    
];

export default function SliderCard({
  forceFullWidth = false,
}: {
  forceFullWidth?: boolean;
}) {
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
            0: { slidesPerView: 1.2 }, // Se verá más grande y el siguiente apenas asomado
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
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Íconos al hover */}
                  <ul className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    {[
                      { icon: "fa fa-heart", href: "#" },
                      { icon: "fa fa-retweet", href: "#" },
                      { icon: "fa fa-shopping-cart", href: "#" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="bg-white text-black hover:text-blue rounded-full w-10 h-10 flex items-center justify-center shadow transition"
                        >
                          <i className={item.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Texto */}
                <div className="p-4">
                  <span className="text-xs text-gray-500">
                    {product.category}
                  </span>
                  <h6 className="font-medium text-gray-800 hover:text-gray-800 transition">
                    <a href="#">{product.name}</a>
                  </h6>
                  <h5 className="text-gray-800 font-bold">
                    ${product.price.toFixed(2)}{" "}
                    <span className="line-through text-gray-400 text-sm">
                      ${product.oldPrice?.toFixed(2)}
                    </span>
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
