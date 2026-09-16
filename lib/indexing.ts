// Publishing is explicit. Preview and development deployments stay out of search.
export function siteIndexable() {
 return process.env.SITE_INDEXABLE === 'true' && process.env.VERCEL_ENV === 'production';
}
