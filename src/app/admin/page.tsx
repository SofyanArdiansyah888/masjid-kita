'use client'

import { useState } from 'react'
import { Settings, Clock, RefreshCw, User, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  // Mock data untuk dashboard
  const stats = {
    totalPrayerTimes: 365,
    lastSync: '2024-01-15',
    iqomahDuration: 10,
    autoSync: true
  }

  const recentPrayerTimes = [
    { date: '15 Jan 2024', fajr: '04:30', dhuhr: '12:00', asr: '15:30', maghrib: '18:15', isha: '19:30' },
    { date: '14 Jan 2024', fajr: '04:31', dhuhr: '12:00', asr: '15:29', maghrib: '18:14', isha: '19:29' },
    { date: '13 Jan 2024', fajr: '04:32', dhuhr: '12:00', asr: '15:28', maghrib: '18:13', isha: '19:28' }
  ]

  const handleSyncAPI = () => {
    alert('Sinkronisasi dengan API Kemenag dimulai...')
  }

  const handleLogout = () => {
    alert('Logout berhasil!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <User className="w-6 h-6 mr-2" />
              <h1 className="text-xl font-bold">Dashboard Admin</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'dashboard'
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('jadwal')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'jadwal'
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Kelola Jadwal
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('pengaturan')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'pengaturan'
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Pengaturan
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                
                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                      <Clock className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Total Jadwal</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.totalPrayerTimes}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                      <RefreshCw className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Terakhir Sync</p>
                        <p className="text-lg font-bold text-gray-800">{stats.lastSync}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                      <Settings className="w-8 h-8 text-purple-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Iqomah</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.iqomahDuration}m</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full mr-3 ${stats.autoSync ? 'bg-green-600' : 'bg-red-600'}`}></div>
                      <div>
                        <p className="text-sm text-gray-600">Auto Sync</p>
                        <p className="text-lg font-bold text-gray-800">{stats.autoSync ? 'Aktif' : 'Nonaktif'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Prayer Times */}
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">Jadwal Shalat Terbaru</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Subuh</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Dzuhur</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ashar</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Maghrib</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Isya</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentPrayerTimes.map((prayer, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {prayer.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {prayer.fajr}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {prayer.dhuhr}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {prayer.asr}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {prayer.maghrib}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {prayer.isha}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Aksi Cepat</h3>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleSyncAPI}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync API Kemenag
                    </button>
                    <a
                      href="/admin/jadwal"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Kelola Jadwal
                    </a>
                    <a
                      href="/admin/pengaturan"
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Pengaturan
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jadwal' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Kelola Jadwal Shalat</h2>
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600">Fitur manajemen jadwal shalat akan tersedia di sini.</p>
                  <div className="mt-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Tambah Jadwal Manual
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pengaturan' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Pengaturan</h2>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengaturan Iqomah</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Durasi Iqomah (menit)
                      </label>
                      <input
                        type="number"
                        defaultValue={stats.iqomahDuration}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked={stats.autoSync}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">Aktifkan auto sync dengan API Kemenag</span>
                      </label>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Simpan Pengaturan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}