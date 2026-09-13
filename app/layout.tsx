import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { SiteMotion } from '@/components/site-motion';
import { Header, Tracking } from '@/components/site-client';
import { Footer } from '@/components/site';
export const metadata: Metadata = {
 metadataBase:new URL('https://apexcleansaustin.com'),
 title:{default:'Window Cleaning in Austin & Lake Travis | Apex Window Cleaning',template:'%s | Apex Window Cleaning'},
 description:'Window cleaning, pressure washing, and solar panel cleaning from Spicewood across Austin and Lake Travis. Request a free quote from Apex Window Cleaning.',
 robots:process.env.SITE_INDEXABLE==='true' && process.env.VERCEL_ENV!=='preview'?{index:true,follow:true}:{index:false,follow:false},
 icons:{icon:'/images/apex-window-cleaning-logo.png'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/><Tracking/><SiteMotion/><Analytics/></body></html>}
