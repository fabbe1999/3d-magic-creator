import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import UserMenu from './UserMenu';
import AuthModal from './AuthModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const navItems = [
    { title: 'Processing', to: '/processing' },
    { title: 'Model Viewer', to: '/model-viewer' },
    { title: 'Dashboard', to: '/dashboard' },
    { title: 'Discover', to: '/discover' },
  ];

  return (
    <nav className="bg-navbar-light dark:bg-navbar-dark text-gray-800 dark:text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Qualia Studios</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">3D Model Creator</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Create <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/upload" className="w-full">Upload</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/text-to-3d" className="w-full">Text to 3D</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navItems.map(({ title, to }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {title}
              </Link>
            ))}
            <Link
              to="/discover"
              className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Discover
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <UserMenu
              user={user}
              onLogout={handleLogout}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </nav>
  );
};

export default Navbar;