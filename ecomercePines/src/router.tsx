import {Routes, Route} from 'react-router-dom'
import IndexPage from './Views/IndexPage'
import Layout from './layouts/Layout'
import TopPage from './Views/TopPage'
import PinesPage from './Views/PinesPage'
import LlaverosPage from './Views/LlaverosPage'
import LoginPage from './Views/LoginPage'
import RegistroPage from './Views/RegistroPage'
import CarritoPage from './Views/CarritoPage'
import ProtectedRoute from './components/ProtectedRoute'
import BlogPage from './Views/BlogPage'
import CompraPage from './Views/CompraPage'
import DetallesPage from './Views/DetallesPage'
import PagoExitoso from './Views/PagoExitoso'

export default function AppRouter() {
  return (
    
      <Routes>
        <Route path="/Login" element={ <LoginPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<ProtectedRoute><IndexPage /></ProtectedRoute> } index />
          <Route path="/Top" element={<ProtectedRoute><TopPage /></ProtectedRoute>} />
          <Route path="/Pines" element={<ProtectedRoute><PinesPage /></ProtectedRoute>} />
          <Route path="/Llaveros" element={<ProtectedRoute><LlaverosPage /></ProtectedRoute>} />
          <Route path="/Blog" element={<ProtectedRoute><BlogPage /></ProtectedRoute>} />
          <Route path="/Carrito" element={<ProtectedRoute><CarritoPage /></ProtectedRoute>} />
          <Route path="/Compra" element={<ProtectedRoute><CompraPage /></ProtectedRoute>} />
          <Route path="/Detalles/:id" element={<ProtectedRoute><DetallesPage /></ProtectedRoute>} />
          <Route path="/pago-exitoso" element={<ProtectedRoute><PagoExitoso /></ProtectedRoute>} />
          <Route path="/pago-error" element={<ProtectedRoute><PagoExitoso /></ProtectedRoute>} />
          <Route path="/pago-pendiente" element={<ProtectedRoute><PagoExitoso /></ProtectedRoute>} />
        </Route>
      </Routes>
  )
}