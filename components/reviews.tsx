import { ArrowUpRight, Star } from 'lucide-react';
import { googleReviews, reviews, reviewUrl } from '@/lib/reviews';

export function GoogleRating() {
  return (
    <a className="google-rating" href={googleReviews.url} target="_blank" rel="noopener noreferrer">
      <Star size={17} aria-hidden="true" />
      <span>{googleReviews.rating}/5 · {googleReviews.count} Google reviews</span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

export function Reviews({ full = false }: { full?: boolean }) {
  const selected = full ? reviews : reviews.slice(0, 3);
  return (
    <section className="reviews-section section wrap" id="reviews" aria-labelledby="reviews-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">From our customers</p>
          <h2 id="reviews-heading">A few words.<br />A lot of reassurance.</h2>
        </div>
        <div className="review-summary">
          <GoogleRating />
          <p>Google rating checked <time dateTime={googleReviews.checkedAt}>{googleReviews.checkedLabel}</time>.</p>
        </div>
      </div>
      <div className={`review-grid${full ? ' review-grid-full' : ''}`}>
        {selected.map(review => (
          <figure className="review-quote" key={review.contributor}>
            <blockquote><p>“{review.quote}”</p></blockquote>
            <figcaption>
              <span className="review-author">{review.name}</span>
              <a href={reviewUrl(review.contributor)} target="_blank" rel="noopener noreferrer">
                Read full Google review <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
      {full && <p className="review-invite">Has Apex cleaned your home? <a className="text-link" href={googleReviews.writeReviewUrl} target="_blank" rel="noopener noreferrer">Share your honest experience on Google <ArrowUpRight size={16} aria-hidden="true" /></a></p>}
      <div className="reviews-bottom">
        <p>Short excerpts from Google reviews. Individual experiences may vary.</p>
        <a className="text-link" href={full ? googleReviews.url : '/reviews'}
          {...(full ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {full ? 'View reviews on Google' : 'More from our customers'} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
