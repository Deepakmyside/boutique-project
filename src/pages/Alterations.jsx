import { useState, useEffect } from 'react'

const ALTERATIONS_FINISHING = [
  { name: 'Suit and Dresses Alteration' },
  { name: 'Blouse, Saree Alteration' },
  { name: 'Pico Work', image: '/picowork.jpg' },
  { name: 'Tarpai Work', image: '/tarpaiwork.jpg' },
  { name: 'Interlock Work', image: '/interlockwork.jpg' },
  { name: 'Fitting Adjustment' },
]

const GENTS_SERVICES = [
  'Gents Jeans Alteration',
  'Gents Shirts Alteration',
  'Lowers and Bottom Wear',
]

function CollapseCard({ title, items, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#3a2e35] border border-amber-900/30 shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-400 hover:border-amber-700/40">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors hover:bg-[#443840]"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-amber-50 text-lg sm:text-xl">
          {title}
        </span>
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-medium transition-all duration-300 ${
            isOpen ? 'bg-amber-500 text-[#1a1518]' : 'bg-amber-900/50 text-amber-200'
          }`}
          style={isOpen ? { transform: 'rotate(180deg)' } : {}}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-amber-900/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {items.map((item) => {
                const label = typeof item === 'string' ? item : item.name
                const image = typeof item === 'object' && item.image ? item.image : null
                if (image) {
                  return (
                    <div
                      key={label}
                      className="rounded-xl overflow-hidden bg-[#2d2228] border border-amber-900/30 hover:border-amber-700/40 transition-colors"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2228]/80 to-transparent" />
                        <p className="absolute bottom-0 left-0 right-0 p-3 text-amber-50 font-medium text-sm sm:text-base">
                          {label}
                        </p>
                      </div>
                    </div>
                  )
                }
                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-[#2d2228] border border-amber-900/30 px-4 py-3 hover:border-amber-700/40 hover:bg-[#352a30] transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium text-amber-50 text-sm sm:text-base">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Alterations() {
  const [openFinishing, setOpenFinishing] = useState(true)
  const [openGents, setOpenGents] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero – same theme as Covers & Women's Clothing */}
      <section className="relative min-h-[38vh] flex items-center justify-center text-white overflow-hidden py-20">
        <img
          src="/saare.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3d2a35]/85" />
        <div className="relative z-10 text-center px-6">
          <span className="text-amber-200/90 text-sm font-medium tracking-widest uppercase">
            Alterations & finishing
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mt-2">
            What We Stitch?
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-md mx-auto">
            Perfect fit for every garment — suit, blouse, gents & more
          </p>
          <div className="mt-6 w-16 h-px bg-amber-300/60 mx-auto" />
        </div>
      </section>

      {/* Collapsible cards – wine & amber theme */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-[#2d2228]">
        <div className="max-w-3xl mx-auto space-y-6">
          <CollapseCard
            title="Alterations & Finishing Services"
            items={ALTERATIONS_FINISHING}
            isOpen={openFinishing}
            onToggle={() => setOpenFinishing((prev) => !prev)}
          />
          <CollapseCard
            title="Gents Alteration"
            items={GENTS_SERVICES}
            isOpen={openGents}
            onToggle={() => setOpenGents((prev) => !prev)}
          />
        </div>
      </section>
    </>
  )
}
