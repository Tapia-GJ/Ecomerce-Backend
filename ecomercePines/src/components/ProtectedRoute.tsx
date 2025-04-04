import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = UserAuth();
  // console.log(user, loading);
  if (loading) {
    return <div className="text-center py-10">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/Login" replace />;
  } 

  return <>{children}</>;
}
