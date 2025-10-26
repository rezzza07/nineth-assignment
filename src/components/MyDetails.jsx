import React, { useState, useEffect } from "react";

const MyDetails = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    photoURL: "",
  });

  useEffect(() => {
    setUser({
      name: localStorage.getItem("name") || "John Doe",
      email: localStorage.getItem("email") || "john@example.com",
      photoURL: localStorage.getItem("photoURL") || "https://via.placeholder.com/150",
    });
  }, []);

  const handleUpdateClick = () => {
    window.location.href = "/update";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-center w-[90%] md:w-[400px] border border-sky-400">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-sky-400 mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold mb-2">Name: {user.name}</h2>
        <p className="text-gray-400 mb-6">Email: {user.email}</p>

        <button
          onClick={handleUpdateClick}
          className="px-6 py-2 bg-black text-white border border-sky-400 rounded-xl hover:bg-sky-400 hover:text-black transition font-semibold"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyDetails;
