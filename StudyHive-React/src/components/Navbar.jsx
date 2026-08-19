import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white">
            SH
          </span>
          <span className="text-lg font-bold text-slate-800">StudyHive</span>
        </Link>

        <div className="flex items-center gap-1 text-sm sm:gap-2">
          <Link to="/" className="rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
            Home
          </Link>
          <Link to="/about" className="rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
            About
          </Link>
          <Link to="/file-system" className="rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
            File Storage
          </Link>

          {user ? (
            <>
              <Link to="/dashboard" className="rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
                Dashboard
              </Link>
              <Link to="/chat" className="rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
                Chat
              </Link>
              <Link to="/profile" className="rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-full bg-slate-800 px-3 py-1.5 font-medium text-white hover:bg-slate-900"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/register"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1.5 font-medium text-white hover:opacity-90"
            >
              Sign Up
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
