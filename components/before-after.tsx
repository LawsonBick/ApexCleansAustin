'use client';

import {useState, type ReactNode} from 'react';

function Comparison({title,before,after}:{title:string;before:ReactNode;after:ReactNode}) {
 const [position,setPosition]=useState(50);
 return <figure className="comparison-card">
  <div className="comparison-stage">
   <div className="comparison-photo">{after}</div>
   <div className="comparison-photo comparison-before" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}>{before}</div>
   <span className="comparison-label comparison-label-before">Before</span>
   <span className="comparison-label comparison-label-after">After</span>
   <div className="comparison-divider" style={{left:`${position}%`}} aria-hidden="true"><span>↔</span></div>
   <input className="comparison-control" type="range" min="0" max="100" value={position} onChange={e=>setPosition(Number(e.target.value))} aria-label={`${title}: reveal before and after`} aria-valuetext={`${position}% before, ${100-position}% after`}/>
  </div>
  <figcaption><h3>{title}</h3><span>Drag to compare</span></figcaption>
 </figure>;
}
export function BeforeAfter({chimneyBefore,chimneyAfter,patioBefore,patioAfter}:{chimneyBefore:ReactNode;chimneyAfter:ReactNode;patioBefore:ReactNode;patioAfter:ReactNode}) {
 return <section className="section wrap comparison-section" id="results" aria-labelledby="results-title">
  <div className="section-heading"><div><p className="eyebrow">See the results</p><h2 id="results-title">A fresh look.<br/>A visible difference.</h2></div><p>Slide the handle to explore the before and after photos from Apex’s exterior cleaning projects.</p></div>
  <div className="comparison-grid"><Comparison title="Stone chimney" before={chimneyBefore} after={chimneyAfter}/><Comparison title="Fire-pit patio" before={patioBefore} after={patioAfter}/></div>
  <p className="comparison-note">Original project photos. Camera angles and lighting vary. Use the arrow keys when a slider is selected.</p>
  <a className="text-link" href="/gallery">Explore the full gallery <span aria-hidden="true">↗</span></a>
 </section>;
}
