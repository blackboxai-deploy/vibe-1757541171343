'use client'

export default function LoveStoryTimeline() {
  const timelineEvents = [
    {
      date: "The Beginning",
      title: "First Meeting at Joe V's Smart Shop",
      description: "Where it all started - our paths crossed at Joe V's Smart Shop. Little did we know this was the beginning of something beautiful.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/169d6e2c-f59e-407d-9b1b-71033e3c1576.png",
      position: "left"
    },
    {
      date: "Our First Date",
      title: "Movies Together",
      description: "Our first time hanging out one-on-one at the movies. The beginning of countless memories we'd create together.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/affda749-9c96-4b7b-89ea-867ece5e15dd.png",
      position: "right"
    },
    {
      date: "A Special Moment",
      title: "First 'I Love You'",
      description: "The moment our hearts truly connected. A milestone that changed everything and deepened our bond.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a2d22b17-a46f-4ca7-ad81-692d6e3ac35e.png",
      position: "left"
    },
    {
      date: "Adventure Time",
      title: "Jollibee Cruise - Our First Baecation",
      description: "Our most cherished memory! Our first baecation together on the Jollibee cruise. Pure joy, laughter, and love on the water.",
      image: "https://i.imgur.com/iycVTVZ.jpg",
      position: "right"
    },
    {
      date: "Cozy Moments",
      title: "Making Pizza at Home",
      description: "One of our favorite cozy moments - making pizza together at Jaymee's house. Simple moments that mean everything.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/780942ad-3b0d-4557-92fb-74bd992cbf36.png",
      position: "left"
    },
    {
      date: "Holiday Magic",
      title: "Santa's Wonderland",
      description: "Creating magical holiday memories at Santa's Wonderland. The lights, the joy, and being together made it perfect.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c15babc-14f4-4b72-9b65-b09d09a417aa.png",
      position: "right"
    },
    {
      date: "Everyday Love",
      title: "Our Favorite Activities",
      description: "Hanging out, playing pickleball, gaming together, hitting the gym - every moment with you is special.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/90e66055-dfcc-408d-a435-94b9bf7b57e2.png",
      position: "left"
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Love Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From our first meeting to now, every moment has been a chapter in our beautiful love story.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-300 hidden md:block"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  event.position === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${event.position === 'right' ? 'md:text-right' : ''}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
                    <div className="mb-4">
                      <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-80 object-cover rounded-3xl shadow-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-80 bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl flex items-center justify-center shadow-lg"><div class="text-center text-pink-700"><div class="text-4xl mb-4">♥</div><div class="text-lg font-medium">${event.title}</div><div class="text-sm opacity-75">${event.date}</div></div></div>`
                      }}
                    />
                    <div className="absolute inset-0 bg-pink-500/10 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 pt-16 border-t border-pink-200">
          <blockquote className="text-2xl md:text-3xl text-gray-700 italic font-light mb-6">
            "Every love story is beautiful, but ours is my favorite."
          </blockquote>
          <div className="flex justify-center space-x-8 text-lg text-gray-500">
            <span>Kevin Muratalla</span>
            <span className="text-pink-500">♥</span>
            <span>Jaymee Isabelle Martinez</span>
          </div>
        </div>
      </div>
    </section>
  )
}