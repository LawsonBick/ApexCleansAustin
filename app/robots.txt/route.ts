import {origin} from '@/lib/site';
import {siteIndexable} from '@/lib/indexing';
export function GET(){return new Response(siteIndexable()?`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain'}});}
