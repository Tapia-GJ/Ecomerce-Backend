
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo y dirección */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6">
            <img src="/Logo_V6_LRWH.png" alt="Chibiquiles" className="mx-auto md:mx-0 w-36 mb-3" />
            <ul className="text-sm space-y-1">
              <li>
                <strong>Dirección:</strong> Cancún, Quintana Roo
              </li>
              <li>
                <strong>Teléfono:</strong> +998 123 4567
              </li>
              <li>
                <strong>Correo:</strong> Chibiquiles@pedidos.com
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="w-full md:w-1/3 text-center mb-6">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-400">
                <i className="fa fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-400">
                <i className="fa fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Suscripción */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h6 className="text-lg font-semibold">Únete a nuestra comunidad</h6>
            <p className="text-sm mt-1">
              Recibe actualizaciones por correo electrónico sobre nuestras últimas novedades y ofertas especiales.
            </p>
            <form className="mt-3 flex flex-col md:flex-row gap-2 items-center justify-end">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="px-3 py-2 border rounded w-full md:w-auto"
              />
              <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center">
          <p className="text-sm">© 2025 Chibiquiles. Todos los derechos reservados.</p>
          <div className="mt-2">
            <img src="/payment-item.png" alt="Métodos de pago" className="mx-auto h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}