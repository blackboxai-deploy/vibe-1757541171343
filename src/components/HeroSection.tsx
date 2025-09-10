'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  setCurrentSection: (section: string) => void
}

export default function HeroSection({ setCurrentSection }: HeroSectionProps) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-11-18T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-20">
      <div className="container mx-auto px-4 text-center">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Names */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 tracking-tight">
              Kevin
              <span className="block text-pink-500 font-dancing-script italic transform -rotate-2">
                &
              </span>
              Jaymee
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Celebrating our first year of love
            </p>
          </div>

          {/* Anniversary Date */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100">
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
              Our Anniversary
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
              November 18, 2025
            </p>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-pink-500 text-white rounded-2xl p-4">
                <div className="text-2xl md:text-3xl font-bold">{countdown.days}</div>
                <div className="text-sm md:text-base opacity-90">Days</div>
              </div>
              <div className="bg-pink-400 text-white rounded-2xl p-4">
                <div className="text-2xl md:text-3xl font-bold">{countdown.hours}</div>
                <div className="text-sm md:text-base opacity-90">Hours</div>
              </div>
              <div className="bg-pink-300 text-white rounded-2xl p-4">
                <div className="text-2xl md:text-3xl font-bold">{countdown.minutes}</div>
                <div className="text-sm md:text-base opacity-90">Minutes</div>
              </div>
              <div className="bg-pink-200 text-pink-800 rounded-2xl p-4">
                <div className="text-2xl md:text-3xl font-bold">{countdown.seconds}</div>
                <div className="text-sm md:text-base opacity-90">Seconds</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-3xl p-8 shadow-lg">
              <img 
                src="https://i.imgur.com/DG698QH.jpg" 
                alt="Kevin and Jaymee on their beautiful Jollibee cruise - celebrating their love together"
                className="w-full h-96 object-cover rounded-2xl shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl flex items-center justify-center"><div class="text-center text-pink-700"><div class="text-4xl mb-4">♥</div><div class="text-lg font-medium">Kevin & Jaymee</div><div class="text-sm opacity-75">One Year of Beautiful Memories</div></div></div>'
                }}
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setCurrentSection('story')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Read Our Love Story
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentSection('memories')}
              className="border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View Our Memories
            </Button>
          </div>

          {/* Quote */}
          <div className="pt-8">
            <blockquote className="text-lg md:text-xl text-gray-600 italic font-light">
              "She's my first real love"
            </blockquote>
            <p className="text-sm text-gray-400 mt-2">- Kevin</p>
          </div>
        </div>
      </div>
    </section>
  )
}