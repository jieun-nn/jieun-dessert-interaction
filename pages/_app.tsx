import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import './dessert/src/App.js'
import './product/js/app.js'
import './product/js/TweenMax.js'
import './product/js/jquery.js/index.js'
import './product/js/candle.js'
import './dessert/src/index.css'
import './dessert/src/style.css'
import './dessert/src/index.html'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
