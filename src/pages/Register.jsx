import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router";



export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.name}`);
    setFormData({ name: "", email: "", photo: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-white font-[Orbitron]">
      <div className="bg-[#0b0b0b] w-full max-w-md p-8 rounded-2xl border border-[#1a1a1a] shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-white">Create Account</h2>
        <p className="text-gray-400 mb-8">Join GameHub and start playing</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              type="url"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Create Account
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-700" />
          <span className="text-gray-500 mx-2 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <button className="w-full btn bg-white text-sky-400 font-semibold text-[18px] border-[#e5e5e5]">
                   <FcGoogle></FcGoogle> Google
                </button>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-sky-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
