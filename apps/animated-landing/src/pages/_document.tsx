import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="bg-n5 text-n1 text-ch-p3 h-full overflow-x-hidden scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-title" content="F2E 2022" />
          <meta name="application-name" content="F2E 2022" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body className="relative mx-auto max-h-screen max-w-[1600px] snap-y snap-proximity overflow-x-hidden overflow-y-scroll lg:snap-mandatory">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
