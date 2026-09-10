 
import logo from '../../assets/logo-text.png';
const Footer = () => {
    return (
<footer className="bg-white border-t border-gray-100 text-gray-600 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-0">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          
          {/* Brand Info (Left Column) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Dev Stack" className="h-8" />
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-gray-700 pt-2">
              <a href="#" className="hover:text-pink-600 transition">GitHub</a>
              <a href="#" className="hover:text-pink-600 transition">Twitter</a>
              <a href="#" className="hover:text-pink-600 transition">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h6 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h6 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Company</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h6 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;