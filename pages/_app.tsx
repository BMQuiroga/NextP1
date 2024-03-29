import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StateWrapper from '../components/stateWrapper.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  )
}
