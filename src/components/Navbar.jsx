import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="w-full bg-transparent">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-[#fc5f2b] hover:bg-[#f7861e]/90 transition-all duration-200 shadow-lg"
            >
              <Menu className="w-5 h-5 text-black " />
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 flex items-center space-x-3 shadow-2xl border border-white/20 transition-all duration-500">
                {/* Home */}
                <Link
                  to="/"
                  className={`px-6 py-3 font-semibold transition-all text-sm relative overflow-hidden rounded-lg ${
                    location.pathname === '/'
                      ? 'bg-[#fc5f2b] text-white  shadow-lg'
                      : 'text-black  hover:bg-[#f7861e]/20'
                  }`}
                >
                  <span className="relativez-10">Home</span>
                </Link>

                {/* Members */}
                <Link
                  to="/members"
                  className={`px-6 py-3 font-semibold transition-all text-sm relative overflow-hidden rounded-lg ${
                    location.pathname === '/members'
                      ? 'bg-[#fc5f2b] text-white  shadow-lg'
                      : 'text-black  hover:bg-[#f7861e]/20'
                  }`}
                >
                  <span className="relative  z-10">Members</span>
                </Link>

                {/* Partners */}
                <Link
                  to="/partners"
                  className={`px-6 py-3 font-semibold transition-all text-sm relative overflow-hidden rounded-lg ${
                    location.pathname === '/partners'
                      ? 'bg-[#fc5f2b] text-white  shadow-lg'
                      : 'text-black  hover:bg-[#f7861e]/20'
                  }`}
                >
                  <span className="relative z-10">Research Partners</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Minimal Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white/95 backdrop-blur-xl rounded-l-3xl shadow-2xl border border-white/20">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/10">
              <h2 className="text-xl font-semibold text-gray-900">Aseryx</h2>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 backdrop-blur-sm ${
                  location.pathname === '/'
                    ? 'bg-[#fc5f2b] text-white shadow-lg border-[#fc5f2b]/80'
                    : 'text-gray-900 hover:bg-[#DDFC4E]/20 border border-white/20'
                }`}
              >
                <span className="font-medium">Home</span>
              </Link>

              <Link
                to="/members"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 backdrop-blur-sm ${
                  location.pathname === '/members'
                    ? 'bg-[#fc5f2b] text-white shadow-lg border-[#fc5f2b]/80'
                    : 'text-gray-900 hover:bg-[#DDFC4E]/20 border border-white/20'
                }`}
              >
                <span className="font-medium">Members</span>
              </Link>

              <Link
                to="/partners"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 backdrop-blur-sm ${
                  location.pathname === '/partners'
                    ? 'bg-[#fc5f2b] text-white shadow-lg border-[#fc5f2b]/80'
                    : 'text-gray-900 hover:bg-[#DDFC4E]/20 border border-white/20'
                }`}
              >
                <span className="font-medium">Research Partners</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar

