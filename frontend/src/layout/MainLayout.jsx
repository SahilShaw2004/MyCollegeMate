import React from 'react';
import Sidebar from '../components/Sidebar';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex font-poppins">
      <Sidebar />
      <main className="flex-1 ml-64 bg-gradient-to-br from-mint-100 via-blue-50 to-violet-50 p-4 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default MainLayout; 