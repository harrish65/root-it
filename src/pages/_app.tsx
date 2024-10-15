import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Figtree } from 'next/font/google'
 



const figtree = Figtree({
  weight: '400',
  subsets: ['latin'],
})
 


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={figtree.className}>
      <Component {...pageProps} />
    </main>
  )}
