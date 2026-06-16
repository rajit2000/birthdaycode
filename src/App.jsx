import { useState } from 'react'
import babyImg from './assest/Baby.jpg'
import jaanImg from './assest/jaan.jpg'
import shonaImg from './assest/shonaa.jpg'
import vidMuwaaaah from './assest/muwaaaah.png'
import vidSweetheart from './assest/sweetheart.jpeg'
import vidWifee from './assest/wife.jpg'
import './App.css'

function App() {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [isFlipped, setIsFlipped] = useState(false)

  // Media gallery: images and videos
  const mediaItems = [
    { type: 'image', src: babyImg, alt: 'Beautiful memory 1' },
    { type: 'image', src: jaanImg, alt: 'Beautiful memory 2' },
    { type: 'image', src: shonaImg, alt: 'Beautiful memory 3' },
    { type: 'image', src: vidMuwaaaah, alt: 'Cute video 1' },
    { type: 'image', src: vidSweetheart, alt: 'Cute video 2' },
    { type: 'image', src: vidWifee, alt: 'Cute video 3' },
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Floating balloons animation */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 animate-float text-4xl">🎈</div>
        <div className="absolute top-40 right-20 animate-float text-5xl" style={{ animationDelay: '0.5s' }}>🎈</div>
        <div className="absolute top-60 left-1/4 animate-float text-3xl" style={{ animationDelay: '1s' }}>🎈</div>
        <div className="absolute top-80 right-1/3 animate-float text-4xl" style={{ animationDelay: '1.5s' }}>🎈</div>
        <div className="absolute bottom-40 left-20 animate-float text-5xl" style={{ animationDelay: '0.7s' }}>🎈</div>
        <div className="absolute bottom-60 right-10 animate-float text-3xl" style={{ animationDelay: '1.2s' }}>🎈</div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-shadow-lg animate-pulse-slow">
            Happy Birthday!
          </h1>
          <p className="text-2xl md:text-3xl text-purple-700 font-semibold text-shadow">
            To My Beautiful Girlfriend 💕
          </p>
        </div>

        {/* Birthday Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 mb-12 border-4 border-pink-300">
          <div className="text-center mb-8">
            <div className="text-6xl mb-6 animate-bounce">🎂</div>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4">
              On this special day, I want you to know how much you mean to me.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Your smile lights up my world, and every moment with you is a gift.
            </p>
            <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-6">
              May your special day be filled with joy, laughter, and all the happiness you deserve! 🌟 <br />
              I Love You So Much Baby 💕 <br />
          
            </p>
          </div>
        </div>

        {/* Beautiful Flip Card */}
        <div className="mb-12 flex justify-center px-4">
          <div 
            className="w-full max-w-2xl"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div 
              className="relative w-full h-[500px] md:h-[600px] transition-transform duration-700 cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Front of the card */}
              <div 
                className="absolute inset-0 backface-hidden rounded-3xl shadow-2xl border-4 border-pink-300 overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 via-pink-400 to-purple-400 rounded-3xl flex flex-col items-center justify-center p-8 text-center relative">
                  {/* Decorative hearts */}
                  <div className="absolute top-4 right-4 text-3xl animate-pulse">💖</div>
                  <div className="absolute bottom-4 left-4 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>💕</div>
                  
                  <div className="text-8xl mb-6 animate-bounce">💌</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
                    A Special Message
                  </h3>
                  <p className="text-2xl md:text-3xl text-white/95 mb-8 text-shadow font-medium">
                    Tap to reveal 💕
                  </p>
                  <div className="flex gap-2 text-5xl">
                    <span className="animate-pulse">✨</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>✨</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>✨</span>
                  </div>
                </div>
              </div>

              {/* Back of the card */}
              <div 
                className="absolute inset-0 backface-hidden rounded-3xl shadow-2xl border-4 border-purple-300 overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 via-purple-400 to-pink-400 rounded-3xl p-6 md:p-10 flex flex-col relative">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 text-3xl animate-pulse">🌸</div>
                  <div className="absolute bottom-4 left-4 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>🌺</div>
                  
                  {/* Scrollable content */}
                  <div className="flex-1 overflow-y-auto scrollbar-thin pr-2">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">💝</div>
                      <h4 className="text-3xl md:text-4xl font-bold text-white text-shadow-lg mb-6">
                        For You, My Baby
                      </h4>
                    </div>
                    
                    <div className="space-y-6 text-white max-w-2xl mx-auto">
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-shadow font-medium px-2">
                         On this special day, I want you to know that you are the most beautiful person I've ever met - not just on the outside, but in every way that truly matters. Your kindness touches everyone around you, your laughter is my favorite melody, and your heart is the purest gift life has given me.
                      </p>
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-shadow font-medium px-2">
                        Every moment spent with you feels like a dream I never want to wake up from. You've brought colors into my world that I never knew existed, and taught me what it truly means to love someone with your whole heart. You are the answer of my all prayers, and your presence makes everything better.
                      </p>
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed font-bold text-shadow-lg px-2 text-center mt-8">
                        Today, and every day, I celebrate you. You deserve all the happiness, all the love, and all the beautiful moments this world has to offer. Happy birthday to the one who always makes me smile. I wanna spend my whole rest of life with you. 💖✨<br />
                        I Love You So Much Baby 💕 <br />
                        
                      </p>
                    </div>
                    
                    <div className="text-center mt-8">
                      <div className="flex justify-center gap-3 text-4xl">
                        <span>💕</span>
                        <span>💖</span>
                        <span>💝</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Photo Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-700 text-shadow">
            Some of My Favorites ✨
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedMedia(item)}
                className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 shadow-lg border-4 border-white">
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.alt || `Memory ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                          ▶
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Click to view</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heart Animation Section */}
        <div className="text-center mb-12">
          <div className="inline-block animate-pulse-slow">
            <span className="text-6xl">💖</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-pink-500">
            Love You Always! 💕
          </p>
        </div>

        {/* Floating hearts */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute animate-float text-2xl" style={{ left: '15%', animationDelay: '0s' }}>💕</div>
          <div className="absolute animate-float text-3xl" style={{ right: '25%', animationDelay: '0.8s' }}>💖</div>
          <div className="absolute animate-float text-2xl" style={{ left: '45%', bottom: '20%', animationDelay: '1.3s' }}>💗</div>
          <div className="absolute animate-float text-3xl" style={{ right: '35%', bottom: '40%', animationDelay: '0.5s' }}>💝</div>
        </div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-pink-300 transition-colors"
            >
              ✕
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt || 'Memory'}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  className="max-w-full max-h-[80vh] object-contain bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
