import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer /></>
}
