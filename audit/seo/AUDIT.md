# Apex SEO audit — 2026-09-12

## Baseline and critical findings

Reliable checkout: /tmp/apex-qa, GitHub LawsonBick/ApexCleansAustin, main. Original Desktop checkout suffers file-provider timeouts; it must not be treated as the latest source. Baseline commit 5ded465. Vercel project apex-cleans-austin is Ready on apex-cleans-austin.vercel.app. apexcleansaustin.com currently serves the older Cloudflare-backed site (title: Spicewood Window Cleaning; H1 targets Lakeway). This is a migration, not a completed custom-domain launch.

| Priority | Finding | Action/status |
|---|---|---|
| Critical | All 38 crawled new-site pages contain noindex | SITE_INDEXABLE is blank. Keep temporary host nonindexable pending custom-domain migration; set production true at launch. Preview environment explicitly remains noindex in code. |
| Critical | Real authorized quote test returns 503 | RESEND_API_KEY and QUOTE_FROM exist but are empty. No email was sent. Owner must securely configure a valid key and verified sender, redeploy, and retest. |
| Critical | Custom domain points to old host | Added apex and www domains to Vercel. GoDaddy DNS access pending. Vercel requests A record 76.76.21.21 for both hostnames; preserve MX/TXT/email records. Verify existing www record before replacing it. |
| High | Eight blog URLs contain irrelevant Arizona terms or a space | Renamed to topic-focused slugs, updated internal links/sitemap through shared content, added permanent redirects. |
| High | Service titles/H1 lack Austin intent | Added Austin & Lake Travis to primary service metadata and H1. Added concrete scope, estimate factors, preparation and related-service links. |
| High | Oversized 720 KB header logo and hero delivery | Compact WebP logo; compressed hero formats and intermediate 960px candidate. |
| Medium | Sitemap response unnecessarily carried noindex | Removed X-Robots-Tag from sitemap response. |
| Medium | Dynamic params decoded twice | Removed redundant decodeURIComponent; Next supplies decoded params. |
| Medium | Global smooth scrolling persisted for reduced-motion users | Added reduced-motion override. |
| Medium | AI-enhanced hero looked like unmodified project evidence | Kept requested enhanced hero but labeled its enhancement. Generated storefront/truck concepts are not used as job evidence. |

Crawl inventory: before.json (38 reachable HTML pages, zero request errors). Crawl-based availability is not proof of Google indexing. No Search Console or Google Business Profile authenticated access was established. No map-grid rankings or search-volume claims are made.

## Search research and keyword map

Research sampled web search results, not a geolocated Austin map-pack ranking. Results vary by searcher location and time. Competitor claims below describe their own published content, not independently verified credentials.

- [Clear Choice](https://www.windowcleaningatx.com/) organizes window, pressure and concrete services, puts estimates prominently, and publishes longevity and customer evidence. Apex should compete with clear scope and verified evidence rather than copy guarantees.
- [Casa Care](https://www.casacarepropertyservices.com/) combines detailed service navigation with a quote flow and proof near its CTA. Apex's simpler inquiry flow should work reliably and explain what determines its estimate.
- [ATX Clean](https://powerwashaustin.com/) addresses pressure washing and driveway/sidewalk use cases. Apex should cover these within its primary pressure-washing page before creating additional landing pages.
- [Pressure's On](https://pressuresonpressurewash.com/) presents both window and exterior surface services with service-area relevance. This supports related-service links, not duplicate synonym pages.

| Intent | Primary destination | Next evidence needed |
|---|---|---|
| Apex / window cleaning Austin | / | Verified local work and maintained customer reviews |
| residential window washing Austin | /services/window-cleaning | Actual process, screens/tracks inclusions, typical project scope |
| pressure washing / power washing Austin | /services/pressure-washing | Confirm equipment, surface methods and recent driveway projects |
| driveway / patio cleaning Austin | Sections of pressure-washing page | Separate pages only when enough unique work and service detail exists |
| solar panel cleaning | /services/solar-panel-cleaning | Actual cleaning method and access limits |
| local service availability | /service-areas/austin, /lakeway, /bee-cave, /spicewood | Owner confirmation and location-specific project evidence |
| price / frequency / preparation questions | Renamed blog guides | Real estimates or owner guidance; no invented prices |

Existing peripheral service-area pages remain published but are thin. Do not expand them with city substitution. Consolidate under the service-area hub if coverage or unique usefulness cannot be substantiated. Blog bodies remain brief planning guides; prioritize strengthening cost and scope guides before adding more posts.

## Structured data and credibility

Business and service entities use consistent name, phone and canonical origin with no invented street address. Breadcrumb and service markup is present. Google LocalBusiness rich-result eligibility requires an address; do not fabricate one to pass a validator. No review stars are promised from self-serving review markup. Source: [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business).

Apex has no customer-facing storefront. Keep the Business Profile address hidden as applicable, with truthful service areas. Source: [Google address guidance](https://support.google.com/business/answer/2853879). Review date/count should be periodically checked against the original profile; the displayed four-review snapshot is not a live feed. Generated storefront and truck images should not be uploaded as real business photographs. Gallery reuse was approved by the owner, but individual job dates and locations were not documented.

## Conversion validation

Six existing quote unit tests pass: contact validation, size limits, missing configuration, fixed recipient/idempotency, provider errors, and network failure. These mock tests do not prove mailbox delivery. The authorized production test failed safely with 503 because secrets are blank; form messaging gives phone/email alternatives. Rate limiting uses in-memory counters and is best-effort across serverless instances, not durable protection.

## Performance baseline

Mobile Lighthouse on Vercel production alias: performance 83, accessibility 100, best practices 100, SEO 69, LCP 4.5s, CLS 0, total blocking time 10ms. See lighthouse-before.json. SEO is limited by intentional prelaunch noindex. This is one lab run, not real-user p75 Core Web Vitals. INP requires field measurement and is not established by TBT.

## 30/60/90-day plan

Days 1–30: complete DNS migration and email delivery; enable production indexing only on the intended canonical host; verify Search Console ownership and submit sitemap; check real mobile inquiries; confirm service coverage, hours and categories in Google Business Profile. Request reviews neutrally from actual customers without incentives or screening. Capture original job photos with approval.

Days 31–60: publish two documented project stories (window work and driveway/patio cleaning), strengthen pricing/scope guidance using actual owner input, audit discovery queries and form completion, correct high-value business-directory inconsistencies. Consider genuine local trade/chamber relationships where relevant; no bulk directory submissions or paid ranking links.

Days 61–90: compare qualified inquiries and Search Console nonbranded queries by landing page; use real results to improve low-converting pages. Review peripheral location pages for consolidation. Monitor field Core Web Vitals once sufficient traffic exists, recheck broken links and indexing, and maintain current reviews and work photos.

## Remaining owner inputs

GoDaddy sign-in; secure Resend production API key and verified sender; confirmation of receipt after retest; Search Console and Google Business Profile access; confirmed hours, coverage, service methods and any credentials/guarantees before advertising them. Do not paste secrets into chat.
