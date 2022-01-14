import Head from 'next/head'
import Link from 'next/link'
import Latex from 'react-latex'
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Home() {
  var lastPage = getCookie('lastPage')
  if (lastPage=== ''){
    lastPage = '#a'
  }
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Konrad Lorenz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 pt-10 text-center">
        <h1 className="ct-title">
          Welcome to my website
        </h1>

        <p className="ct-title-text">
          This is the testing version.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="portfolio">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Portfolio &rarr;</h3>
              <p className="mt-4 text-xl">
                Nur ein bisschen Zeug über mich.
              </p>
            </a>
          </Link>
          
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Lernen &rarr;</h3>
              <p className="mt-4 text-xl">
                Alle Inhalte
              </p>
            </a>
          </Link>
          <Link href={lastPage}>
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Mach da weiter wo du aufgehört hast &rarr;</h3>
              <p className="mt-4 text-xl">
                Drücke hier um direkt zu dem letzen Projekt zu kommen
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
