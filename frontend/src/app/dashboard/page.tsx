"use client";

import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../components/ProtectedRoute';

const DashboardPage = () => {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-700">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Or a redirect, already handled by useEffect
  }

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="mb-6 text-lg text-gray-700">
            <p>Welcome, <span className="font-semibold">{user.name}</span>!</p>
            <p>Email: <span className="font-semibold">{user.email}</span></p>
            <p>Role: <span className="font-semibold">{user.role}</span></p>
          </div>
          <button
            onClick={logout}
            className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage; 