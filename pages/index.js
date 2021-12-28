import Head from 'next/head'
import Link from 'next/link'
import Latex from 'react-latex'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 pt-10 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to my website
        </h1>

        <p className="mt-3 text-2xl">
          This is the testing version.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="portfolio">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Portfolio &rarr;</h3>
              <p className="mt-4 text-xl">
                Just some basic info about myself
              </p>
            </a>
          </Link>
          
          <Link href="faecher/template">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Template Webpage
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
