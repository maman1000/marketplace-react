import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek apakah token tersedia di localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      // Jika tidak ada token, redirect ke halaman utama
      navigate("/");
      return;
    }
    getUser();
  }, [id]);

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/users/${id}`); // sesuaikan dengan endpoint backend
      setUser(res.data);
    } catch (err) {
      console.log(err);
      alert("User tidak ditemukan");
      navigate("/users");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk menentukan warna badge berdasarkan role
  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "seller":
        return "bg-blue-100 text-blue-800";
      case "buyer":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#f7f9fb] py-10 px-4 flex items-center justify-center">
          <div className="text-gray-500 text-lg">Loading user...</div>
        </div>
      </>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f7f9fb] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header dengan latar indigo */}
            <div className="bg-indigo-900 px-6 py-5">
              <h1 className="text-2xl font-bold text-white">User Detail</h1>
            </div>

            {/* Profile Section */}
            <div className="p-6 flex items-center space-x-6 border-b border-gray-100">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-3xl font-bold text-indigo-700">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#191c1e]">
                  {user.name}
                </h2>
                <span
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadgeColor(
                    user.role,
                  )}`}
                >
                  {user.role}
                </span>
              </div>
            </div>

            {/* Info List */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">ID</span>
                <strong className="text-[#191c1e]">{user.id}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Nama</span>
                <strong className="text-[#191c1e]">{user.name}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Email</span>
                <strong className="text-[#191c1e]">{user.email}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Role</span>
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(
                    user.role,
                  )}`}
                >
                  {user.role}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Dibuat</span>
                <strong className="text-[#191c1e]">
                  {new Date(user.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </strong>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600 font-medium">
                  Terakhir Update
                </span>
                <strong className="text-[#191c1e]">
                  {new Date(user.updated_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </strong>
              </div>
            </div>

            {/* Tombol Kembali */}
            <div className="p-6 bg-gray-50">
              <Link
                to="/users"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
              >
                ← Kembali ke Daftar User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
