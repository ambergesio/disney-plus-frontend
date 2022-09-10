import { SiteProvider } from '../context/SiteContext';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  )
};

export default MyApp;
