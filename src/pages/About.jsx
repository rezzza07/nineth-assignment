import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
                <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl text-center space-y-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-sky-400">About</span> GameHive
        </h1>

        {/* Divider line */}
        <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full"></div>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
          Welcome to <span className="text-sky-400 font-semibold">GameHive Website</span> — where passion meets
          innovation. We create immersive worlds filled with adrenaline, teamwork,
          and tactical brilliance. Our mission is simple: to redefine gaming
          experiences that push every player to their limits.
        </p>

        {/* Feature section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-gray-800 hover:border-sky-400 transition">
            <h3 className="text-xl font-bold text-sky-400 mb-3">⚔️ Our Mission</h3>
            <p className="text-gray-300 text-sm">
              To deliver next-level gaming experiences that challenge, inspire, and
              unite players across the globe.
            </p>
          </div>

          <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-gray-800 hover:border-sky-400 transition">
            <h3 className="text-xl font-bold text-sky-400 mb-3">🎮 Our Games</h3>
            <p className="text-gray-300 text-sm">
              From high-speed combat to tactical warfare, our games are crafted with
              precision, creativity, and a passion for excellence.
            </p>
          </div>

          <div className="bg-[#0f0f0f] p-8 rounded-2xl border border-gray-800 hover:border-sky-400 transition">
            <h3 className="text-xl font-bold text-sky-400 mb-3">🌎 Our Community</h3>
            <p className="text-gray-300 text-sm">
              We believe in the power of community. Together, we build, play, and
              conquer — one victory at a time.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Link to="/"
            
            className="inline-block bg-sky-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-sky-300 transition"
          >
            Join Our Journey
          </Link>
        </div>
      </div>
    </section>
            <Footer></Footer>
        </div>
    );
};

export default About;