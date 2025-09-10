'use client'

import { Button } from '@/components/ui/button'

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'memories', label: 'Memories' },
    { id: 'celebration', label: 'Celebration' },
    { id: 'games', label: 'Games' },
    { id: 'message', label: 'Special Message' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-pink-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">♥</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              K<span className="text-pink-500">&</span>J
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setCurrentSection(item.id)}
                className={`transition-all duration-200 ${
                  currentSection === item.id
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:bg-pink-50"
            >
              <span className="text-pink-500">♥</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 grid grid-cols-3 gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={currentSection === item.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentSection(item.id)}
              className={`flex flex-col items-center space-y-1 p-3 h-auto ${
                currentSection === item.id
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}