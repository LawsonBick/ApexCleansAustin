import {NextResponse,type NextRequest} from 'next/server';
import assetRedirects from './lib/asset-redirects.json';
export function middleware(req:NextRequest){const target=(assetRedirects as Record<string,string>)[req.nextUrl.pathname];if(target)return NextResponse.redirect(new URL(target,req.url),301);if(req.nextUrl.pathname==='/home')return NextResponse.redirect(new URL('/',req.url),301);return NextResponse.next();}
export const config={matcher:['/__l5e/:path*','/home']};
