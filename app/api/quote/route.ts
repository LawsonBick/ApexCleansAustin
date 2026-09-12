import {quoteSchema,deliverQuote} from '@/lib/quote';
import {env} from 'cloudflare:workers';
const attempts=new Map<string,{count:number;until:number}>();
export async function POST(req:Request){
 const reply=(body:object,status:number)=>Response.json(body,{status,headers:{'Cache-Control':'no-store','X-Robots-Tag':'noindex'}});
 if(req.headers.get('origin')!==new URL(req.url).origin)return reply({ok:false,message:'Please submit the form from this website.'},403);
 if(!req.headers.get('content-type')?.includes('application/json'))return reply({ok:false,message:'Invalid request format.'},415);
 const text=await req.text();if(text.length>12000)return reply({ok:false,message:'Your request is too long.'},413);
 let raw;try{raw=JSON.parse(text);}catch{return reply({ok:false,message:'Invalid request.'},400)}
 const parsed=quoteSchema.safeParse(raw);if(!parsed.success)return reply({ok:false,message:'Please check the highlighted fields.',errors:parsed.error.flatten().fieldErrors},422);
 const q=parsed.data;if(q.website||Date.now()-q.started<2000||q.started>Date.now())return reply({ok:false,message:'Please wait a moment and try again.'},400);
 const ip=req.headers.get('cf-connecting-ip')||'local';const now=Date.now();for(const[k,v]of attempts)if(v.until<now)attempts.delete(k);const a=attempts.get(ip)||{count:0,until:now+600000};if(a.count>=8)return reply({ok:false,message:'Too many attempts. Please try again later or call Apex.'},429);a.count++;attempts.set(ip,a);
 const vars=env as unknown as {RESEND_API_KEY?:string;QUOTE_FROM?:string};try{const result=await deliverQuote(q,{apiKey:vars.RESEND_API_KEY,from:vars.QUOTE_FROM});return reply(result,result.status);}catch{return reply({ok:false,message:'We could not confirm delivery. Please try again or call (512) 825-1484. Your details are still here.'},502)}
}
