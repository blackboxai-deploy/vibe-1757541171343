'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import LoveStoryTimeline from '@/components/LoveStoryTimeline'
import MemoryShowcase from '@/components/MemoryShowcase'
import AnniversaryCelebration from '@/components/AnniversaryCelebration'
import GamesSection from '@/components/GamesSection'
import SpecialMessage from '@/components/SpecialMessage'
import MusicPlayer from '@/components/MusicPlayer'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="min-h-screen">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <MusicPlayer />
      
      <main className="relative">
        {currentSection === 'home' && <HeroSection setCurrentSection={setCurrentSection} />}
        {currentSection === 'story' && <LoveStoryTimeline />}
        {currentSection === 'memories' && <MemoryShowcase />}
        {currentSection === 'celebration' && <AnniversaryCelebration />}
        {currentSection === 'games' && <GamesSection />}
        {currentSection === 'message' && <SpecialMessage />}
      </main>
    </div>
  )
}