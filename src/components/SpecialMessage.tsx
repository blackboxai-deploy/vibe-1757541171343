'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SpecialMessage() {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isWrongPassword, setIsWrongPassword] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)

  const correctPassword = "jaymee" // You can change this to any password you want

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true)
      setIsWrongPassword(false)
    } else {
      setIsWrongPassword(true)
      setTimeout(() => setIsWrongPassword(false), 3000)
    }
  }

  const openEnvelope = () => {
    setEnvelopeOpened(true)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              A Special Message
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kevin has prepared a very special message just for Jaymee. 
            </p>
          </div>

          {!isUnlocked ? (
            /* Password Protection */
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
              <div className="mb-8">
                <div className="text-8xl mb-6">🔒</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  This message is protected
                </h3>
                <p className="text-gray-600 mb-8">
                  Enter the password to unlock Kevin's special message for Jaymee
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="text-center text-lg p-4 border-pink-300 focus:border-pink-500 focus:ring-pink-500"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg rounded-full"
                  >
                    Unlock Message
                  </Button>
                </div>
              </form>

              {isWrongPassword && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600">
                    ❌ Incorrect password. Try again! 
                    <br />
                    <span className="text-sm opacity-75">Hint: Her first name in lowercase</span>
                  </p>
                </div>
              )}
            </div>
          ) : !envelopeOpened ? (
            /* Envelope Animation */
            <div className="flex justify-center">
              <div 
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={openEnvelope}
              >
                <div className="relative">
                  {/* Envelope */}
                  <div className="bg-gradient-to-br from-pink-200 to-rose-200 w-96 h-64 rounded-lg shadow-lg relative overflow-hidden">
                    {/* Envelope Flap */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-300 to-rose-300 transform origin-top hover:rotate-12 transition-transform duration-300"></div>
                    
                    {/* Envelope Content Peek */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded p-4 shadow-md">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                          For My Beautiful Jaymee ♥
                        </h4>
                        <p className="text-sm text-gray-600">
                          Click to open and read...
                        </p>
                      </div>
                    </div>
                    
                    {/* Hearts Decoration */}
                    <div className="absolute top-4 right-4 text-pink-500 opacity-75">
                      <div className="text-2xl">💕</div>
                    </div>
                    <div className="absolute bottom-20 left-4 text-pink-400 opacity-50">
                      <div className="text-lg">💖</div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-pink-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-pink-500 px-4 py-2 rounded-full text-sm font-medium">
                      Click to Open
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Special Message Content */
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">💌</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  My Dearest Jaymee
                </h3>
              </div>

              <div className="prose max-w-3xl mx-auto text-lg leading-relaxed">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
                  <p className="text-gray-700 mb-6">
                    As I sit here writing this on our special website, my heart is overflowing with love and gratitude 
                    for the incredible year we've shared together. From the moment we met at Joe V's Smart Shop, 
                    I knew there was something special about you.
                  </p>

                  <p className="text-gray-700 mb-6">
                    You've brought so much joy, laughter, and love into my life. Every memory we've created together - 
                    from our magical Jollibee cruise to our cozy pizza-making nights, from our competitive pickleball 
                    games to our motivating gym sessions - each moment has been a treasure that I hold close to my heart.
                  </p>

                  <p className="text-gray-700 mb-6">
                    You are my first real love, and every day with you feels like a dream come true. Your smile lights 
                    up my world, your laughter is music to my ears, and your love gives me strength to be the best 
                    version of myself.
                  </p>

                  <p className="text-gray-700 mb-6">
                    As we celebrate our first anniversary on November 18th, 2025, I want you to know that this is just the 
                    beginning of our beautiful love story. I can't wait to create many more memories with you, go on 
                    new adventures, and continue growing together as a couple.
                  </p>

                  <p className="text-gray-700 mb-8">
                    Thank you for being you - beautiful, amazing, loving, and perfect in every way. 
                    Thank you for choosing to love me and for making this year the most incredible year of my life.
                  </p>

                  <div className="text-center border-t border-pink-200 pt-8">
                    <p className="text-2xl font-bold text-pink-600 mb-4">
                      I love you more than words can express
                    </p>
                    <p className="text-xl text-gray-700 mb-6">
                      Here's to forever with you, my love ♥
                    </p>
                    <p className="text-lg text-gray-600 italic">
                      All my love always,<br />
                      <span className="font-bold text-pink-600 text-xl">Kevin</span>
                    </p>
                  </div>
                </div>

                {/* Special Date Reminder */}
                <div className="bg-pink-500 text-white rounded-2xl p-6 text-center">
                  <h4 className="text-2xl font-bold mb-4">Happy 1st Anniversary!</h4>
                  <p className="text-lg opacity-90">
                    November 18, 2025
                  </p>
                  <p className="text-sm opacity-75 mt-2">
                    365 days of love • ∞ memories made • 2 hearts as one
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}