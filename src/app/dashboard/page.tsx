"use client";

import { useAuthStore } from "@/store/authStore";
import { usePlayerRoute } from "@/shared/hooks/useProtectedRoute";

export default function DashboardPage() {
  const { user } = useAuthStore();
  const { loading, canAccess } = usePlayerRoute();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!canAccess || !user) {
    return null; // Will redirect via hook
  }

  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-8 shrink-0 bg-blue-50 h-[1000px]">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Player</h1>
          <p className="text-gray-600">Chào mừng trở lại, {user.name}!</p>
        </div>
        <div className="size-full"></div>
      </div>
    </div>
  );
}
