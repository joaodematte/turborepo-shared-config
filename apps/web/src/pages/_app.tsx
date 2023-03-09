/* eslint-disable react/no-unknown-property */
import { AppProps } from 'next/app';
import { GlobalStyle } from 'ui';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
