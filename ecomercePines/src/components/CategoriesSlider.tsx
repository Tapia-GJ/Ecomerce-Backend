import { Link } from "react-router-dom";

const categories = [
  { title: "Pines", img: "/categories/pines.jpg", link: "/pines" },
  { title: "Llaveros", img: "/categories/llaveros.jpg", link: "/llaveros" },
  { title: "Anime", img: "/categories/anime.jpg", link: "/Pines" },
  { title: "Cute", img: "/categories/cute.jpg", link: "/Pines" },
  { title: "Memes", img: "/categories/memes.jpg", link: "/Pines" },
];

export default function CategoriesSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative h-64 bg-cover bg-center rounded shadow-md overflow-hidden group"
            style={{ backgroundImage: `url(${cat.img})` }}
          >
            <Link className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center  font-bold bg-white/80 text-[#14213d] px-4 py-2 uppercase tracking-wide"
             to={cat.link}>{cat.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
