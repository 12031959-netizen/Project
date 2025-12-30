import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute() {
  const { isAuthed, user } = useAuth();

  if (!isAuthed) return <Navigate to="/" replace />;
  if (user?.role !== "admin") return <Navigate to="/" replace />;

  return <Outlet />;

  
}
