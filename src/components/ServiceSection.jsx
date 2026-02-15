import { Link } from 'react-router-dom'

// Images from public/ folder
const CARDS = [
  {
    title: "Women's Clothing",
    subtitle: "Lehenga, saree, suits & more",
    path: '/women-clothing',
    image: '/Women clothing.jpeg',
  },
  {
    title: 'Covers Making',
    subtitle: 'AC, fridge, pillow & custom covers',
    path: '/covers-making',
    image: '/covermain.png',
  },
  {
    title: 'Alterations & Other Facilities',
    subtitle: 'Perfect fit for every garment',
    path: '/alterations',
    image: '/alterations .jpg',
  },
]

function getImageSrc(path) {
  if (!path || path === '/') return path
  return path.startsWith('/') ? path.split('').map((c) => (c === ' ' ? '%20' : c)).join('') : path
}

export default function ServiceSection() {
  return (
    <section
      className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-[#fdf8f5]"
      aria-labelledby="custom-tailoring-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="custom-tailoring-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight"
          >
            Custom Tailoring
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Designed and stitched with precision for every occasion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CARDS.map((card) => (
            <Link
              key={card.path}
              to={card.path}
              className="group block rounded-xl overflow-hidden shadow-card hover:shadow-cardHover hover:ring-2 hover:ring-rose-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={getImageSrc(card.image)}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-white/90 text-sm">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
