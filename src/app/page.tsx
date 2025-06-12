import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Đặt sân thể thao
            <span className="block text-blue-200">dễ dàng và nhanh chóng</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Tìm và đặt sân tennis, badminton, bóng đá và nhiều môn thể thao khác tại hơn 1000+ địa
            điểm trên toàn quốc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Đặt sân ngay
            </Button>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Đăng nhập
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn PickCourt?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp trải nghiệm đặt sân tốt nhất với công nghệ hiện đại
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Đặt sân nhanh</h3>
              <p className="text-gray-600">
                Đặt sân chỉ với vài thao tác đơn giản, xác nhận ngay lập tức
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chất lượng cao</h3>
              <p className="text-gray-600">
                Tất cả sân đều được kiểm tra chất lượng và duy trì tiêu chuẩn cao
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Giá cả hợp lý</h3>
              <p className="text-gray-600">
                Giá cả minh bạch, nhiều ưu đãi và chương trình khuyến mãi hấp dẫn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Các môn thể thao</h2>
            <p className="text-xl text-gray-600">Đa dạng các loại sân thể thao cho mọi sở thích</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Tennis", count: "200+ sân" },
              { name: "Badminton", count: "300+ sân" },
              { name: "Bóng đá", count: "150+ sân" },
              { name: "Bóng rổ", count: "100+ sân" },
              { name: "Bóng chuyền", count: "80+ sân" },
              { name: "Pickleball", count: "50+ sân" },
              { name: "Bơi lội", count: "30+ hồ bơi" },
              { name: "Yoga", count: "40+ phòng" },
            ].map((sport) => (
              <div
                key={sport.name}
                className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <h3 className="font-bold text-gray-900">{sport.name}</h3>
                <p className="text-sm text-gray-500">{sport.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bắt đầu đặt sân ngay hôm nay</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn người chơi đã tin tướng PickCourt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Tìm sân gần bạn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Đăng ký làm chủ sân
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
