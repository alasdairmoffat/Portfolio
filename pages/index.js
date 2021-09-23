import Head from 'next/head';

import Welcome from '../components/Welcome';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Alasdair Moffat</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="author" content="Alasdair Moffat" />
        <meta property="keywords" content="Alasdair Moffat, Web Developoment" />
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
