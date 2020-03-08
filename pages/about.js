import TheNav from '../components/TheNav';

const About = () => (
  <div>
    <TheNav />
    <img src="/desktop.png" />
    <div>I am about imgage.</div>
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
