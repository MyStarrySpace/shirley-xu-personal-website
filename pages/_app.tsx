import 'bootstrap/dist/css/bootstrap.css'
import '../scss/main.scss'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import Navbar from './components/navbar'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <Component {...pageProps} />
    );
}
export default MyApp
