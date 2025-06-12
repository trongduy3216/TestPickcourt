"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/shared/utils/cn";

export function BottomNavigation() {
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuthStore();

  // Don't show on auth pages
  const authPages = ["/login", "/register", "/forgot-password"];
  if (authPages.some((page) => pathname.startsWith(page))) {
    return null;
  }

  // Navigation items based on user role
  const getNavigationItems = () => {
    if (!isAuthenticated) {
      // Guest navigation
      return [
        { name: "Trang chủ", href: "/" },
        { name: "Tính năng", href: "/features" },
        { name: "Bảng giá", href: "/pricing" },
        { name: "Đăng nhập", href: "/login" },
      ];
    }

    if (user?.role === "owner") {
      // Owner navigation
      return [
        { name: "Dashboard", href: "/owner/dashboard" },
        { name: "Sân", href: "/owner/courts" },
        { name: "Đặt chỗ", href: "/owner/bookings" },
        { name: "Doanh thu", href: "/owner/revenue" },
        { name: "Khách hàng", href: "/owner/customers" },
      ];
    } else {
      // Player navigation
      return [
        { name: "Trang chủ", href: "/" },
        { name: "Tìm sân", href: "/courts" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Đặt chỗ", href: "/my-bookings" },
        { name: "Hồ sơ", href: "/profile" },
      ];
    }
  };

  const navigationItems = getNavigationItems();
  const themeColor = user?.role === "owner" ? "green" : "blue";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-2 py-1 z-50 shadow-lg">
      <div className="flex justify-around">
        {navigationItems.map((item) => {
          const isActive =
            pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center min-w-0 px-2 py-2 text-xs font-medium transition-colors",
                isActive
                  ? themeColor === "green"
                    ? "text-green-600"
                    : "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              <span className="truncate max-w-full">{item.name}</span>
              {isActive && (
                <div
                  className={cn(
                    "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-t",
                    themeColor === "green" ? "bg-green-600" : "bg-blue-600"
                  )}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
