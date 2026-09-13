import type { NextConfig } from "next";
import legacyRedirects from './lib/legacy-redirects.json';
const nextConfig: NextConfig = {
 async redirects() {
  return Object.entries(legacyRedirects).map(([source,destination]) => ({source:encodeURI(source),destination,permanent:true}));
 },
};
export default nextConfig;
