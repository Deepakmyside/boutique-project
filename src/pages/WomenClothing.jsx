import { useState } from 'react'

function enc(path) {
  return path.replace(/ /g, '%20')
}

const CATEGORIES = [
  {
    id: 'special-occasion',
    title: 'Special Occasion Wear',
    items: [
      { name: 'Lehenga Stitching', image: '/Lehnga.jpg' },
      { name: 'Saree Blouse Stitching', image: '/sareeblousestitch.jpeg' },
      { name: 'Designer Gown', image: '/gown.jpeg' },
      { name: 'Saree to Lehenga Conversion', image: '/SaareToLehngaconvert.jpeg' },
      { name: 'Wedding Custom Outfits', image: '/partywear.jpeg' },
    ],
  },
  {
    id: 'punjabi-wears',
    title: 'Punjabi Wears',
    items: [
      { name: 'Sharara Suit', image: '/shrara.jpeg' },
      { name: 'Plazo Suit', image: '/plazo.jpeg' },
      { name: 'Salwar Suit', image: '/salwarsuit.jpeg' },
      { name: 'Afghani Salwar Suit', image: '/afghani.jpeg' },
      { name: 'Patiala Shahi Salwar Suit', image: '/patiala shahi.jpg' },
      { name: 'Dhoti Salwar Suit', image: '/dhotisalwarsuit.jpeg' },
      { name: 'Straight Salwar Suit', image: '/straightsalwar.jpeg' },
      { name: 'Farshi Salwar Suit', image: '/farshi.jpeg' },
      { name: 'Naira Cut Suit', image: '/nairacutsuit.jpeg' },
    ],
  },
  {
    id: 'kurtis-daily',
    title: 'Kurtis & Daily Wear',
    items: [
      { name: 'Designer Kurtis', image: '/kurtis.jpg' },
      { name: 'Simple Kurtis', image: '/normal kurti.jpeg' },
      { name: 'Daily Wear Suits', image: '/dailywear.jpg' },
    ],
  },
  {
    id: 'kids-frocks',
    title: 'Kids & Frocks',
    items: [
      { name: 'Kids Frock Suit', image: '/frock.jpeg' },
      { name: 'Cute Dresses', image: '/cutedress.jpeg' },
      { name: 'Girls Party Wear', image: '/partywear.jpeg' },
    ],
  },
]

function CategoryCard({ category, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#3a2e35] border border-amber-900/30 shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-400 hover:border-amber-700/40">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors hover:bg-[#443840]"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-amber-50 text-lg sm:text-xl">
          {category.title}
        </span>
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-medium transition-all duration-300 ease-out ${
            isOpen ? 'bg-amber-500 text-[#1a1518]' : 'bg-amber-900/50 text-amber-200'
          }`}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-xl overflow-hidden bg-[#2d2228] border border-amber-900/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-700/40"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-[#3a2e35]">
                    <img
                      src={enc(item.image)}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2228]/70 to-transparent" />
                  </div>
                  <p className="px-3 py-3 text-center font-medium text-amber-50 text-sm sm:text-base group-hover:text-amber-200 transition-colors">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WomenClothing() {
  const [openId, setOpenId] = useState(null)

  return (
    <>
      {/* Hero – same theme as Covers */}
      <section className="relative min-h-[38vh] flex items-center justify-center text-white overflow-hidden py-20">
        <img
          src="/saare.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3d2a35]/85" />
        <div className="relative z-10 text-center px-6">
          <span className="text-amber-200/90 text-sm font-medium tracking-widest uppercase">
            Women&apos;s wear
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mt-2">
            What We Stitch?
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-md mx-auto">
            Lehenga, saree, suits & more — tailored with care in Raman, Punjab
          </p>
          <div className="mt-6 w-16 h-px bg-amber-300/60 mx-auto" />
        </div>
      </section>

      {/* Categories – wine & amber theme */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-[#2d2228]">
        <div className="max-w-4xl mx-auto space-y-6">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isOpen={openId === category.id}
              onToggle={() => setOpenId((prev) => (prev === category.id ? null : category.id))}
            />
          ))}
        </div>
      </section>
    </>
  )
}
