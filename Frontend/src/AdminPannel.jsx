import React, { useEffect } from 'react';

const AdminPanel = () => {
  useEffect(() => {
    window.location.href = 'http://127.0.0.1:8000/aawas-admin/auth/';
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>Redirecting to Admin Panel...</p>
    </div>
  );
};

export default AdminPanel;
