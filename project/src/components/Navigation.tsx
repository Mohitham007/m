import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navigation() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-xl">CrowdFund Pro</h1>
            </div>
          </div>
          
          {user && (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <span className="text-white mr-4">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="p-2 text-white hover:bg-indigo-500 rounded-full"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-indigo-500 rounded-full"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user && (
              <button
                onClick={handleLogout}
                className="w-full text-left block px-3 py-2 text-white hover:bg-indigo-500"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}