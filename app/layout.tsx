import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import {origin} from '@/lib/site';
import {siteIndexable} from '@/lib/indexing';
import { SiteMotion } from '@/components/site-motion';
import { Header, Tracking } from '@/components/site-client';
import { Footer } from '@/components/site';
export const metadata: Metadata = {
 metadataBase:new URL(origin),
 title:{default:'Window Cleaning in Austin & Lake Travis | Apex Window Cleaning',template:'%s | Apex Window Cleaning'},
 description:'Window cleaning, pressure washing, and solar panel cleaning from Spicewood across Austin and Lake Travis. Request a free quote from Apex Window Cleaning.',
 robots:siteIndexable()?{index:true,follow:true}:{index:false,follow:false},
 verification:{google:'iSgpahMzRX78_l_YMNiUl4JGhXAL5f3wqrH5-Mf_qnA'},
 icons:{icon:'/images/apex-window-cleaning-logo.png'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/><Tracking/><SiteMotion/><Analytics/></body></html>}
