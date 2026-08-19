import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="mx-auto max-w-5xl px-4 py-10 text-sm text-slate-500">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/register" replace />;
  }

  return children;
}
