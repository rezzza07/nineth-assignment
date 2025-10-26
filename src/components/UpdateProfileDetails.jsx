import React, { useState } from "react";

const UpdateProfileDetails = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    photoURL: localStorage.getItem("photoURL") || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("photoURL", user.photoURL);
    window.location.href = "/profile";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-full max-w-md border border-sky-400">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black border border-sky-400 text-white focus:outline-none focus:border-sky-300"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black border border-sky-400 text-white focus:outline-none focus:border-sky-300"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={user.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black border border-sky-400 text-white focus:outline-none focus:border-sky-300"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white border border-sky-400 rounded-xl hover:bg-sky-400 hover:text-black transition font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileDetails;
