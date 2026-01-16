

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {
    
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // forces re-render on route change

  const toggleMenu = () => setOpen(!open);

  // Check cookie on mount or route change
  useEffect(() => {
    const auth = Cookies.get('auth') === 'true';
    setIsLoggedIn(auth);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove('auth');
    setIsLoggedIn(false);
    toast.success('Logged out successfully!');
    router.push('/login'); // redirect to login
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Items', href: '/items' },
    { name: 'Add Item', href: '/add-item' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <Toaster position="top-right" />
      <nav className="bg-[#CE8946] text-gray-100 fixed w-full z-50 shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-xl cursor-pointer">
              <Link href="/">MobileShop</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-400"
                >
                  {link.name}
                </Link>
              ))}

              {!isLoggedIn ? (
                <Link
                  href="/login"
                  className="px-3 py-1 bg-white text-[#CE8946] rounded-md font-semibold hover:opacity-90 transition"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 bg-white text-[#CE8946] rounded-md font-semibold hover:opacity-90 transition"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                {open ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-900">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {!isLoggedIn ? (
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-white text-[#CE8946] hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-white text-[#CE8946] hover:opacity-90"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
