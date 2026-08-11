# Snoopy's Corner Dog Grooming — private preview

A mobile-first single-page website concept for Snoopy's Corner Dog Grooming in Seabrook, Texas.

## What this preview is solving

The existing `snoopyscorner.weebly.com` page reflects the previous ownership era and still publishes stale business information. This preview uses the current verified identity:

- Snoopy's Corner Dog Grooming
- 2014 Bayport Blvd, Seabrook, TX 77586
- (832) 226-9485
- Tuesday–Saturday, 9:00 AM–3:30 PM
- Sunday + Monday closed
- Text is the preferred booking channel
- Dogs up to 80 lbs
- 5.0 Google rating / 51 reviews as researched August 11, 2026
- Krystlle is the current owner and has run Snoopy's Corner since 2020

Never reintroduce the stale 1506 2nd Street address or 281-338-6900 phone number.

## Conversion flow

The site deliberately does not add a booking calendar. The current business schedules by text.

1. Customer sees current location, size limit, hours, and service context.
2. Customer taps Text to Book.
3. Optional on-page builder formats service, dog size, temperament, and notes.
4. The browser opens the customer's SMS app addressed to (832) 226-9485.
5. Customer and groomer schedule directly by text.

No form data is stored on a server.

## Visual direction

Warm neighborhood grooming shop, not luxury spa or corporate pet franchise. The palette is a proposed warm green / soft coral / cream system because no current brand assets were verified. The hero artwork is original preview SVG concept art, not a real Snoopy's Corner project photo.

## Real photo replacement

Replace `/public/snoopy-hero.svg` with an owner-approved hero photo after permission, then update the hero `<img>` in `app/page.tsx`.

The designed before/after and gallery placeholders in `app/page.tsx` are intentionally not represented as real work. Ideal owner-supplied photography:

- current Bayport Blvd storefront
- Krystlle with a finished dog
- 3–4 true before/after grooming pairs
- Doodle cut
- puppy first cut
- bath / fresh finish
- calm grooming moment with a nervous dog
- optional current staff photo after consent

Do not copy customer-uploaded Google or Yelp photos without permission / attribution clearance.

## OWNER MUST CONFIRM BEFORE PUBLIC LAUNCH

- access to / control of the old `snoopyscorner.weebly.com` site
- exact current service menu and any price ranges
- whether cat grooming is still offered
- vaccination requirements
- cancellation / no-show policy
- matting policy
- whether the $5 first-visit offer is still active
- whether nail trims accept walk-ins
- payment methods
- photo rights and permission to shoot new photos
- current staff names and consent to feature them
- logo / signage / preferred brand colors
- any turnaround or availability language before publishing it

## Deliberately excluded

- unverified prices
- cat grooming
- $5 promotion
- walk-in claim
- pickup / drop-off as an advertised service
- previous owner's 16 years of experience
- previous owner's shelter / donation history
- certification / insurance claims
- guarantees
- copied review quotes
- unverified staff names
- old tagline

## Preview indexing

`config/site.ts` sets `previewMode: true`. `app/layout.tsx` emits `noindex, nofollow` metadata while preview mode is enabled.

Do not switch preview mode off until the current owner approves the content and the stale-site / identity cleanup plan is ready.

## Local SEO launch priorities

1. If possible, remove or redirect the stale Weebly page.
2. Audit directories still publishing 1506 2nd Street or 281-338-6900.
3. Review the duplicate older Facebook identity.
4. Publish one consistent NAP everywhere: Snoopy's Corner Dog Grooming, 2014 Bayport Blvd, Seabrook, TX 77586, (832) 226-9485.
5. Add current owner-approved storefront / grooming photography.

## Development

```bash
npm install
npm run dev
npm run build
```
