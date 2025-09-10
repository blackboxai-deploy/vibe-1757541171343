'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayer, setShowPlayer] = useState(true)

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would control actual audio playback here
  }

  if (!showPlayer) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-pink-200 p-4 flex items-center space-x-3">
        {/* Music Info */}
        <div className="hidden sm:block">
          <div className="text-sm font-medium text-gray-800">Die with a Smile</div>
          <div className="text-xs text-gray-500">Kevin & Jaymee's Song</div>
        </div>

        {/* Play/Pause Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMusic}
          className="w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-600 text-white p-0 flex items-center justify-center"
        >
          {isPlaying ? (
            <div className="flex space-x-0.5">
              <div className="w-1 h-4 bg-white rounded-full"></div>
              <div className="w-1 h-4 bg-white rounded-full"></div>
            </div>
          ) : (
            <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
          )}
        </Button>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowPlayer(false)}
          className="w-8 h-8 rounded-full p-0 text-gray-400 hover:text-gray-600"
        >
          ×
        </Button>
      </div>

      {/* Music Visualization */}
      {isPlaying && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1 bg-pink-400 rounded-full animate-pulse"
              style={{
                height: `${12 + (i % 3) * 8}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}