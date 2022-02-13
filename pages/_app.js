import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import React from 'react'

// This default export is required in a new `pages/_app.js` file.
export default function Homme({ Component, pageProps }) {
  return (
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  )
}