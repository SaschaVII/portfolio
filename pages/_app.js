import Footer from '@/components/footer';
import MainNav from '@/components/mainNav'
import '@/styles/globals.css'
import { Roboto_Mono } from 'next/font/google'
import Head from 'next/head';
import { useEffect, useState } from 'react';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-robotoMono',
})

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.darkMode) {
      if (JSON.parse(localStorage.darkMode) === true) {
        setDarkMode(true);
        document.querySelector("html").classList.add("dark");
      } else {
        setDarkMode(false);
        document.querySelector("html").classList.remove("dark");
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((current) => {
      if (current) {
        localStorage.darkMode = false;
        document.querySelector("html").classList.remove("dark");
        return false;
      } else {
        localStorage.darkMode = true;
        document.querySelector("html").classList.add("dark");
        return true;
      }
    });
  };

  return (
    <main className={`${robotoMono.variable} font-mono`}>
      <Head>
        <title>Sascha Kuhness</title>
        <link rel="title logo" type="image/png" href="logo.png" />
      </Head>
      <MainNav title="Sascha Kuhness" className="mb-20" showDarkMode={true} darkModeState={darkMode} onDarkMode={toggleDarkMode} />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}