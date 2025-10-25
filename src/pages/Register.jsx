
import { use } from "react";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";



export default function Register() {
  
const {createUser, setUser} = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({name,photo,email,password});
    createUser(email,password)
     .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
     })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-white font-[Orbitron]">
      <div className="bg-[#0b0b0b] w-full max-w-md p-8 rounded-2xl border border-[#1a1a1a] shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-white">Create Account</h2>
        <p className="text-gray-400 mb-8">Join GameHub and start playing</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
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
              
              placeholder="https://example.com/photo.jpg"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg font-semibold transition">
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
