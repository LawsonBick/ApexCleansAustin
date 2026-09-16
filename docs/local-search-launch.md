# Apex: local search launch and client handoff

Prepared September 15, 2026. Primary website: https://www.apexwindowcleaningatx.com/

## Google Business Profile: changes submitted

Manager access became available during this session. The business description, secondary Pressure washing service category, campaign website link, and hidden-address/service-area configuration were saved. Austin, Bee Cave, and Spicewood were added alongside existing Lakeway coverage. Window cleaning and pressure washing service descriptions were saved; solar panel cleaning was added with a description. Service edits can remain pending Google review for up to one day, as shown in its editor. Existing hours were preserved pending Brett’s confirmation.

- Existing public listing: https://www.google.com/maps?ftid=0x636aeee7ad2eecaf:0x6e7e9fbadf682982
- Keep the real-world business name. The current public name is Apex Window Cleaning ATX. Do not add keyword strings to the name.
- Primary category: Window cleaning service.
- Check whether Pressure washing service is available and add it as a secondary category if absent. Keep other categories limited to services Apex actually provides.
- Because customers do not visit a storefront, turn off “Show business address to customers” under Edit profile → Location. Retain the accurate address privately for Google verification. Do not replace it with an invented office or location.
- Set genuine service areas. Prioritize Spicewood, Lakeway, Bee Cave, and the Austin/Lake Travis communities actually served. Confirm more distant coverage with Brett.
- Verify hours with Brett. No guessed opening hours or 24-hour availability.
- Phone: (512) 825-1484.
- Website URL with attribution: https://www.apexwindowcleaningatx.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp
- If the profile supports a quote/appointment link, use https://www.apexwindowcleaningatx.com/contact?utm_source=google&utm_medium=organic&utm_campaign=gbp . This requests an estimate; it does not book an appointment.

### Saved business description

Apex Window Cleaning has been in business for 8 years. Based in Spicewood, we serve homes around Lake Travis, Lakeway, Bee Cave, and Austin. We provide interior and exterior window cleaning, pressure washing for patios, driveways, and walkways, and residential solar panel cleaning. Free same-day quotes are available. Contact Brett with your city and a few details about the surfaces you want cleaned for a personal estimate.

### Service scope used in the profile

- **Interior and exterior window cleaning:** Choose interior glass, exterior glass, or both. Screens, tracks, hard-water spots, window height, and access are reviewed with your estimate.
- **Patio and driveway pressure washing:** Cleaning for patios, driveways, and walkways, with surface condition, material, access, and suitability assessed before work is confirmed.
- **Solar panel cleaning:** Residential panel cleaning with roof height, installation requirements, and access reviewed before scheduling.

Do not enter unverified prices, insurance claims, guarantees, or promised response times.

### Authentic photo set

Uploaded the existing approved real photo of Brett and his work truck as the new cover, plus the four real chimney/patio photographs. Google showed Upload complete; new images were pending review. Google ultimately chooses what it displays publicly. Existing approved originals in the repository include:
- public/images/brett-with-dog-1280.webp — Brett beside his actual work truck.
- public/images/apex-project-2-1280.webp — chimney before.
- public/images/apex-project-1-1280.webp — chimney after.
- public/images/apex-project-4-1280.webp — fire-pit patio before.
- public/images/apex-project-3-1280.webp — fire-pit patio after.

The original before-and-after angles differ; do not imply a controlled identical-angle comparison. The project cities and dates are not confirmed, so do not invent location captions. No additional window-cleaning before-and-after photos are currently available, as confirmed by the user. New photos are optional future work, not a launch requirement. Select a genuine job/team photo for the cover. Keep the logo as the logo; do not represent a generated vehicle or storefront as an actual business location.

### Review process

After each completed job, ask all customers for an honest review. Do not offer incentives, demand a positive score, or only ask customers expected to give high ratings.

Suggested text for Brett to send after service:

“Thank you for choosing Apex for your cleaning project. If you have a moment, would you share an honest Google review of your experience? Your feedback helps our small business and other local homeowners. https://g.page/r/CYIpaN-6n35uEBM/review Thank you, Brett.”

No customer messages have been sent. The official link was retrieved from the managed profile’s Ask for reviews tool: https://g.page/r/CYIpaN-6n35uEBM/review . It is also linked from the website’s reviews page. Respond personally to each new review without exposing customer information.

## Website improvements

- Primary URL used consistently for canonical links, sitemap, social metadata, and structured data.
- Production crawling/indexing enabled; previews and development remain non-indexable.
- Window cleaning and pressure washing both appear in the homepage headline.
- Local owner, service scope, and exterior-care information added using existing verified details.
- User confirmed 8 years in business and same-day quote availability. These details are added to the homepage, About and contact copy, and quote FAQ. No precise opening date or minute-based response guarantee is inferred.
- Nearby area links added to the homepage; city-page headings identify both main services.
- Before-and-after photos carry short service descriptions without invented cities or dates.
- Google rating snapshot updated to 5.0 from five reviews, checked September 15, 2026. This remains a dated manual snapshot, not a live feed.
- Actual Vercel custom analytics events connected; privacy copy updated.
- General lead-source label included in quote emails, with no contact details sent to analytics.

## Search Console and verification

- URL-prefix property https://www.apexwindowcleaningatx.com/ verified with the deployed HTML meta tag under lawbick@gmail.com. Keep the tag in the root layout.
- Corrected sitemap submitted successfully. The report initially showed Couldn’t fetch / Sitemap could not be read. Google’s own live URL inspection then confirmed Crawl allowed: Yes; Page fetch: Successful; Indexing allowed: Yes for the sitemap at 7:45 PM Central. Sitemap report processing remains outstanding; do not claim all pages are indexed.
- Homepage indexing requested successfully; Google added it to the priority crawl queue. Its older indexed snapshot still reflected the previous robots block.
- All 38 sitemap URLs independently checked on production: HTTP 200, correct canonical domain, index/follow, one H1.
- Production build and seven quote tests passed. Responsive layout checked at 320px and 390px with no horizontal overflow.
- Existing full-page anchor navigation is retained. Focused lint checks passed with that Next.js navigation preference disabled; the existing optimized-logo img warning remains.
- One labeled live test quote returned provider acceptance. Vercel Analytics displayed both form_start and quote_submission_accepted. No production 5xx entries appeared in the 30-minute post-deploy scan.

## Measurement

Vercel project: apex-cleans-austin → Analytics. Custom events require Pro/Enterprise; the current team is Pro and Web Analytics is enabled.

- quote_cta_click: interest in requesting a quote.
- form_start: a visitor starts interacting with the form.
- quote_submission_accepted: the server/email provider accepts the inquiry. This is a lead, not proof of inbox delivery or a booked job.
- quote_submission_error: validation, server, or connection issue; no entered customer text is attached.
- phone_click: intent to call, not a completed call.
- email_click: intent to email, not a sent email.

Source labels: google_business_profile, google_search, direct, referral. Google Profile attribution is most reliable with the campaign URL above. Privacy restrictions and stripped referrers can limit attribution. Automated QA events may appear in the first day's data.

Brett should keep a simple lead log with date, source, requested service, qualified/not qualified, estimate amount, booked/not booked, and completed revenue. Review weekly. These offline outcomes cannot be inferred from website clicks.

## Owner confirmations still needed

1. Confirm hours: the profile currently says 8 AM–8 PM every day. Confirm more distant service coverage. Access is now working.
2. Any written satisfaction policy before publishing a guarantee. Experience and same-day quote availability have now been confirmed.
3. No additional before-and-after photos are available. Existing approved project images remain; do not fabricate new project evidence.
4. Confirm the test quote arrives at apexwood01@gmail.com. The website can verify provider acceptance, but not mailbox receipt without mailbox access.
5. Access to the old apexcleansaustin.com host to arrange page-to-page permanent redirects. It still serves an HTTP 200 copy of the old website and appears in branded Google results. The new website’s references are corrected, but migration of the old host is still needed if Apex controls it.
6. Recheck Search Console’s sitemap report after Google refreshes it. The live fetch succeeds, but the sitemap report has not yet confirmed processing.

Google decides when to crawl/index pages and where to rank them. Correct indexing settings make the site eligible; they do not guarantee ranking or lead volume.
