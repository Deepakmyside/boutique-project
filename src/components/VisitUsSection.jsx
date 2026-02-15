/**
 * Visit Us & Share Your Experience
 * Set VITE_GOOGLE_PLACE_ID in .env to enable the review link (get from Google Business Profile).
 * Map shows Raman, Punjab 151301; replace MAP_EMBED_SRC with your embed URL from Google Maps for exact pin.
 */
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || ''
const GOOGLE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : 'https://www.google.com/search?q=Ridhi+Sidhi+Boutique+Raman+Punjab'

const MAP_EMBED_SRC = 'https://www.google.com/maps?q=Street+Number+20-A,Raman,Punjab+151301&output=embed'

export default function VisitUsSection() {
  return (
    <section
      className="w-full py-24 px-4 sm:px-6 bg-[#faf7f9]"
      aria-labelledby="visit-us-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="visit-us-heading"
          className="font-display text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-12 sm:mb-16 tracking-tight"
        >
          Visit Us & Share Your Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column – Review CTA */}
          <div className="space-y-5">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 tracking-tight">
              Love Our Work?
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We would truly appreciate your feedback. Share your experience on Google and help others discover our boutique in Raman.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c94f7c] hover:bg-[#b03d68] text-white font-medium px-8 py-3 transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Add Review on Google
            </a>
            <p className="text-gray-500 text-sm">
              Your review helps our home-based boutique grow.
            </p>
          </div>

          {/* Right column – Location & Map */}
          <div className="space-y-5">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 tracking-tight">
              Our Location
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg w-full">
              <iframe
                title="Ridhi Sidhi Boutique, Raman, Punjab"
                src={MAP_EMBED_SRC}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full block"
              />
            </div>
            <div className="text-gray-600 text-sm sm:text-base space-y-1">
              <p className="flex items-center gap-2">
                <span aria-hidden>📍</span>
                Street Number 20-A, Raman, Punjab 151301
              </p>
              <p className="flex items-center gap-2">
                <span aria-hidden>📞</span>
                <a href="tel:+919592857501" className="hover:text-[#c94f7c] transition-colors">
                  +91 9592857501
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
