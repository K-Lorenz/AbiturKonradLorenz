import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');



export default function Template(){
    return(
            <div className='min-h-screen'>
                <Head>
                    <title>
                        Übersicht
                    </title>
                </Head>

                {/* Title */}

                <main className="flex flex-col items-center w-full flex-1 px-20 pt-10 text-center">
        <h1 className="ct-title">
          Übersicht aller Fächer
        </h1>

        <div className="flex flex-wrap items-center justify-around w-full mt-6">
          <Link href="/faecher/mathe/mathe">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Mathe &rarr;</h3>
              <p className="mt-4 text-xl">
                Von Bruchrechnung bis zur Analysis
              </p>
            </a>
          </Link>
          
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Englisch &rarr;</h3>
              <p className="mt-4 text-xl">
                Von simple past bis zum Shakespear
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Deutsch &rarr;</h3>
              <p className="mt-4 text-xl">
                Vom Konjunktiv bis zu Goethes Faust
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Wirtschaft &rarr;</h3>
              <p className="mt-4 text-xl">
                Von Preis/Menge bis zu Adam Smith
              </p>
            </a>
          </Link>
          <Link href="/faecher/chemie/chemie">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Chemie &rarr;</h3>
              <p className="mt-4 text-xl">
                Von Wasserstoff bis Edelgas
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Physik &rarr;</h3>
              <p className="mt-4 text-xl">
                Von Pendel bis zum Kondensator
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Informatik &rarr;</h3>
              <p className="mt-4 text-xl">
                Von Dezimal bis EventListener
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Biologie &rarr;</h3>
              <p className="mt-4 text-xl">
                Von Wurzeln bis Xylem
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Geschichte &rarr;</h3>
              <p className="mt-4 text-xl">
                von Ägypten bis... heute
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Musik &rarr;</h3>
              <p className="mt-4 text-xl">
                von Mozart bis Glockenspiel
              </p>
            </a>
          </Link>
          <Link href="/faecher/uebersicht">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Religion &rarr;</h3>
              <p className="mt-4 text-xl">
                von Christlich bis Deterministisch
              </p>
            </a>
          </Link>
          <Link href="/">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl link"
            >
              <h3 className="text-2xl font-bold">Zurück &rarr;</h3>
              <p className="mt-4 text-xl">
                RAUS HIER
              </p>
            </a>
          </Link>
        </div>
      </main>
            </div>
    )
}