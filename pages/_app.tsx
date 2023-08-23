import 'bootstrap/dist/css/bootstrap.css'
import '../scss/main.scss'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import Navbar from './components/navbar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&family=Montserrat&family=Telex&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.main}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
    );
}
export default MyApp
