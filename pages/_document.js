import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='h-full scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <Head />
      <body className='flex flex-col h-full relative !scroll-smooth' style={{ scrollBehavior: 'smooth' }} >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
