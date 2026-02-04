import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-3">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          <p>© 2026 Acharya Ji Online. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-orange-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-600 transition">Terms of Service</a>
          <a href="#" className="hover:text-orange-600 transition">Help Center</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;