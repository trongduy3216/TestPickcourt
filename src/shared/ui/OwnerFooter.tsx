"use client";

export function OwnerFooter() {
  return (
    <footer className="hidden md:block bg-green-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">PC</span>
              </div>
              <span className="text-xl font-bold">PickCourt</span>
              <span className="text-sm bg-green-600 px-2 py-1 rounded-full">Owner</span>
            </div>
            <p className="text-green-200 text-sm">
              Nền tảng quản lý sân thể thao hàng đầu cho chủ sân
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-green-200 hover:text-white text-sm">
                App Mobile
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm"></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-green-200 text-sm">
                © 2024 PickCourt Business. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="/owner/privacy" className="text-green-200 hover:text-white text-sm">
                  Chính sách bảo mật
                </a>
                <a href="/owner/terms" className="text-green-200 hover:text-white text-sm">
                  Điều khoản kinh doanh
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="/owner/privacy" className="text-green-200 hover:text-white text-sm">
                  Chính sách bảo mật
                </a>
                <a href="/owner/terms" className="text-green-200 hover:text-white text-sm">
                  Điều khoản kinh doanh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
