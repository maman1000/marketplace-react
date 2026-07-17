import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate(); // ✅ panggil hook di sini

  const [allUsers, setAllUsers] = useState([]); // semua data dari API
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10; // jumlah data per halaman

  useEffect(() => {
    // Cek apakah token tersedia di localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      // Jika tidak ada token, redirect ke halaman utama
      navigate("/");
      return;
    }
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const res = await api.get("/users");
      setAllUsers(res.data);
    } catch (err) {
      console.log(err);
      // Jika response 401 (Unauthorized), hapus token dan redirect ke home
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }
    } finally {
      setLoading(false);
    }
  };

  // Hitung total halaman berdasarkan jumlah data
  const totalItems = allUsers.length;
  const totalPages = Math.ceil(totalItems / perPage);

  // Ambil data untuk halaman aktif
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentUsers = allUsers.slice(startIndex, endIndex);

  // Fungsi pindah halaman
  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Fungsi untuk membuat array nomor halaman (dengan batas tampil)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Hitung indeks data yang ditampilkan
  const displayStart = totalItems === 0 ? 0 : startIndex + 1;
  const displayEnd = Math.min(endIndex, totalItems);

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f7f9fb] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Card utama */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-indigo-900 px-6 py-5 flex flex-wrap justify-between items-center gap-4">
              <h1 className="text-2xl font-bold text-white">Daftar User</h1>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                Total: {totalItems} User
              </span>
            </div>

            {/* Isi tabel */}
            <div className="p-6">
              {loading ? (
                <div className="text-center py-10 text-gray-500">
                  Loading data user...
                </div>
              ) : totalItems === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  Tidak ada user ditemukan.
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nama
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {currentUsers.map((user) => (
                          <tr
                            key={user.id}
                            className="hover:bg-gray-50 transition"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {user.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(
                                  user.role,
                                )}`}
                              >
                                {user.role}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <Link
                                to={`/users/${user.id}`}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition text-sm inline-block"
                              >
                                Detail
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Informasi pagination */}
                  <div className="mt-4 text-sm text-gray-600">
                    Menampilkan {displayStart} - {displayEnd} dari {totalItems}{" "}
                    user
                  </div>
                </>
              )}
            </div>

            {/* Komponen Pagination */}
            {!loading && totalPages > 1 && (
              <div className="px-6 pb-6 flex justify-center">
                <nav className="flex items-center gap-2">
                  {/* Tombol Previous */}
                  <button
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                    className={`px-3 py-1 rounded-md border ${
                      page === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-indigo-50 hover:border-indigo-300"
                    } transition`}
                  >
                    Prev
                  </button>

                  {/* Tombol nomor halaman */}
                  {getPageNumbers().map((num) => (
                    <button
                      key={num}
                      onClick={() => goToPage(num)}
                      className={`px-3 py-1 rounded-md border ${
                        num === page
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-white text-gray-700 hover:bg-indigo-50 hover:border-indigo-300"
                      } transition`}
                    >
                      {num}
                    </button>
                  ))}

                  {/* Tombol Next */}
                  <button
                    onClick={() => goToPage(page + 1)}
                    disabled={page === totalPages}
                    className={`px-3 py-1 rounded-md border ${
                      page === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-indigo-50 hover:border-indigo-300"
                    } transition`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>

          {/* Tombol kembali ke Dashboard */}
          <div className="mt-6">
            <Link
              to="/dashboard"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
