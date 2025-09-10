'use client'

import { useState, useEffect } from 'react'

export default function AnniversaryCelebration() {
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

  const milestones = [
    {
      number: "1",
      label: "Amazing Year",
      description: "365 days of love, laughter, and growing together"
    },
    {
      number: "∞",
      label: "Precious Moments",
      description: "Countless memories we've created together"
    },
    {
      number: "2",
      label: "Hearts United",
      description: "Two souls finding their perfect match"
    },
    {
      number: "100%",
      label: "Pure Love",
      description: "Complete dedication to each other"
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Anniversary Celebration
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            November 18, 2025 - Celebrating one incredible year of love, growth, and beautiful memories together.
          </p>
        </div>

        {/* Countdown Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
              Countdown to Our Special Day
            </h3>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{countdown.days}</div>
                <div className="text-sm md:text-base opacity-90">Days</div>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{countdown.hours}</div>
                <div className="text-sm md:text-base opacity-90">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 text-white rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{countdown.minutes}</div>
                <div className="text-sm md:text-base opacity-90">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 text-pink-800 rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{countdown.seconds}</div>
                <div className="text-sm md:text-base opacity-90">Seconds</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                Time until our first anniversary celebration!
              </p>
            </div>
          </div>
        </div>

        {/* Anniversary Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <img
              src="https://i.imgur.com/zdB6jre.jpg"
              alt="Kevin and Jaymee on their amazing Jollibee cruise - celebrating their love and adventures together"
              className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-96 md:h-[500px] bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl flex items-center justify-center shadow-lg"><div class="text-center text-pink-700"><div class="text-6xl mb-4">♥</div><div class="text-2xl font-bold mb-2">Our Anniversary Celebration</div><div class="text-lg opacity-75">November 18, 2024</div></div></div>'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">November 18, 2025</h3>
              <p className="text-lg md:text-xl opacity-90">One Year of Beautiful Love</p>
            </div>
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
                {milestone.number}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {milestone.label}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reflection Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Reflecting on Our First Year
              </h3>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  From our first meeting at Joe V's Smart Shop to our magical moments on the Jollibee cruise, 
                  this year has been filled with incredible adventures and beautiful memories.
                </p>
                <p>
                  We've shared cozy nights making pizza, competitive pickleball games, motivating gym sessions, 
                  and countless hours just enjoying each other's company.
                </p>
                <p>
                  Every day with you has been a blessing, and I can't wait to see what the future holds 
                  for us as we continue this amazing journey together.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-pink-200">
                <blockquote className="text-2xl md:text-3xl text-pink-600 italic font-light">
                  "Here's to many more years of love, laughter, and adventure together."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Future Dreams Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Looking Ahead</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🌟</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">More Adventures</h4>
              <p className="text-gray-600">New places to explore and memories to create</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-4">💕</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Deeper Love</h4>
              <p className="text-gray-600">Growing closer with each passing day</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-4">✨</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Beautiful Future</h4>
              <p className="text-gray-600">Writing our story together, one day at a time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}