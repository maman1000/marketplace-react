import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/api"; // sesuaikan path axios instance Anda

const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Baca localStorage saat komponen mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  // Fungsi logout
  const handleLogout = async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setCurrentUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-indigo-900 hover:text-indigo-700 transition"
        >
          DibiTech
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#">Explore</a>
          <a href="#">Categories</a>
          <a href="#">Pricing</a>

          {/* Kondisional: jika user login */}
          {currentUser ? (
            <>
              {/* Tampilkan Dashboard hanya jika admin */}
              {currentUser.role === "admin" && (
                <Link
                  to="/dashboard"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                >
                  Dashboard
                </Link>
              )}
              {/* Tombol Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            /* Jika belum login */
            <Link
              to="/login"
              className="bg-indigo-900 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
