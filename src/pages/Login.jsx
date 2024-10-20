import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email kiriting"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Parol kiriting"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-4"
          >
            Login
          </button>

          <button
            type="button"
            className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            Guest User
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Akauntingiz yo'qmi?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Ro'yxatdan o'ting
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
