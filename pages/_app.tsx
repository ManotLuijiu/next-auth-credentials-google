import { Rubik, Sarabun } from '@next/font/google';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import nprogress from 'nprogress';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rubik.variable} font-sans ${sarabun.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
