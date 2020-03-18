import Head from 'next/head';
// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

export default props => (
  <Head>
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <meta charSet="utf-8" />
    <title>Best blog</title>

    <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />
  </Head>
);
