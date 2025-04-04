import Busqueda from "../components/Busqueda";
import CategoriesSlider from "../components/CategoriesSlider";
import AllProducts from "../components/AllProducts";
import BlogPreview from "../components/BlogPreview";
export default function IndexPage() {
  return (
    <>
      <Busqueda />
      {/* Banner */}
      <section className="max-w-11/12 mx-auto bg-[url('/banner.jpg')] bg-center min-h-[300px]  font-(family-name:Quicksand, Montserrat) bg-cover rounded-xl">
        <div className="max-w-7xl mx-auto px-4 py-20 flex md:flex-row items-center">
          <div className="sm:text-center md:text-left p-4 rounded-lg">
            <span className="text-orange-400 text-base uppercase">Pines y Llaveros</span>
            <h2 className="text-6xl text-white font-bold mt-2">Chibiquiles</h2>
            <p className="text-[rgb(126,124,124)] mt-2">
              Sabrosos de corazón, coleccionables de profesión
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-orange-400 text-white rounded-md hover:bg-gray-800 transition"
            >
              Descubrir
            </a>
          </div>
        </div>
      </section>
      <CategoriesSlider />
      <AllProducts />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-10">
        <img src="/banner/banner-1.jpg" alt="Banner 1" className="w-full rounded" />
        <img src="/banner/banner-2.jpg" alt="Banner 2" className="w-full rounded" />
      </div>

      <BlogPreview />

    </>
  )
}