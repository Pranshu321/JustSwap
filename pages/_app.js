import { NavBar } from '../components/index';
import { SwapTokenContextProvider } from '../Context/SwapContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SwapTokenContextProvider>
        <NavBar />
        <Component {...pageProps} />
      </SwapTokenContextProvider>
    </>
  )
}

export default MyApp
