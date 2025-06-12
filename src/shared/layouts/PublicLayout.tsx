"use client";

import { PlayerNavbar } from "@/shared/ui/PlayerNavbar";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";
import { MobileHeader } from "@/shared/ui/MobileHeader";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <MobileHeader />

      {/* Desktop/Tablet Navbar */}
      <PlayerNavbar />

      {/* Main Content with proper spacing */}
      <main>{children}</main>

      {/* Public Footer - hidden on mobile */}
      <footer className="hidden md:block bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PC</span>
                </div>
                <span className="text-xl font-bold">PickCourt</span>
              </div>
              <p className="text-gray-300 text-sm">Nền tảng đặt sân thể thao hàng đầu Việt Nam</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Sản phẩm</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/features" className="text-gray-300 hover:text-white text-sm">
                    Tính năng
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-300 hover:text-white text-sm">
                    Bảng giá
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Công ty</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white text-sm">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white text-sm">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Pháp lý</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-300 hover:text-white text-sm">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-300 hover:text-white text-sm">
                    Điều khoản sử dụng
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300 text-sm">© 2024 PickCourt. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
