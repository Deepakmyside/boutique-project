import { useRef, useEffect } from 'react'
import ServiceSection from '../components/ServiceSection'
import VisitUsSection from '../components/VisitUsSection'
import WhatsAppContact from '../components/WhatsAppContact'

export default function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.playsInline = true
    video.loop = true
    const play = () => video.play().catch(() => {})
    if (video.readyState >= 2) play()
    else video.addEventListener('loadeddata', play)
    return () => video.removeEventListener('loadeddata', play)
  }, [])

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
          aria-hidden
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg">
            Tailored Elegance, Just for You
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200/95 leading-relaxed">
            Custom stitching, lehenga, saree, salwar suits & alterations in{' '}
            <span className="text-pink-200 font-semibold italic tracking-wide border-b border-pink-400/60 border-dashed pb-0.5">
              Raman, Punjab
            </span>
          </p>
           <p className="mt-4 sm:mt-6 text-sm sm:text-lg font-bold md:text-4xl text-yellow-200/95 leading-relaxed">
           Best Home-based Tailors for ladies {' '}

          </p>
          <p className="mt-6 sm:mt-10 text-xs sm:text-sm text-gray-300">
            ⭐⭐⭐⭐⭐ Rated 5 Stars
          </p>
        </div>
      </section>

      {/* Experience section – 25+ years tailoring */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fdf8f5] to-[#f7eef2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-800 tracking-tight">
                Har Stitch Mein Vishwas
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                25+ years ka tailoring experience ke saath, hum har ladies suit, lehenga aur saree ko perfect fitting aur fine finishing ke saath tayar karte hain.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Ridhi Sidhi Tailors traditional Punjabi style se lekar latest trending designer suits tak, har design ko pyaar aur precision ke saath craft karte hain — bilkul aapki pasand ke mutabik.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Led by experienced tailor Mrs. Ridhi Sharma.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/experiencepage.jpg"
                alt="Ridhi Sidhi Boutique tailoring experience"
                className="w-full h-auto rounded-2xl shadow-lg object-cover ring-1 ring-black/5 aspect-[3/4]"
              />
              <img
                src="/experience2page.jpg"
                alt="Ridhi Sidhi Boutique craftsmanship"
                className="w-full h-auto rounded-2xl shadow-lg object-cover ring-1 ring-black/5 aspect-[3/4] mt-8"
              />
            </div>
          </div>
          <div className="mt-12 flex gap-8 justify-center sm:justify-start flex-wrap">
            <div className="bg-blush-deep text-white px-6 py-5 rounded-2xl shadow-lg text-center min-w-[120px]">
              <p className="font-display text-2xl sm:text-3xl font-semibold">25+</p>
              <p className="text-xs sm:text-sm text-white/90">Years Experience</p>
            </div>
            <div className="bg-blush-deep text-white px-6 py-5 rounded-2xl shadow-lg text-center min-w-[120px]">
              <p className="font-display text-2xl sm:text-3xl font-semibold">500+</p>
              <p className="text-xs sm:text-sm text-white/90">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection />
      <VisitUsSection />
      <WhatsAppContact />
    </>
  )
}
