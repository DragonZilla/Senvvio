export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Senvvio
            </h3>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              We create the future of premium streetwear. Exclusive drops, high-quality heavy cotton, and unapologetic aesthetics.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Find a Store</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Wholesale</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Stay Fresh</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get exclusive drops and 10% off your first order.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-sm"
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Senvvio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
