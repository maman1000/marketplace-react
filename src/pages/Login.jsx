import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", form);

      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login berhasil");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login gagal");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your DibiTech account</p>
        </div>

        <form onSubmit={login} className="space-y-5">
          <div>
            <label className="font-semibold">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-700 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-700 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
