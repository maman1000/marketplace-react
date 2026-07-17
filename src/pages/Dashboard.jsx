// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ total: 0, seller: 0, buyer: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
    loadAllUsers();
  }, []);

  const getUser = async () => {
    try {
      const res = await api.get("/user"); // ambil profil user yang login
      setUser(res.data);
    } catch (err) {
      navigate("/");
    }
  };

  const loadAllUsers = async () => {
    try {
      const res = await api.get("/users"); // ambil semua user (sama dengan halaman Users)
      const allUsers = res.data;
      const total = allUsers.length;
      const seller = allUsers.filter((u) => u.role === "seller").length;
      const buyer = allUsers.filter((u) => u.role === "buyer").length;
      setStats({ total, seller, buyer });
    } catch (err) {
      console.log("Gagal mengambil data user:", err);
      // Jika gagal, biarkan stats tetap 0
    } finally {
      setLoading(false);
    }
  };

  if (!user || loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f7f9fb] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-indigo-900 px-6 py-5">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            </div>

            {/* Profile */}
            <div className="p-6 flex items-center space-x-6 border-b border-gray-100">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-3xl font-bold text-indigo-700">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#191c1e]">
                  {user.name}
                </h2>
                <p className="text-gray-600">{user.email}</p>
                <span
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === "admin"
                      ? "bg-purple-100 text-purple-800"
                      : user.role === "seller"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 bg-gray-50">
              <Link to="/users">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition flex items-center gap-2">
                  <span>📋</span> Daftar User
                </button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <p className="text-2xl font-bold text-indigo-900">
                {stats.total}
              </p>
              <p className="text-gray-600 text-sm">Total User</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <p className="text-2xl font-bold text-indigo-900">
                {stats.seller}
              </p>
              <p className="text-gray-600 text-sm">Seller</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <p className="text-2xl font-bold text-indigo-900">
                {stats.buyer}
              </p>
              <p className="text-gray-600 text-sm">Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
