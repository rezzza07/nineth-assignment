import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const initialEmail = location.state?.email || '';
    const [email, setEmail] = useState(initialEmail);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('Password reset link sent! Check your email.');
                setTimeout(() => {
                    window.open('https://mail.google.com');
                    navigate('/auth/login');
                }, 3000);
            })
            .catch((error) => {
                setError(error.message);
            });

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="bg-[#0b0b0b] w-full max-w-md p-8 rounded-2xl border border-[#1a1a1a] shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
                <p className="text-gray-400 mb-6">
                    Enter your email to receive password reset link
                </p>

                <form onSubmit={handleReset} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    {error && <p className="text-xs text-red-500">{error}</p>}
                    {message && <p className="text-xs text-green-500">{message}</p>}

                    <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 py-2 rounded-lg font-semibold transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    Remember your password?{' '}
                    <Link to="/auth/login" className="text-sky-400 hover:underline">
                        LogIn
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
