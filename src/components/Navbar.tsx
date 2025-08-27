import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Code2 } from "lucide-react";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills'},
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-grey dark:bg-gray-900 dark:border-gray-700">
      { /* Logo */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center'>
            <Code2 className='w-6 h-6 text-white' />
          </div>
        <span className="text-xl font-bold text-white ">Portfolio</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white dark:bg-gray-900">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
