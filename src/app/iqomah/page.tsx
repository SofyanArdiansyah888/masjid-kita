'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Timer } from 'lucide-react'

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = Math.floor(totalSeconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function IqomahTimer() {
  const params = useSearchParams()
  const defaultMinutes = Number(params.get('duration') ?? '10')
  const defaultPrayer = params.get('prayer') ?? 'dhuhr'
  const [minutes] = useState<number>(isNaN(defaultMinutes) ? 10 : defaultMinutes)
  const [remaining, setRemaining] = useState<number>(minutes * 60)
  const [muted] = useState<boolean>(false)
  const [prayer] = useState<string>(defaultPrayer)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    intervalRef.current && clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current as NodeJS.Timeout)
          if (!muted) beep()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
    }
  }, [])

  const progress = useMemo(() => {
    const total = minutes * 60
    return total > 0 ? ((total - remaining) / total) * 100 : 0
  }, [minutes, remaining])

  function beep() {
    try {
      if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      const ctx = audioContextRef.current
      const duration = 1
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = 'sine'
      o.frequency.value = 880
      g.gain.value = 0.001
      o.connect(g)
      g.connect(ctx.destination)
      o.start()
      g.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 0.05)
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)
      o.stop(ctx.currentTime + duration)
    } catch {}
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
      <div className="w-full max-w-5xl px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 text-green-700">
            <Timer className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Countdown Iqomah</h1>
          </div>
          <p className="text-gray-600 mt-2">Shalat: {prayer.toUpperCase()}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col items-center">
            <div className="text-7xl md:text-8xl font-bold tracking-widest text-green-700 mb-6">
              {formatTime(remaining)}
            </div>
            <div className="w-full h-3 bg-green-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-600" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
