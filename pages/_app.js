import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { NextIntlProvider } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/404') return <Component {...pageProps} />;

  return (
    <>
      <NextSeo
        title='VIXCO'
        titleTemplate='VIXCO'
        description='VIXCO e-website'
      />
      <NextIntlProvider locale={router.locale} messages={pageProps.messages}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextIntlProvider>
    </>
  );
}

export default App;
