import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export default function Register() {
  const { createUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;

    
    if (name.length < 4) {
      setNameError("Name should be more than 4 characters");
      return;
    } else {
      setNameError("");
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long, include uppercase, lowercase, and a special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google User:", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Google sign-in failed. Please try again.");
      });
  };
  useEffect(() => {
      document.title = "Register - GameHive";
    }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-white font-[Orbitron]">
      <div className="bg-[#0b0b0b] w-full max-w-md p-8 rounded-2xl border border-[#1a1a1a] shadow-lg">
        <h2 className="text-3xl font-bold mb-2 text-white">Create Account</h2>
        <p className="text-gray-400 mb-8">Join GameHub and start playing</p>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            {nameError && <p className="text-xs text-red-500 mt-1">{nameError}</p>}
          </div>

          {/* Email */}
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

          {/* Photo URL */}
          <div>
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              type="url"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            {passwordError && (
              <p className="text-xs text-red-500 mt-1">{passwordError}</p>
            )}
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

        
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-sky-600 font-semibold text-[18px] py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          <FcGoogle className="text-2xl" /> Google
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
