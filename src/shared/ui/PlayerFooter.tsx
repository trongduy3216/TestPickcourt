"use client";

import Link from "next/link";

export function PlayerFooter() {
  return (
    <footer className="hidden md:block bg-blue-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">PC</span>
              </div>
              <span className="text-xl font-bold">PickCourt</span>
              <span className="text-sm bg-blue-600 px-2 py-1 rounded-full">Player</span>
            </div>
            <p className="text-blue-200 text-sm">Nền tảng đặt sân thể thao hàng đầu Việt Nam</p>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-200 hover:text-white text-sm">
                Tải App
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">
                Đánh giá
              </a>
            </div>
          </div>

          {/* Player Activities */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Hoạt động</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courts" className="text-blue-200 hover:text-white text-sm">
                  Tìm sân
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="text-blue-200 hover:text-white text-sm">
                  Đặt chỗ của tôi
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-blue-200 hover:text-white text-sm">
                  Lịch sử chơi
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-blue-200 hover:text-white text-sm">
                  Giải đấu
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-blue-200 hover:text-white text-sm">
                  Điểm thưởng
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Cộng đồng & Hỗ trợ
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/community" className="text-blue-200 hover:text-white text-sm">
                  Cộng đồng người chơi
                </a>
              </li>
              <li>
                <a href="/friends" className="text-blue-200 hover:text-white text-sm">
                  Tìm bạn chơi
                </a>
              </li>
              <li>
                <a href="/tips" className="text-blue-200 hover:text-white text-sm">
                  Mẹo chơi hay
                </a>
              </li>
              <li>
                <a href="/help" className="text-blue-200 hover:text-white text-sm">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-blue-200 hover:text-white text-sm">
                  Góp ý & Báo lỗi
                </a>
              </li>
            </ul>
          </div>

          {/* Account & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Tài khoản & Chính sách
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profile" className="text-blue-200 hover:text-white text-sm">
                  Hồ sơ cá nhân
                </Link>
              </li>
              <li>
                <a href="/subscription" className="text-blue-200 hover:text-white text-sm">
                  Gói thành viên
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-blue-200 hover:text-white text-sm">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/terms" className="text-blue-200 hover:text-white text-sm">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-200 hover:text-white text-sm">
                  Liên hệ hỗ trợ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-blue-200 text-sm">© 2024 PickCourt. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="/privacy" className="text-blue-200 hover:text-white text-sm">
                  Chính sách bảo mật
                </a>
                <a href="/terms" className="text-blue-200 hover:text-white text-sm">
                  Điều khoản sử dụng
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-200 text-sm">Hotline: </span>
              <a href="tel:1900-PICKCOURT" className="text-white font-medium text-sm">
                1900-PICKCOURT
              </a>
              <span className="text-blue-200 text-sm">|</span>
              <a href="mailto:support@pickcourt.com" className="text-white font-medium text-sm">
                support@pickcourt.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
