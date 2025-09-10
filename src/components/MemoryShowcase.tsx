'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function MemoryShowcase() {
  const [activeCategory, setActiveCategory] = useState('adventures')

  const memoryCategories = {
    adventures: {
      title: "Adventures Together",
      description: "Our exciting journeys and explorations",
      memories: [
        {
          title: "Jollibee Cruise",
          description: "Our first baecation - the most cherished memory of pure joy on the water",
          image: "https://i.imgur.com/fV3WQln.jpg"
        },
        {
          title: "Santa's Wonderland",
          description: "Holiday magic with twinkling lights and festive joy",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1c599c0-7110-4d2b-990b-ffc21312d96d.png"
        },
        {
          title: "More Cruise Memories",
          description: "Every moment on our first baecation was magical",
          image: "https://i.imgur.com/niUljPM.jpg"
        },
        {
          title: "Cruise Adventures",
          description: "Making memories and having the time of our lives",
          image: "https://i.imgur.com/tAx111u.jpg"
        },
        {
          title: "Ocean Love",
          description: "Our love shines brightest when we're together",
          image: "https://i.imgur.com/AiElyke.jpg"
        },
        {
          title: "Baecation Bliss",
          description: "Pure happiness on our first vacation together",
          image: "https://i.imgur.com/RoI946G.jpg"
        }
      ]
    },
    cozy: {
      title: "Cozy Moments",
      description: "Our sweet, intimate moments at home",
      memories: [
        {
          title: "Making Pizza",
          description: "Cooking together at home - simple moments that mean everything",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b7a94af-19e6-4c78-98b1-8574c5b2ee93.png"
        },
        {
          title: "Hanging Out",
          description: "Just being together, talking and enjoying each other's company",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/56786f05-0249-465a-96c2-038c295da86d.png"
        },
        {
          title: "Movie Nights",
          description: "Cozy movie marathons and sharing our favorite films",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/36d772be-cc9d-47f9-97db-2fed5247f17c.png"
        }
      ]
    },
    active: {
      title: "Active Life",
      description: "Staying healthy and having fun together",
      memories: [
        {
          title: "Playing Pickleball",
          description: "Our favorite sport to play together - competitive but fun!",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7db4531d-d040-4a62-b0b3-50c75c2e4e1b.png"
        },
        {
          title: "Gym Sessions",
          description: "Working out together and motivating each other",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc2fc3ce-6644-477f-b9e4-11d60f1b7954.png"
        },
        {
          title: "Active Adventures",
          description: "Staying active and exploring the outdoors together",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8f93caa-bf7e-4e74-a1dc-b70ff0d590f4.png"
        }
      ]
    },
    games: {
      title: "Game Time",
      description: "Our playful competitive side",
      memories: [
        {
          title: "Gaming Together",
          description: "Playing our favorite games and having endless fun",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a57eb7c-43a9-400d-a6f1-abd62d6ad750.png"
        },
        {
          title: "Board Game Nights",
          description: "Classic games and lots of laughter",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69246d37-27b5-4e33-b742-66f30b5f0bd1.png"
        },
        {
          title: "Friendly Competition",
          description: "Whether we're winning or losing, we're having fun together",
          image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f1d18a3-aaec-4e8c-bd63-446074e89b3f.png"
        }
      ]
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of our favorite moments together - each one a treasure in our love story.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(memoryCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={activeCategory === key ? 'default' : 'outline'}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full text-lg transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-pink-500 hover:bg-pink-600 text-white'
                  : 'border-pink-300 text-pink-600 hover:bg-pink-50'
              }`}
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {memoryCategories[activeCategory as keyof typeof memoryCategories].title}
            </h3>
            <p className="text-lg text-gray-600">
              {memoryCategories[activeCategory as keyof typeof memoryCategories].description}
            </p>
          </div>

          {/* Memory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoryCategories[activeCategory as keyof typeof memoryCategories].memories.map((memory, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-64 bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center"><div class="text-center text-pink-700"><div class="text-4xl mb-4">♥</div><div class="text-lg font-medium">${memory.title}</div></div></div>`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {memory.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Memory Stats */}
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600">365</div>
              <div className="text-gray-600">Days Together</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">∞</div>
              <div className="text-gray-600">Memories Made</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">2</div>
              <div className="text-gray-600">Hearts as One</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">1</div>
              <div className="text-gray-600">Amazing Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}