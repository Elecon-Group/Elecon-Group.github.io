import React from 'react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="w-full py-4 px-4 md:px-8" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2">
        {/* Mobile Menu Icon (Container SVG) */}
        <button className="md:hidden p-2 rounded-lg transition-colors">
          <svg width="24" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <rect x="5" y="8.5" width="22" height="2" rx="1" fill="#1A1D21"/>
            <rect x="5" y="22.5" width="22" height="2" rx="1" fill="#1A1D21"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 