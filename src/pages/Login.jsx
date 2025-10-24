import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';


export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logged in as ${formData.email}`);
        setFormData({ email: '', password: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="bg-[#00141c] w-full max-w-md p-8 rounded-2xl border border-[#022634] text-white">
                <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                <p className="text-gray-400 mb-8">Sign in to your GameHub account</p>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                        <div className="text-right mt-1">
                            <Link to="/forgot-password" className="text-sky-400 text-sm hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg font-semibold"
                    >
                        Sign In
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <hr className="flex-grow border-gray-700" />
                    <span className="text-gray-500 mx-2 text-sm">Or continue with</span>
                    <hr className="flex-grow border-gray-700" />
                </div>

                <button className="w-full btn bg-white text-sky-400 font-semibold text-[18px] border-[#e5e5e5]">
                    <FcGoogle></FcGoogle>Google
                </button>


                <p className="text-gray-400 text-sm text-center mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-sky-400 hover:underline">
                        Register</Link>

                </p>
            </div>
        </div>
    );
}
