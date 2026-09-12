import {origin} from '@/lib/site';
export function GET(){return new Response(process.env.SITE_INDEXABLE==='true'?`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain'}});}
