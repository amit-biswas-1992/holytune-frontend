import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BottomHeader from '../Components/BottomHeader/BottomHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="main">
    <Component {...pageProps} />

    <section className="">
      <BottomHeader></BottomHeader>
    </section>
  </div>
}

export default MyApp
