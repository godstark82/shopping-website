import Header from '../components/Home/Header.jsx';
import Footer from '../components/Home/Footer.jsx';

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    
    <Component {...pageProps} />
    <Footer /></>
}
