export const leadSources = ['google_business_profile', 'google_search', 'direct', 'referral'] as const;
export type LeadSource = typeof leadSources[number];

// Store only a coarse channel, never a full referrer, query string, or contact data.
export function getLeadSource(): LeadSource {
 if (typeof window === 'undefined') return 'direct';
 const params = new URLSearchParams(window.location.search);
 const fromProfile = params.get('utm_source') === 'google' && params.get('utm_campaign') === 'gbp';
 try {
  const saved = window.sessionStorage.getItem('apex_lead_source');
  if (!fromProfile && leadSources.includes(saved as LeadSource)) return saved as LeadSource;
 } catch { /* Attribution is optional when storage is unavailable. */ }
 let source: LeadSource = fromProfile ? 'google_business_profile' : 'direct';
 if (!fromProfile && document.referrer) {
  try {
   const referrer = new URL(document.referrer);
   if (referrer.origin !== window.location.origin) {
    source = /(^|\.)google\.(com|[a-z]{2}|co\.[a-z]{2})$/.test(referrer.hostname) ? 'google_search' : 'referral';
   }
  } catch { /* Ignore malformed referrers. */ }
 }
 try { window.sessionStorage.setItem('apex_lead_source', source); } catch { /* No storage dependency. */ }
 return source;
}
