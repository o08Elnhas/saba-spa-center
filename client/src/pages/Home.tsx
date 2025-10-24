import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [bookingData, setBookingData] = useState({
    service: "",
    name: "",
    phone: "",
    date: "",
    time: "",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `🔖 حجز جديد - مركز سبأ للسبا

🛎️ الخدمة: ${bookingData.service}
👤 الاسم: ${bookingData.name}
📞 الهاتف: ${bookingData.phone}
📅 التاريخ: ${bookingData.date}
⏰ الوقت: ${bookingData.time}
📍 العنوان: ${bookingData.address || "الحضور للمركز"}

شكراً لحجزكم في مركز سبأ!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/966500546241?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    // Reset form
    setBookingData({
      service: "",
      name: "",
      phone: "",
      date: "",
      time: "",
      address: "",
    });
  };

  const offers = [
    {
      id: 1,
      badge: "عرض خاص",
      title: "باقة المساج الشاملة",
      originalPrice: "300 ريال",
      offerPrice: "250 ريال",
      description: "جلسة مساج متكاملة لمدة ساعتين",
      image: "🧖‍♀️",
    },
    {
      id: 2,
      badge: "عرض العروسان",
      title: "باقة تحضير العروسان",
      originalPrice: "800 ريال",
      offerPrice: "700 ريال",
      description: "تحضير كامل للعروس والعريس",
      image: "💒",
    },
    {
      id: 3,
      badge: "عرض التوصيل",
      title: "خدمة التوصيل للمنازل",
      offerPrice: "من 250 ريال",
      description: "خدمة متكاملة في منزلك بكل خصوصية",
      deliveryInfo: "✓ متوفر في جميع أنحاء جدة",
      image: "🚗",
    },
  ];

  const services = [
    "جلسات المساج المتنوعة - 150 ريال/ساعة",
    "الحمام المغربي الفاخر - 200 ريال",
    "الخدمات المنزلية - من 250 ريال",
    "باقة الـ VIP - 450 ريال",
    "باقة العرسان - 700 ريال",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold mb-2">مركز سبأ للسبا</h1>
              <p className="text-amber-100">تجربة استرخاء وتجميل فاخرة</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-amber-800 text-white sticky top-16 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 py-4 flex-wrap">
            <a href="#offers" className="hover:text-amber-200 transition">
              العروض
            </a>
            <a href="#booking" className="hover:text-amber-200 transition">
              الحجز
            </a>
            <a href="#contact" className="hover:text-amber-200 transition">
              التواصل
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Offers Section */}
        <section id="offers" className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
              🎁 عروضنا الخاصة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer) => (
                <Card
                  key={offer.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
                >
                  <div className="relative bg-gradient-to-br from-amber-100 to-amber-50 p-8 text-center">
                    <div className="text-6xl mb-4">{offer.image}</div>
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {offer.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      {offer.title}
                    </h3>

                    {offer.originalPrice && (
                      <p className="text-gray-500 line-through mb-2">
                        السعر الأصلي: {offer.originalPrice}
                      </p>
                    )}

                    <p className="text-2xl font-bold text-yellow-600 mb-4">
                      {offer.offerPrice}
                    </p>

                    <p className="text-gray-700 mb-3">{offer.description}</p>

                    {offer.deliveryInfo && (
                      <p className="text-green-600 font-bold">
                        {offer.deliveryInfo}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
              📱 احجز خدمتك الآن
            </h2>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8 border-2 border-amber-200">
                <form onSubmit={handleWhatsAppBooking} className="space-y-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-lg font-semibold text-amber-900 mb-2"
                    >
                      اختر الخدمة:
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={bookingData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 bg-white text-right"
                    >
                      <option value="">-- اختر الخدمة --</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-amber-900 mb-2"
                    >
                      الاسم الكامل:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-semibold text-amber-900 mb-2"
                    >
                      رقم الهاتف:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="05XXXXXXXX"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-lg font-semibold text-amber-900 mb-2"
                      >
                        التاريخ المفضل:
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="block text-lg font-semibold text-amber-900 mb-2"
                      >
                        الوقت المفضل:
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={bookingData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-lg font-semibold text-amber-900 mb-2"
                    >
                      العنوان (للتوصيل):
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={bookingData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="أدخل عنوانك (اختياري)"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-bold rounded-lg transition-all duration-300"
                  >
                    📱 احجز عبر واتساب
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
              📞 تواصل معنا
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 border-2 border-amber-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">📞</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      الهاتف
                    </h3>
                    <p className="text-gray-700 mb-2">+966 50 054 6241</p>
                    <p className="text-gray-700">+966 53 055 9310</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-amber-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">📧</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      البريد الإلكتروني
                    </h3>
                    <p className="text-gray-700">sabacentersa@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-amber-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      الموقع
                    </h3>
                    <p className="text-gray-700">جدة، المملكة العربية السعودية</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-amber-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🕒</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      ساعات العمل
                    </h3>
                    <p className="text-gray-700">مفتوح دائماً - 24/7</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://m.facebook.com/SabaSpaCenter"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                👍 فيسبوك
              </a>
              <a
                href="https://wa.me/+966500546241"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                💬 واتساب
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 مركز سبأ للسبا - جميع الحقوق محفوظة</p>
          <p className="text-amber-200">
            نقدم لك أفضل خدمات السبا والاسترخاء في جدة
          </p>
        </div>
      </footer>
    </div>
  );
}

