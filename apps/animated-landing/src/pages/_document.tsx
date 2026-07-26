import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full overflow-x-hidden scroll-smooth bg-n5 text-ch-p3 text-n1">
        <Head>
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#000000" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta charSet="utf-8" />
          <meta content="F2E 2022" name="apple-mobile-web-app-title" />
          <meta content="F2E 2022" name="application-name" />
          <meta content="#000000" name="msapplication-TileColor" />
          <meta content="#000000" name="theme-color" />
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
