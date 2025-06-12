"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              user?.role === "owner" ? "bg-green-600" : "bg-blue-600"
            }`}
          >
            <span className="text-white font-bold text-sm">PC</span>
          </div>
          <span className="text-lg font-bold text-gray-900">PickCourt</span>
        </Link>

        {/* User Menu */}
        {isAuthenticated && user ? (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  user.role === "owner" ? "bg-green-500" : "bg-blue-500"
                }`}
              >
                <span className="text-white text-xs font-medium">{user.name.charAt(0)}</span>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                </div>

                <Link
                  href={user.role === "owner" ? "/owner/profile" : "/profile"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hồ sơ
                </Link>

                {user.role === "owner" && (
                  <Link
                    href="/owner/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cài đặt
                  </Link>
                )}

                <hr className="my-1" />
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Đăng nhập
          </Link>
        )}
      </div>
    </header>
  );
}
