import { useState } from 'react'

const SERVICES_DATA = [
  {
    id: 'special-occasion',
    title: 'Special Occasion Wear',
    items: [
      'Lehenga Stitching',
      'Saree Blouse Stitching',
      'Lancha',
      'Designer Gown',
      'Saree to Lehenga Conversion',
      'Bridal Lehenga',
      'Party Wear Lehenga',
      'Wedding Custom Outfits',
    ],
  },
  {
    id: 'punjabi-wears',
    title: 'Punjabi Wears',
    items: [
      'Sharara Suit',
      'Plazo Suit',
      'Salwar Suit',
      'Afghani Salwar Suit',
      'Patiala Shahi Salwar Suit',
      'Dhoti Salwar Suit',
      'Straight Salwar Suit',
      'Farshi Salwar Suit',
      'Naira Cut Suit',
    ],
  },
  {
    id: 'kurtis-daily',
    title: 'Kurtis & Daily Wear',
    items: [
      'Designer Kurtis',
      'Simple Kurtis',
      'Office Wear Dresses',
      'Daily Wear Suits',
    ],
  },
  {
    id: 'kids-frocks',
    title: 'Kids & Frocks',
    items: [
      'Kids Frock Suit',
      'Cute Dresses',
      'Girls Party Wear',
    ],
  },
  {
    id: 'alterations',
    title: 'Alterations & Finishing Services',
    items: [
      'Suit Alteration',
      'Blouse Alteration',
      'Pico',
      'Tarpai',
      'Interlock',
      'Fitting Adjustment',
    ],
  },
]

function AccordionItem({ category, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-xl bg-white overflow-hidden transition-all duration-300 ease-out ${
        isOpen
          ? 'shadow-cardHover ring-1 ring-rose-200'
          : 'shadow-card hover:shadow-cardHover hover:ring-1 hover:ring-rose-100'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="group w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors duration-300 hover:bg-rose-50/50"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-gray-800 text-lg sm:text-xl">
          {category.title}
        </span>
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-medium transition-all duration-300 ease-out bg-rose-100 text-rose-700 group-hover:bg-rose-200 group-hover:text-rose-800 ${
            isOpen ? 'bg-rose-600 text-white' : ''
          }`}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
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
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-rose-100">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 list-none p-0 m-0 pt-4">
              {category.items.map((item, index) => (
                <li
                  key={item}
                  className="opacity-0 animate-fade-slide-up rounded-full bg-pink-50 px-4 py-2.5 text-sm sm:text-base text-gray-700 transition-colors duration-200 hover:bg-rose-100 hover:text-rose-900"
                  style={{
                    animationDelay: `${index * 40}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fdf8f5] to-[#f9f1eb]"
      aria-labelledby="what-we-stitch-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading — center aligned */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="what-we-stitch-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight"
          >
            What We Stitch
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-md mx-auto">
            Crafted with precision for every occasion.
          </p>
        </div>

        {/* Card-based accordion */}
        <div className="space-y-4">
          {SERVICES_DATA.map((category) => (
            <AccordionItem
              key={category.id}
              category={category}
              isOpen={openId === category.id}
              onToggle={() => handleToggle(category.id)}
            />
          ))}
        </div>

        {/* Premium WhatsApp CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="https://wa.me/919592857501"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg transition-all duration-300 hover:shadow-glow hover:from-pink-600 hover:to-rose-700"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
