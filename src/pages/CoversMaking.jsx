import { useEffect } from 'react'

const WHATSAPP_URL = 'https://wa.me/919592857501'

const COVERS = [
  { title: 'AC Covers', image: '/ACcover.jpg' },
  { title: 'Fridge Covers', image: '/fridgecover.jpg' },
  { title: 'Pillow Covers', image: '/pillowcover.png' },
  { title: 'Blanket Covers', image: '/balnket covers.jpg' },
]

export default function CoversMaking() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero – What We Stitch? */}
      <section className="relative min-h-[38vh] flex items-center justify-center text-white overflow-hidden py-20">
        <img
          src="/saare.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3d2a35]/85" />
        <div className="relative z-10 text-center px-6">
          <span className="text-amber-200/90 text-sm font-medium tracking-widest uppercase">
            Covers & home
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mt-2">
            What We can Stitch for you?
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-md mx-auto">
            AC, fridge, pillow & blanket covers — custom made in Raman
          </p>
          <div className="mt-6 w-16 h-px bg-amber-300/60 mx-auto" />
        </div>
      </section>

      {/* Covers & All banner image */}
      <section className="w-full px-4 sm:px-6 py-8 bg-[#2d2228]">
        <div className="max-w-6xl mx-auto">
          <img
            src="/covermain.png"
            alt="Covers & All – affordable prices, best quality"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* Cards section – premium layout & theme */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-[#2d2228]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COVERS.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden bg-[#3a2e35] border border-amber-900/30 shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-400 hover:-translate-y-2 hover:border-amber-700/40"
              >
                {/* Image area */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d2228] via-[#2d2228]/20 to-transparent opacity-90" />
                  <div className="absolute top-0 left-0 right-0 p-3">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 text-gray-800 text-xs font-semibold shadow-md">
                      Custom stitched
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-2xl font-semibold text-white drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Footer – Ask Price */}
                <div className="p-4 sm:p-5 bg-[#3a2e35] border-t border-amber-900/20">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi, I'd like to ask about price for ${item.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-amber-500 hover:bg-amber-400 text-[#1a1518] text-sm font-semibold py-3 px-4 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
                  >
                    <span>Ask Price</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
