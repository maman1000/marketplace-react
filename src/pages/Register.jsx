import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const register = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/register", form);

      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Register berhasil");

      // navigate("/dashboard");
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Register gagal",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-4xl font-bold text-indigo-900 cursor-pointer">
              DibiTech
            </h1>
          </Link>

          <p className="text-gray-500 mt-2">Join AI Digital Marketplace</p>
        </div>

        <form onSubmit={register} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="font-semibold">Full Name</label>

            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-700 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>

            <input
              type="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-700 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold">Password</label>

            <input
              type="password"
              placeholder="********"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-700 outline-none"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="font-semibold">Role</label>

            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-700 outline-none"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
