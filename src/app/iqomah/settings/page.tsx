'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Timer, Play } from 'lucide-react'

export default function IqomahSettings() {
  const router = useRouter()
  const [minutes, setMinutes] = useState<number>(10)
  const [prayer, setPrayer] = useState<string>('dhuhr')

  function openTimer() {
    router.push(`/iqomah?duration=${minutes}&prayer=${prayer}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
      <div className="w-full max-w-3xl px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 text-green-700">
            <Timer className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Pengaturan Iqomah</h1>
          </div>
          <p className="text-gray-600 mt-2">Atur durasi dan jenis shalat</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Durasi Iqomah (menit)</label>
              <input type="number" min={1} value={minutes} onChange={e => setMinutes(Number(e.target.value) || 1)} className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[5,10,15,20].map(m => (
                  <button key={m} onClick={() => setMinutes(m)} className="bg-green-50 border border-green-200 rounded-lg py-2 font-semibold text-green-700 hover:bg-green-100">{m}m</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Shalat</label>
              <select value={prayer} onChange={e => setPrayer(e.target.value)} className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="fajr">Subuh</option>
                <option value="dhuhr">Dzuhur</option>
                <option value="asr">Ashar</option>
                <option value="maghrib">Maghrib</option>
                <option value="isha">Isya</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button onClick={openTimer} className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
              <Play className="w-5 h-5" /> Buka Timer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

