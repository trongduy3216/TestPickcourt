"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/shared/utils/cn";
import { useAuthStore } from "@/store/authStore";

interface OwnerNavbarProps {
  className?: string;
}

export function OwnerNavbar({ className }: OwnerNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { user, logout } = useAuthStore();

  const ownerNavigation = [
    { name: "Dashboard", href: "/owner/dashboard" },
    { name: "Quản lý sân", href: "/owner/courts" },
    { name: "Đặt chỗ", href: "/owner/bookings" },
    { name: "Doanh thu", href: "/owner/revenue" },
    { name: "Khách hàng", href: "/owner/customers" },
  ];

  return (
    <nav
      className={cn("bg-green-600 shadow-sm border-b border-green-700 md:block hidden", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/owner/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">PC</span>
              </div>
              <span className="text-xl font-bold text-white">PickCourt</span>
              <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">Owner</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {ownerNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-green-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 text-sm rounded-full p-2 hover:bg-green-700 transition-colors"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    {user?.name.charAt(0) || "O"}
                  </span>
                </div>
                <span className="text-white">{user?.name || "Owner"}</span>
                <svg className="w-4 h-4 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link
                    href="/owner/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/owner/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Hồ sơ chủ sân
                  </Link>
                  <Link
                    href="/owner/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Cài đặt
                  </Link>
                  <Link
                    href="/owner/analytics"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Phân tích
                  </Link>
                  <hr className="my-1" />
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      logout();
                      setIsUserMenuOpen(false);
                    }}
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-100 hover:text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 transition-colors"
            >
              <span className="sr-only">Mở menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-600 border-t border-green-700">
            {ownerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-green-100 hover:text-white block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile User Section */}
            <div className="pt-4 pb-3 border-t border-green-700">
              <div className="space-y-1">
                <div className="flex items-center px-3 py-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {user?.name.charAt(0) || "O"}
                    </span>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user?.name || "Owner"}</div>
                    <div className="text-sm text-green-200">Chủ sân</div>
                  </div>
                </div>
                <Link
                  href="/owner/dashboard"
                  className="block px-3 py-2 text-base font-medium text-green-100 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/owner/profile"
                  className="block px-3 py-2 text-base font-medium text-green-100 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hồ sơ chủ sân
                </Link>
                <Link
                  href="/owner/settings"
                  className="block px-3 py-2 text-base font-medium text-green-100 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cài đặt
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 text-base font-medium text-green-100 hover:text-white"
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
