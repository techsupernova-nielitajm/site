import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center">
        <div className="bg-zinc-600 text-white shadow-[0_0_100px_rgba(255,255,255,0.25)] rounded-full px-6 py-3 flex items-center gap-10">
          {/* Logo */}
          <div className="w-50">
            <img
              src=" hey.png"
              alt="Logo"
              className="object-contain h-full"
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6  text-xl">
           <button> <a href="/site/" className="hover:bg-zinc-800 px-2 hover:py-2 rounded-full">Home</a></button>
           <button> <a href="/site/#abt" className="hover:bg-zinc-800 px-2 hover:py-2 rounded-full">About</a></button>
           <button> <a href="/site/#/gallery" className="hover:bg-zinc-800 px-2 hover:py-2 rounded-full">Gallery</a></button>
           <button> <a href="/site/#con" className="hover:bg-zinc-800 px-2 hover:py-2 rounded-full">Contact</a></button>
           <button> <a href="/site/#/clubs" className="hover:bg-zinc-800 px-2 hover:py-2 rounded-full">Clubs Connect</a></button>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[72px] bg-white rounded-xl shadow-lg py-3 px-5 flex flex-col gap-2 text-sm mt-1">
            <a href="/site/" className="hover:text-blue-600">Home</a>
            <a href="/site/#abt" className="hover:text-blue-600">About</a>
            <a href="/site/#/gallery" className="hover:text-blue-600">Gallery</a>
            <a href="/site/#con" className="hover:text-blue-600">Contact</a>
            <a href="/site/#/clubs" className="hover:text-blue-600">Clubs Connect</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
