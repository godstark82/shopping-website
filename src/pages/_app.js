import Header from '../components/Home/Header.jsx';
import Footer from '../components/Home/Footer.jsx';
import '../styles/globals.css';
import '../styles/vendor.css';


export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
}
