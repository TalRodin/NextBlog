import Head from 'next/head';

const About = () => (
  <div>
    <Head>
      <title>best blog - About page</title>
    </Head>
    <img src="/desktop.png" />
    <div>I am about imgage.</div>
    <div>some more text about</div>
    <style jsx>
      {`
        img {
          height: 500px;
        }
      `}
    </style>
  </div>
);

export default About;
