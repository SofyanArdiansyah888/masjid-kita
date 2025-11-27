'use client'

import { useState, useEffect } from 'react'
import { Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

export default function JadwalPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Mock data untuk jadwal shalat bulan ini
  const generatePrayerSchedule = () => {
    const schedule = []
    const today = new Date()
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      schedule.push({
        date: date.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' }),
        fullDate: date,
        fajr: '04:30',
        sunrise: '05:45',
        dhuhr: '12:00',
        asr: '15:30',
        maghrib: '18:15',
        isha: '19:30'
      })
    }
    
    return schedule
  }

  const prayerSchedule = generatePrayerSchedule()

  const getNextPrayer = () => {
    const now = currentTime
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTimeStr = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`

    const todaySchedule = prayerSchedule[0]
    const prayers = [
      { name: 'Subuh', time: todaySchedule.fajr },
      { name: 'Dzuhur', time: todaySchedule.dhuhr },
      { name: 'Ashar', time: todaySchedule.asr },
      { name: 'Maghrib', time: todaySchedule.maghrib },
      { name: 'Isya', time: todaySchedule.isha }
    ]

    for (let prayer of prayers) {
      if (currentTimeStr < prayer.time) {
        return prayer
      }
    }

    return prayers[0] // Kembali ke Subuh untuk hari berikutnya
  }

  const nextPrayer = getNextPrayer()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Jadwal Shalat Masjid Kita</h1>
            <a
              href="/"
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Kembali
            </a>
          </div>
        </div>
      </header>

      {/* Digital Clock & Next Prayer */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Clock */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Waktu Sekarang</h2>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {currentTime.toLocaleTimeString('id-ID')}
              </div>
              <div className="text-lg text-gray-600">
                {currentTime.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>

            {/* Next Prayer */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Shalat Berikutnya</h2>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {nextPrayer.name}
              </div>
              <div className="text-lg text-gray-600">
                Pukul {nextPrayer.time}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Schedule Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Jadwal Shalat Bulan Ini
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Tanggal</th>
                    <th className="px-4 py-3 text-center">Subuh</th>
                    <th className="px-4 py-3 text-center">Terbit</th>
                    <th className="px-4 py-3 text-center">Dzuhur</th>
                    <th className="px-4 py-3 text-center">Ashar</th>
                    <th className="px-4 py-3 text-center">Maghrib</th>
                    <th className="px-4 py-3 text-center">Isya</th>
                  </tr>
                </thead>
                <tbody>
                  {prayerSchedule.slice(0, 7).map((day, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } hover:bg-green-50 transition-colors`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-800">
                        {day.date}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {day.fajr}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {day.sunrise}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {day.dhuhr}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {day.asr}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {day.maghrib}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">
                        {day.isha}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Menampilkan 7 hari pertama. Untuk jadwal lengkap, silakan hubungi pengurus masjid.
            </p>
          </div>
        </div>
      </section>

      {/* Iqomah Settings */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Pengaturan Iqomah
          </h2>
          
          <div className="max-w-md mx-auto bg-green-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Durasi Iqomah
            </h3>
            <p className="text-3xl font-bold text-green-600 mb-2">10 Menit</p>
            <p className="text-gray-600">
              Alarm iqomah akan berbunyi 10 menit setelah waktu shalat
            </p>
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