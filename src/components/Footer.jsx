import { Globe, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-900">DibiTech</h2>

            <p className="mt-4 text-gray-600 leading-7">
              Empowering the Future of Work with cutting-edge AI digital tools
              and resources.
            </p>

            <div className="flex gap-3 mt-6">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-indigo-900 hover:text-white transition">
                <Globe size={18} />
              </button>

              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-indigo-900 hover:text-white transition">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Marketplace */}

          <div>
            <h3 className="font-bold text-lg text-indigo-900 mb-5">
              Marketplace
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-indigo-900">
                  Explore
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-900">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-900">
                  Popular Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h3 className="font-bold text-lg text-indigo-900 mb-5">Support</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-indigo-900">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-900">
                  Terms
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-900">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="font-bold text-lg text-indigo-900 mb-5">
              Newsletter
            </h3>

            <p className="text-gray-600 mb-5">
              Stay updated with the latest AI trends.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button className="bg-indigo-900 text-white px-4 rounded-r-lg hover:bg-indigo-700 transition">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          © 2024 DibiTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
