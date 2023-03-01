import '@/styles/globals.css'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-robotoMono',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${robotoMono.variable} font-mono`}>
      <Component {...pageProps} />
    </main>
  )
}
