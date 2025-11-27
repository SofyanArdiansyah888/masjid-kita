import { Clock, MapPin, Phone, Mail, MousePointerSquareDashed } from 'lucide-react'

export default function Home() {
  // Mock data untuk jadwal shalat hari ini
  const todayPrayerTimes = {
    date: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    fajr: '04:30',
    sunrise: '05:45',
    dhuhr: '12:00',
    asr: '15:30',
    maghrib: '18:15',
    isha: '19:30'
  }

  const mosqueInfo = {
    name: 'Masjid Kita',
    address: 'Jl. Contoh No. 123, Jakarta Selatan',
    phone: '021-12345678',
    email: 'info@masjidkita.com'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <MousePointerSquareDashed className="w-20 h-20 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{mosqueInfo.name}</h1>
          <p className="text-xl opacity-90">Aplikasi Jadwal Shalat Digital</p>
        </div>
      </section>

      {/* Jadwal Shalat Hari Ini */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Jadwal Shalat Hari Ini
          </h2>
          <p className="text-center text-gray-600 mb-8">{todayPrayerTimes.date}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Subuh', time: todayPrayerTimes.fajr, icon: '🌙' },
              { name: 'Terbit', time: todayPrayerTimes.sunrise, icon: '🌅' },
              { name: 'Dzuhur', time: todayPrayerTimes.dhuhr, icon: '☀️' },
              { name: 'Ashar', time: todayPrayerTimes.asr, icon: '🌤️' },
              { name: 'Maghrib', time: todayPrayerTimes.maghrib, icon: '🌆' },
              { name: 'Isya', time: todayPrayerTimes.isha, icon: '🌃' }
            ].map((prayer, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">{prayer.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{prayer.name}</h3>
                <p className="text-2xl font-bold text-green-600">{prayer.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi Masjid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Informasi Masjid
          </h2>
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <MousePointerSquareDashed className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Nama Masjid</p>
                  <p className="text-gray-600">{mosqueInfo.name}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Alamat</p>
                  <p className="text-gray-600">{mosqueInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Telepon</p>
                  <p className="text-gray-600">{mosqueInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">{mosqueInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Navigasi
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="/jadwal"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Lihat Jadwal Lengkap
            </a>
            <a
              href="/admin"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
            >
              Dashboard Admin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Masjid Kita. Aplikasi Jadwal Shalat Digital.</p>
        </div>
      </footer>
    </div>
  )
}