import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full">
        <Head />
        <body className="bg-white/90">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
