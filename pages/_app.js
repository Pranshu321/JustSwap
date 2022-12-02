import { NavBar } from '../components/index';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
