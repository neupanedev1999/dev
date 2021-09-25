import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            property="og:title"
            content="Devraj Neupane| Tech Enthusiast | Information Security Researcher"
          ></meta>
          <meta property="robots" content="index, follow"></meta>
          <meta
            property="keywords"
            content="Dev Neupane, Devraj Neupane, Devraj Nepal, Neupane Devraj, Neupane Dev"
          ></meta>
          <meta
            property="og:description"
            content="Hi there, This is Devraj Neupane, an Undergrad studying in UK, I am mostly interested in Information Security and Stuffs."
          ></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
