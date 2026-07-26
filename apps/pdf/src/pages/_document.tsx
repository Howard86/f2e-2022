import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full">
        <Head>
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#0b7d77" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="/browserconfig.xml" name="msapplication-config" />
          <meta content="#ffffff" name="theme-color" />
        </Head>
        <body className="h-full overflow-y-auto text-greyscale-dark text-p">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
