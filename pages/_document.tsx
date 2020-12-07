import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

type Props = {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}

// static async getInitialProps({ renderPage }) {
//   const sheet = new ServerStyleSheet()

//   const page = renderPage((App) => (props) =>
//     sheet.collectStyles(<App {...props} />)
//   )

//   const styleTags = sheet.getStyleElement()

//   return { ...page, styleTags }
// }
