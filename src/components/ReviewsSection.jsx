/**
 * Add Review opens Google's page – user signs in with Google/Gmail and writes the review there.
 * Set VITE_GOOGLE_PLACE_ID in .env so the link goes to your business. Get Place ID from Google Business Profile.
 */
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || 'YOUR_PLACE_ID'
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`

function ReviewCard({ name, text, avatar }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] rounded-xl bg-white/10 backdrop-blur-md p-6 shadow-lg flex flex-col gap-4">
      <p className="text-amber-200/90 text-sm" aria-hidden>
        ⭐⭐⭐⭐⭐
      </p>
      <p className="text-white/95 text-sm leading-relaxed flex-1">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold text-sm">
          {avatar}
        </div>
        <span className="text-white font-medium text-sm">{name}</span>
      </div>
    </div>
  )
}

export default function ReviewsSection({ reviews = [] }) {
  const hasReviews = Array.isArray(reviews) && reviews.length > 0

  return (
    <section
      className="w-full py-24 px-4 sm:px-6 bg-[#9b4b6e] text-white relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Add Your Review – opens Google review page (sign in with Gmail, then write review) */}
      <div className="absolute top-6 right-4 sm:right-6 z-10">
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-white text-[#9b4b6e] px-4 py-2 text-sm font-medium shadow-md transition-colors duration-200 hover:bg-[#9b4b6e] hover:text-white hover:ring-2 hover:ring-white"
        >
          Add Your Review
        </a>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="reviews-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Loved by Our Customers
          </h2>
          <p className="mt-3 text-white/90 text-base sm:text-lg max-w-xl mx-auto">
            Real stories from women who trusted us with their special outfits.
          </p>
        </div>

        {hasReviews ? (
          /* Right-to-left infinite scrolling marquee – only when we have real reviews */
          <div className="group overflow-hidden select-none -mx-4 sm:-mx-6" aria-label="Customer reviews carousel">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              <div className="flex gap-6 px-4 sm:px-6">
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    name={review.name}
                    text={review.text}
                    avatar={review.avatar}
                  />
                ))}
              </div>
              <div className="flex gap-6 px-4 sm:px-6" aria-hidden>
                {reviews.map((review) => (
                  <ReviewCard
                    key={`dup-${review.id}`}
                    name={review.name}
                    text={review.text}
                    avatar={review.avatar}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Empty state – no dummy reviews; show when site is not yet live or no reviews yet */
          <div className="text-center py-8">
            <p className="text-white/90 text-lg">
              No reviews yet — be the first to share your experience.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-full bg-white text-[#9b4b6e] px-6 py-3 text-sm font-medium shadow-md transition-colors duration-200 hover:bg-[#9b4b6e] hover:text-white hover:ring-2 hover:ring-white"
            >
              Add Your Review
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
