import Document, { Html, Head, Main, NextScript } from "next/document";
const content = require("data/content");

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='canonical' href='https://www.wpcodevo.com/' />
          <link
            rel='alternate'
            type='application/rss+xml'
            href='https://www.wpcodevo.com/rss/feed.xml'
          />
          <link
            rel='alternate'
            type='application/atom+xml'
            href='https://www.wpcodevo.com/rss/atom.xml'
          />
          <link
            rel='alternate'
            type='application/json'
            href='https://www.wpcodevo.com/rss/feed.json'
          />
          <meta
            name='google-site-verification'
            content='QVihTzJUN1bwjjME4WQtDetK-P8gRUstoBhg1-baD1o'
          />
          <meta
            name='msvalidate.01'
            content='81F7CEF0C372A4EDA853D46F26A8B43F'
          />
          <meta name='keywords' content={content.keywords} />
          <meta
            name='p:domain_verify'
            content='cddddd105ea22d8afea7fde8b6adfbaa'
          />
          <meta name='theme-color' content='#fff' />
          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
          <link rel='icon' sizes='16x16' href='/favicons/favicon-16x16.png' />
          <link rel='icon' sizes='32x32' href='/favicons/favicon-32x32.png' />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link
            rel='apple-touch-icon'
            href='/favicons/apple-touch-icon.png'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
