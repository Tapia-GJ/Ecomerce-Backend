import SliderCard from "../components/SliderCardLlaveros";

export default function PinesPage() {
  return (
    <>
      {/* Banner */}
      <section>
        <div className="flex flex-col items-center justify-center text-center bg-gray-800 text-white px-6 py-10 rounded">
          <p className="font-quicksand text-2xl font-extrabold">Llaveros</p>
          <p className="font-quicksand text-sm text-gray-300">
            Home → Categorías / Llaveros
          </p>
        </div>
      </section>

      {/* Contenedor slider */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Título centrado */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-center w-fit mx-auto">
            Destacados
          </h2>
          <div className="w-48 h-1 bg-orange-400 mx-auto mt-2 rounded"></div>
        </div>

        {/* Slider centrado y limpio */}
        <div className="w-full">
          <SliderCard />
        </div>
      </div>



      {/* productos */}
      <div className="mt-10 mb-20 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {img: "/product/3l.jpg", category: "Llaveros", name: "Llavero Michi Abeja", price: 26, oldPrice: 34},
            {img: "/product/4l.jpg", category: "Llaveros", name: "Llaveros Pareja Memes", price: 35, oldPrice: 48},
            {img: "/product/6l.jpg", category: "Llaveros", name: "Llaveros Gatitos", price: 20, oldPrice: 27},
            {img: "/product/13l.jpg", category: "Llaveros", name: "Llaveros Michis", price: 30, oldPrice: 38},
            {img: "/product/14l.jpg", category: "Llaveros", name: "Llavero Pinguino", price: 22, oldPrice: 28},
            {img: "/product/16l.jpg", category: "Llaveros", name: "Llavero Payaso", price: 25, oldPrice: 30},

          ].map((product, index) => (
            <div
              key={index}
              className="w-64 group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Imagen cuadrada */}
              <div className="relative w-full aspect-square bg-gray-100">
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
                        className="bg-white text-black hover:text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition"
                      >
                        <i className={item.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Texto del producto */}
              <div className="p-4 text-center">
                <h6 className="font-medium text-gray-800 hover:text-gray-800 transition">
                  <a href="#">{product.name}</a>
                </h6>
                <h5 className="text-gray-800 font-bold">
                  ${product.price.toFixed(2)}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* fin */}
    </>
  );
}
