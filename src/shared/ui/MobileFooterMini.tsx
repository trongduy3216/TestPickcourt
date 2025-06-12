"use client";

import { useAuthStore } from "@/store/authStore";

export function MobileFooterMini() {
  const { user } = useAuthStore();
  const isOwner = user?.role === "owner";

  return (
    <div className="md:hidden bg-gray-100 text-center py-4 text-xs text-gray-600">
      <div className="space-y-2">
        <div className="flex justify-center space-x-4">
          <a href="/help" className="hover:text-gray-800">
            Trợ giúp
          </a>
          <a href="/contact" className="hover:text-gray-800">
            Liên hệ
          </a>
          <a href="/privacy" className="hover:text-gray-800">
            Chính sách
          </a>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <div
            className={`w-4 h-4 rounded flex items-center justify-center ${
              isOwner ? "bg-green-600" : "bg-blue-600"
            }`}
          >
            <span className="text-white text-xs font-bold">PC</span>
          </div>
          <span>© 2024 PickCourt</span>
        </div>
      </div>
    </div>
  );
}
