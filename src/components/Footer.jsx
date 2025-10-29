import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-auto">
      <div className="relative w-full bg-gray-100 px-4 md:px-6 py-8 pb-4">
      <div className="bg-white rounded-3xl border-8  border-[#f7861e]/50 shadow-2xl p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Top */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-200">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-[#fc5f2b] mb-2">Aseryx</h3>
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-8">
              <a href="#" className="text-gray-900 hover:text-[#fc5f2b] font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-900 hover:text-[#fc5f2b] font-medium transition-colors">Members</a>
              <a href="#" className="text-gray-900 hover:text-[#fc5f2b] font-medium transition-colors">Research Partners</a>
              <a href="#" className="text-gray-900 hover:text-[#fc5f2b] font-medium transition-colors">FAQ</a>
            </div>
            
            <div className="flex gap-4 mt-6 md:mt-0">
              {/* <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">X</a> */}
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-900">
            <div className="flex flex-wrap gap-4 md:gap-6 mb-4 md:mb-0">
              <Link to="/terms" className="hover:text-[#fc5f2b] transition-colors">Terms of Service</Link>
              <Link to="/terms" className="hover:text-[#fc5f2b] transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-[#fc5f2b] transition-colors">Do Not Sell or Share My Information</a>
            </div>
            
            <p>© 2025 Aseryx. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer
