'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-800 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Deadwood<span className="text-neutral-500">.software</span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#platform" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Platform
            </Link>
            <Link href="#gitlab-ci" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              GitLab CI
            </Link>
            <Link href="#technology" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Technology
            </Link>
            <Link href="#enterprise" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Enterprise
            </Link>
            <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Right: Icons and Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-neutral-400 hover:text-white transition-colors duration-200 p-2">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <button className="text-neutral-400 hover:text-white transition-colors duration-200 p-2">
              <UserIcon className="h-5 w-5" />
            </button>
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-semibold bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200 border border-neutral-700"
            >
              Watch Demo
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors duration-200"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
