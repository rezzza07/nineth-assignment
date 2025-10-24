import { useState } from 'react';
import { Link } from 'react-router';


export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="bg-[#00141c] text-center py-16 px-6 rounded-2xl border border-[#022634]">
      <h2 className="text-3xl font-bold text-white mb-3">Stay Updated</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Subscribe to our newsletter and get the latest game releases, exclusive deals, and gaming news delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-black/60 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
        />
        <Link
          onClick={handleSubmit}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-center"
        >
          Subscribe
        </Link>
      </form>
    </div>
  );
}
