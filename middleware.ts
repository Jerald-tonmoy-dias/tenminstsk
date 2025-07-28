import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let defaultLocale = 'en';
let locales = ['en', 'bn'];


function getLocale(request: NextRequest) {
  const acceptedLanguages = request.headers.get('accept-language') ?? undefined;
  let headers = { 'accept-language': acceptedLanguages };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(locale => !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`));

  if (pathnameIsMissingLocale) {

    const locale = getLocale(request);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }

  return NextResponse.next();
}

// Apply to all routes
export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"], // apply to all pages
};
