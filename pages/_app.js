/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SmoothScroll = require('smooth-scroll');

      // offset param ensures we scroll to the top of the margin rather than text of section title
      SmoothScroll('a[href*="#"]', {
        speed: 200,
        offset: (anchor) => (anchor.id === 'welcome' ? 2000 : 40),
      });

      const M = require('materialize-css');

      const navElems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(navElems);
    }
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
