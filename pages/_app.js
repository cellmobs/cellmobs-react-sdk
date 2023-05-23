import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../public/assets/css/theme.css';
import { Provider } from 'react-redux';
import configureStore from '../redux/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactGA from "react-ga4";
import { GOOGLE_MEASUREMENT_ID } from 'js/cellmobs/constants';

library.add(fab, fal)

const store = configureStore();

if(GOOGLE_MEASUREMENT_ID){
  ReactGA.initialize(GOOGLE_MEASUREMENT_ID);
}
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  )
}

export default MyApp
