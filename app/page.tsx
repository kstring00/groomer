import TextToBook from "@/components/TextToBook";
import { callHref, directionsHref, site, smsHref } from "@/config/site";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.businessName,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "15:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
    bestRating: 5,
  },
};

function Paw() {
  return <span className="paw" aria-hidden="true">●</span>;
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />

      {site.previewMode && (
        <div className="preview-bar">PRIVATE WEBSITE PREVIEW · NOT YET THE OFFICIAL SNOOPY&apos;S CORNER WEBSITE</div>
      )}

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Snoopy's Corner home">
          <span className="brand-mark"><Paw /></span>
          <span><strong>Snoopy&apos;s</strong><small>Corner Dog Grooming</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Grooming</a>
          <a href="#nervous">Nervous pups</a>
          <a href="#visit">Visit us</a>
        </nav>
        <div className="header-actions">
          <a className="text-link" href={callHref}>Call</a>
          <a className="button button-small button-primary" href={smsHref("Hi Snoopy's Corner! I'd like to ask about a grooming appointment.")}>Text to book</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="location-kicker"><span className="live-dot" /> SEABROOK, TEXAS · DOGS UP TO 80 LBS</div>
          <h1>Gentle grooming.<br/><em>Happy tails.</em></h1>
          <p className="hero-lede">A small neighborhood grooming salon where nervous pups, Doodles, seniors, and first-timers get patient care without the big-box feel.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={smsHref("Hi Snoopy's Corner! I'd like to ask about a grooming appointment.")}>Text to book <span>→</span></a>
            <a className="button button-ghost" href={callHref}>Call {site.displayPhone}</a>
          </div>
          <div className="hero-proof">
            <div><strong>5.0</strong><span>★★★★★<br/>Google rating</span></div>
            <div><strong>51</strong><span>Google<br/>reviews</span></div>
            <div><strong>80</strong><span>lb max<br/>dog size</span></div>
          </div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-sticker">GOOD DOGS<br/><strong>LIVE HERE</strong></div>
          <img className="hero-art" src="/snoopy-hero.svg" alt="Original preview illustration of a calm dog at a grooming salon" />
          <div className="hero-note">Concept art for preview · real Snoopy&apos;s photos go here after permission</div>
        </div>
      </section>

      <section className="move-banner" aria-label="Current location notice">
        <div className="move-icon">↗</div>
        <div>
          <span className="eyebrow">IMPORTANT LOCATION UPDATE</span>
          <h2>We&apos;re on Bayport Blvd.</h2>
          <p>Some older listings still point customers to 2nd Street. The current salon is at <strong>{site.address.street}, {site.address.city}</strong> — {site.address.landmark}.</p>
        </div>
        <a className="button button-light" href={directionsHref} target="_blank" rel="noreferrer">Get directions</a>
      </section>

      <section className="trust-ribbon">
        <span><Paw /> Owner-operated since 2020</span>
        <span><Paw /> Tue–Sat · 9:00–3:30</span>
        <span><Paw /> Texting is the easiest way to book</span>
        <span><Paw /> Seabrook, TX</span>
      </section>

      <section className="section services" id="services">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">WHAT YOUR PUP NEEDS</span>
            <h2>From scruffy to<br/><em>fresh & fluffy.</em></h2>
          </div>
          <p>These are services documented under current ownership. Exact package details and pricing stay off the preview until Krystlle confirms them.</p>
        </div>
        <div className="service-grid">
          {site.services.map((service, index) => (
            <article className="service-card" key={service.name}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.note}</p>
              <a href="#book">Ask about this <span>→</span></a>
            </article>
          ))}
        </div>
        <p className="services-note">Need something else? Text Snoopy&apos;s Corner first. Cat grooming and older Weebly-era services are intentionally not listed until the current owner confirms them.</p>
      </section>

      <section className="nervous-section" id="nervous">
        <div className="nervous-visual" aria-hidden="true">
          <div className="calm-ring ring-one" />
          <div className="calm-ring ring-two" />
          <div className="calm-ring ring-three" />
          <div className="dog-face"><span>◡</span></div>
          <div className="tiny-tag">easy does it.</div>
        </div>
        <div className="nervous-copy">
          <span className="eyebrow">THE THING CUSTOMERS KEEP MENTIONING</span>
          <h2>Nervous pup?<br/><em>You&apos;re in good hands.</em></h2>
          <p>Reviews repeatedly describe dogs who are anxious, difficult during grooming, or noticeably calmer here than at other groomers. Snoopy&apos;s Corner also gets warm mentions for patient care with senior dogs and first puppy cuts.</p>
          <div className="theme-chips">
            <span>Anxious dogs</span><span>Senior pups</span><span>First grooms</span><span>Doodle cuts</span>
          </div>
          <a className="button button-dark" href={smsHref("Hi Snoopy's Corner! My dog gets nervous during grooming. Can I tell you a little about them?")}>Tell us about your pup</a>
        </div>
      </section>

      <section className="section work-section">
        <div className="section-heading center-heading">
          <span className="eyebrow">A BEFORE & AFTER BUSINESS</span>
          <h2>The best proof will be<br/><em>their actual pups.</em></h2>
          <p>This preview uses designed photo slots instead of taking customer photos from Google or Yelp. Owner-approved Snoopy&apos;s work can drop straight in here.</p>
        </div>
        <div className="before-after-grid">
          <article className="photo-slot photo-one">
            <div className="photo-label">BEFORE</div>
            <div className="photo-dog">◖ᴥ◗</div>
            <div className="photo-caption">REAL SNOOPY&apos;S PHOTO</div>
          </article>
          <div className="transform-arrow">→</div>
          <article className="photo-slot photo-two">
            <div className="photo-label">AFTER</div>
            <div className="photo-dog groomed">◖ᴥ◗</div>
            <div className="photo-caption">REAL SNOOPY&apos;S PHOTO</div>
          </article>
        </div>
        <div className="gallery-strip">
          <div><span>DOODLE CUT</span><strong>Photo slot</strong></div>
          <div><span>PUPPY FIRST CUT</span><strong>Photo slot</strong></div>
          <div><span>FRESH BATH</span><strong>Photo slot</strong></div>
          <div><span>HAPPY PICKUP</span><strong>Photo slot</strong></div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <span className="eyebrow">MEET SNOOPY&apos;S CORNER</span>
          <h2>Small shop.<br/><em>Familiar faces.</em></h2>
          <p>Krystlle has run Snoopy&apos;s Corner since 2020. Customers describe the salon like a neighborhood shop — personal, unfussy, and the kind of place where groomers and dogs get to know each other over time.</p>
          <p className="about-small">The team has moved into a larger Bayport Blvd location. Current staff names will be added only after Krystlle confirms who is still on the team and wants to be featured.</p>
        </div>
        <div className="about-photo-placeholder">
          <div className="portrait-paws"><Paw /><Paw /><Paw /></div>
          <span>OWNER / TEAM PHOTO</span>
          <strong>Krystlle + pups go here</strong>
          <small>Owner-approved photography only</small>
        </div>
      </section>

      <section className="reviews-section">
        <div className="rating-block">
          <span className="stars">★★★★★</span>
          <strong>5.0</strong>
          <span>51 Google reviews<br/>as researched Aug. 11, 2026</span>
        </div>
        <div className="review-copy">
          <span className="eyebrow">WHAT PEOPLE COME BACK FOR</span>
          <h2>Known for the way<br/><em>they treat the dog.</em></h2>
          <p>Instead of copying customer reviews into the preview, these are the recurring themes across the current public feedback.</p>
          <div className="review-theme-list">
            {site.reviewThemes.map((theme) => <span key={theme}>{theme}</span>)}
          </div>
          <div className="social-links">
            <a href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
            <a href={site.socials.yelp} target="_blank" rel="noreferrer">Yelp ↗</a>
            <a href={site.socials.nextdoor} target="_blank" rel="noreferrer">Nextdoor ↗</a>
          </div>
        </div>
      </section>

      <section className="book-section" id="book">
        <div className="book-copy">
          <span className="eyebrow">NO LOGIN. NO BOOKING APP.</span>
          <h2>Just text the groomer.</h2>
          <p>Snoopy&apos;s Corner already schedules by text. The website should make that easier, not replace a system that works with a calendar that could overbook a small salon.</p>
          <div className="booking-steps">
            <div><strong>1</strong><span>Tell us what your pup needs.</span></div>
            <div><strong>2</strong><span>Text the details to Snoopy&apos;s Corner.</span></div>
            <div><strong>3</strong><span>Work out an appointment directly.</span></div>
            <div><strong>4</strong><span>Drop off at Bayport Blvd.</span></div>
          </div>
        </div>
        <TextToBook />
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-map" aria-hidden="true">
          <div className="map-road road-one">BAYPORT BLVD</div>
          <div className="map-road road-two">NASA PKWY</div>
          <div className="map-pin"><span><Paw /></span><small>SNOOPY&apos;S</small></div>
          <div className="map-landmark">SHERWIN<br/>WILLIAMS</div>
        </div>
        <div className="visit-copy">
          <span className="eyebrow">THE CORRECT ADDRESS</span>
          <h2>Find us on<br/><em>Bayport Blvd.</em></h2>
          <address>
            <strong>{site.address.street}</strong><br/>
            {site.address.city}, {site.address.state} {site.address.zip}<br/>
            <span>{site.address.landmark}</span>
          </address>
          <div className="hours-grid">
            {site.hours.map((item) => <div key={item.days}><span>{item.days}</span><strong>{item.value}</strong></div>)}
          </div>
          <div className="visit-actions">
            <a className="button button-primary" href={directionsHref} target="_blank" rel="noreferrer">Get directions</a>
            <a className="button button-ghost" href={callHref}>Call</a>
          </div>
          <div className="old-info-warning"><strong>Heads up:</strong> 1506 2nd Street and 281-338-6900 are old Snoopy&apos;s Corner information from the previous website.</div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <span className="eyebrow">BEFORE YOU TEXT</span>
          <h2>Quick answers.</h2>
        </div>
        <div className="faq-grid">
          <details open><summary>How do I book?</summary><p>Text {site.displayPhone}. That is Snoopy&apos;s Corner&apos;s publicly stated preferred booking method.</p></details>
          <details><summary>How large a dog do you take?</summary><p>Snoopy&apos;s Corner currently advertises grooming for dogs up to 80 lbs.</p></details>
          <details><summary>Do you handle anxious dogs?</summary><p>Current customer reviews repeatedly describe successful, calmer experiences with anxious and difficult dogs.</p></details>
          <details><summary>Do you do Doodle cuts?</summary><p>Yes. Customers specifically mention seeking out Snoopy&apos;s Corner for Doodle and breed-specific cuts.</p></details>
          <details><summary>What&apos;s included in a full groom?</summary><p>Current review evidence documents haircut service with nail, ear, and anal-gland care included. Exact current package details still need owner confirmation before launch.</p></details>
          <details><summary>Do you groom cats or take walk-ins?</summary><p>Those details are not currently verified under current ownership. Text the salon to confirm before visiting.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-paw"><Paw /></div>
        <span className="eyebrow">READY WHEN YOUR PUP IS</span>
        <h2>Text Snoopy&apos;s Corner.<br/><em>We&apos;ll take it from there.</em></h2>
        <div className="hero-actions final-actions">
          <a className="button button-light" href={smsHref("Hi Snoopy's Corner! I'd like to ask about a grooming appointment.")}>Text to book</a>
          <a className="button button-outline-light" href={callHref}>{site.displayPhone}</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark"><Paw /></span>
          <div><strong>{site.businessName}</strong><span>{site.address.street} · {site.address.city}, {site.address.state} {site.address.zip}</span></div>
        </div>
        <div className="footer-meta">
          <span>Tue–Sat · 9:00 AM–3:30 PM</span>
          <span>Sun + Mon · Closed</span>
          <a href={smsHref()}>Text {site.displayPhone}</a>
        </div>
        {site.previewMode && <div className="footer-preview">Private prospect preview · noindex / nofollow</div>}
      </footer>

      <div className="mobile-actions" aria-label="Mobile actions">
        <a href={callHref}>Call</a>
        <a href={smsHref("Hi Snoopy's Corner! I'd like to ask about a grooming appointment.")}>Text to book →</a>
      </div>
    </main>
  );
}
