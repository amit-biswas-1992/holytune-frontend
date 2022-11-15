import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BottomHeader from '../Components/BottomHeader/BottomHeader';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <div className="main">
    <Component {...pageProps} />

    <section className="">
      <ToastContainer autoClose={3000} position={"top-center"} />
      <BottomHeader></BottomHeader>

    </section>
  </div>
}

export default MyApp
