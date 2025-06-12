"use client";

import { useAuthStore } from "@/store/authStore";
import { Button } from "@/shared/ui/button";
import { useOwnerRoute } from "@/shared/hooks/useProtectedRoute";

export default function OwnerDashboardPage() {
  const { user } = useAuthStore();
  const { loading, canAccess } = useOwnerRoute();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!canAccess || !user) {
    return null; // Will redirect via hook
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Owner Dashboard</h1>
          <p className="text-gray-600">Chào mừng chủ sân {user.name}!</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Cards */}
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="text-green-600"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-green-600">Tổng số sân</p>
                  <p className="text-2xl font-bold text-green-900">12</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="text-blue-600"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-blue-600">Đặt chỗ hôm nay</p>
                  <p className="text-2xl font-bold text-blue-900">25</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="text-yellow-600"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-yellow-600">Doanh thu tháng</p>
                  <p className="text-2xl font-bold text-yellow-900">45M</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="text-purple-600"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-600">Khách hàng</p>
                  <p className="text-2xl font-bold text-purple-900">234</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Thao tác nhanh</h3>
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700">Thêm sân mới</Button>
                <Button variant="outline" className="w-full">
                  Xem báo cáo
                </Button>
                <Button variant="outline" className="w-full">
                  Cài đặt sân
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Đặt chỗ gần đây</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-medium">Sân tennis #1</p>
                    <p className="text-xs text-gray-500">14:00 - 16:00</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Đã xác nhận
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-medium">Sân badminton #3</p>
                    <p className="text-xs text-gray-500">16:00 - 18:00</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Chờ xác nhận
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="text-sm font-medium">Sân bóng đá #1</p>
                    <p className="text-xs text-gray-500">18:00 - 20:00</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Đã xác nhận
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
