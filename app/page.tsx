import {BeforeAfter} from '@/components/before-after';
import {Reviews, GoogleRating} from '@/components/reviews';
import {ArrowUpRight, Phone, MapPin, Check} from 'lucide-react';
import {Photo,Services,Work,Process,FAQSection,QuoteSection,Schema} from '@/components/site';
import {origin,businessHours} from '@/lib/site';
import {googleReviews} from '@/lib/reviews';

const description = 'Window cleaning and pressure washing in Austin and Lake Travis. Apex has 8 years in business. Free same-day quotes available. Call (512) 825-1484.';
export const metadata = {
 title:{absolute:'Window Cleaning & Pressure Washing Austin | Apex Window Cleaning'},
 description, alternates:{canonical:'/'},
 openGraph:{title:'Window Cleaning & Pressure Washing | Apex',description,url:origin,type:'website',images:[{url:origin+'/images/hero-gallery-1-1280.webp',alt:'Architectural glass in the Apex project gallery'}]},
 twitter:{card:'summary_large_image',title:'Window Cleaning & Pressure Washing | Apex',description,images:[origin+'/images/hero-gallery-1-1280.webp']},
};

export default function Home(){return <main id="main">
 <section className="hero">
  <div className="hero-copy">
   <p className="eyebrow"><span className="short-line"/> Spicewood roots. Lake Travis reach.</p>
   <h1 className="hero-services-title">Window cleaning &amp; pressure washing <em>for Austin &amp; Lake Travis.</em></h1>
   <p className="hero-description">Clearer glass. Cleaner patios and driveways. Choose the care your home needs, with a free estimate from Apex.</p>
   <div className="hero-buttons"><a className="btn" data-quote="hero" href="/contact">Get a Free Quote <ArrowUpRight size={18}/></a><a className="hero-call" href="tel:+15128251484"><Phone size={17}/><span>Call (512) 825-1484</span></a></div>
   <p className="hero-note">8 years in business. Free same-day quotes available.</p>
   <div className="hero-service-links" aria-label="Explore our main services"><a href="/services/window-cleaning">Window cleaning <ArrowUpRight size={15}/></a><a href="/services/pressure-washing">Pressure washing <ArrowUpRight size={15}/></a></div>
  </div>
  <div className="hero-photo"><Photo priority name="hero-gallery-1" alt="Expansive architectural glass reflecting the landscape around a modern home"/><div className="photo-label"><span className="label-line"/><span>Less between you<br/><strong>and the view.</strong></span></div></div>
 </section>
 <div className="proof-strip wrap"><span><MapPin size={18}/> Based in Spicewood</span><span><Check size={18}/> Free personal estimates</span><GoogleRating/><a href="/gallery">See Apex’s work <ArrowUpRight size={17}/></a></div>
 <section className="section wrap why-apex" aria-labelledby="why-apex-title">
  <div className="section-heading"><div><p className="eyebrow">Your home. Your priorities.</p><h2 id="why-apex-title">Local service.<br/>Clear expectations.</h2></div><p>Talk with Apex about what needs cleaning, how to access it, and what your estimate includes.</p></div>
  <div className="why-apex-grid">
   <div><h3>8 years in business</h3><p>Brett’s business is based in Spicewood and serves homes around Lake Travis and Austin.</p><a className="text-link" href="/about">Meet Brett <ArrowUpRight size={16}/></a></div>
   <div><h3>The scope you need</h3><p>Choose interior windows, exterior windows, or both. Discuss screens, tracks, and hard-water spots with your estimate.</p><a className="text-link" href="/services/window-cleaning">Explore window care <ArrowUpRight size={16}/></a></div>
   <div><h3>Exterior care together</h3><p>Request patio, driveway, or walkway cleaning alongside your windows. Apex assesses the surface and access before confirming the work.</p><a className="text-link" href="/services/pressure-washing">Explore pressure washing <ArrowUpRight size={16}/></a></div>
  </div>
 </section>
 <BeforeAfter chimneyBefore={<Photo name="apex-project-2" alt="Stone chimney before cleaning"/>} chimneyAfter={<Photo name="apex-project-1" alt="Stone chimney after cleaning"/>} patioBefore={<Photo name="apex-project-4" alt="Fire-pit patio before cleaning with dark surface buildup"/>} patioAfter={<Photo name="apex-project-3" alt="Fire-pit patio after cleaning"/>}/>
 <Reviews/><Services/><Work/>
 <section className="section wrap nearby-areas" aria-labelledby="nearby-title"><p className="eyebrow">Close to home</p><h2 id="nearby-title">Window &amp; exterior care<br/>around Lake Travis.</h2><p>Based in Spicewood, serving nearby communities and Austin. Share your city or ZIP code to confirm availability for your property.</p><div className="area-links">{[['Spicewood','spicewood'],['Lakeway','lakeway'],['Bee Cave','bee-cave'],['Austin','austin']].map(([name,slug])=><a key={slug} href={'/service-areas/'+slug}>{name}<ArrowUpRight size={18}/></a>)}</div><a className="text-link" href="/service-areas">See all service areas <ArrowUpRight size={18}/></a></section>
 <Process/><FAQSection/><QuoteSection/>
 <Schema data={{'@context':'https://schema.org','@type':'HomeAndConstructionBusiness','@id':origin+'/#business',name:'Apex Window Cleaning ATX',alternateName:'Apex Window Cleaning',url:origin,telephone:'+15128251484',email:'apexwood01@gmail.com',logo:origin+'/images/apex-window-cleaning-logo.png',sameAs:[googleReviews.url],openingHoursSpecification:businessHours.specification,areaServed:['Spicewood','Lake Travis','Austin','Lakeway','Bee Cave'],hasOfferCatalog:{'@type':'OfferCatalog',name:'Residential cleaning services',itemListElement:[['Window cleaning','window-cleaning'],['Pressure washing','pressure-washing'],['Solar panel cleaning','solar-panel-cleaning']].map(([name,slug])=>({'@type':'Offer',itemOffered:{'@type':'Service',name,url:origin+'/services/'+slug}}))}}}/>
 </main>}
