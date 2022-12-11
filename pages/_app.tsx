import { Rubik, Sarabun } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import nprogress from 'nprogress';

import SEO from '../next-seo.config';
import '../styles/globals.css';
import '../styles/globals.css';

Router.events.on('routeChangeStart', nprogress.start);
Router.events.on('routeChangeError', nprogress.done);
Router.events.on('routeChangeComplete', nprogress.done);

nprogress.configure({
  showSpinner: false,
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

const sarabun = Sarabun({
  weight: ['300', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sarabun',
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...SEO} />
      <ThemeProvider enableSystem={true} attribute="class">
        <main className={`${rubik.variable} font-sans ${sarabun.variable}`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}