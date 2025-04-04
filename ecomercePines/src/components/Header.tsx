import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const { signOut } = UserAuth();
  const isActive = (route: string) =>
    path === route ? "text-orange-400" : "hover:text-orange-400";

  return (
    <>
      <header className="flex flex-col justify-between items-center w-full text-base mx-auto font-(family-name:Quicksand, Montserrat)">
        {/* <!-- Top bar --> */}
        <section className="px-4 w-full bg-gray-50">
          <div className="flex flex-row justify-between items-center max-w-7xl mx-auto py-3">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <a href="mailto:Chibiquiles@pedidos.com" className="text-black">
                  Chibiquiles@pedidos.com
                </a>
              </span>
              <span className="text-gray-400">|</span>
              <span>Envío gratis a partir de $799</span>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-black hover:text-orange-400">
                <i className="w-4 h-4 fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-black hover:text-orange-400">
                <i className="w-4 h-4 fab fa-twitter"></i>
              </a>
              <span className="text-gray-400">|</span>
              {/* <Link to="/Login" className="flex items-center gap-2 text-black hover:text-orange-400">
                                <i className="w-4 h-4 fas fa-user"></i> Login
                            </Link> */}
              <button
                onClick={signOut}
                className="flex items-center gap-2 text-black hover:text-orange-400"
              >
                <i className="w-4 h-4 fas fa-user"></i> Cerrar sesión
              </button>
            </div>
          </div>
        </section>

        <section className="w-full flex-row mx-auto px-4">
          <div className="flex flex-row justify-between max-w-7xl items-center mx-auto py-3">
            {/* <!-- Logo --> */}
            <div>
              <img src="/logo.png" alt="Logo" className="h-16" />
            </div>

            {/* <!-- Menu --> */}
            {/* <nav className="flex gap-9 font-medium text-black">
                            <Link to="/" className={isActive("/")}>HOME</Link>
                            <Link to="/Top" className={isActive("/Top")}>TOP</Link>
                            <Link to="/Categorias" className={isActive("/Categorias")}>CATEGORÍAS</Link>
                            <Link to="/Blog" className={isActive("/Blog")}>BLOG</Link>
                        </nav> */}

            <nav className="flex gap-9 font-medium text-black relative">
              <Link to="/" className={isActive("/")}>
                HOME
              </Link>
              <Link to="/Top" className={isActive("/Top")}>
                TOP
              </Link>

              {/* Categorías desplegable */}
              <div className="relative group">
                <button
                  className={`cursor-pointer ${
                    path.includes("/Pines") || path.includes("/Llaveros")
                      ? "text-orange-400"
                      : "hover:text-orange-400"
                  }`}
                >
                  CATEGORÍAS
                </button>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded z-10 w-full">
                  <Link
                    to="/Pines"
                    className="block px-4 py-2 text-sm text-black hover:text-orange-400 hover:bg-gray-100"
                  >
                    Pines
                  </Link>
                  <Link
                    to="/Llaveros"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-orange-400"
                  >
                    Llaveros
                  </Link>
                </div>
              </div>

              <Link to="/Blog" className={isActive("/Blog")}>
                BLOG
              </Link>
            </nav>

            {/* <!-- Icons --> */}
            <div className="flex items-center gap-6">
              {/* <div className="relative">
                <i className="fas fa-heart text-black text-xl"></i>
                <span className="absolute -top-2 -right-2 text-xs bg-orange-400 rounded-full px-1">
                  1
                </span>
              </div> */}
              <Link to="/carrito">
                <div className="relative cursor-pointer">
                  <i className="fas fa-shopping-bag text-black text-xl"></i>
                  {/* <span className="absolute -top-2 -right-2 text-xs bg-orange-400 rounded-full px-1">
                    3
                  </span> */}
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- Main navbar --> */}
      </header>
    </>
  );
}
