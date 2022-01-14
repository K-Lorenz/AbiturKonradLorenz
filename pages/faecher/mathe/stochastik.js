import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');



export default function Template(){
    return(
            <div className='min-h-screen max-w-7xl  mx-auto'>
                <Head>
                    <title>
                        Stochastik
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Stochastik
                    </h1>
                    <h2 className='ct-title-text'>
                        Wahrscheinlichkeiten und so...
                    </h2>
                </div>

                <div className=''>
                    <h4>Beispiel</h4>
                    <p className='ct-text'>
                        Zufallsexperiment : Glücksrad: blau, rot, gelb
                    </p>
                    <p className='ct-text'>A (Ereignis): &bdquo;Bei einem Glücksrad wird 2 mal die gleiche Farbe gedreht&ldquo; <br></br> p: einzelne Wahrscheinlichkeiten</p>
                    <h3>
                        Zufallsvariable
                    </h3>

                    <h4 >
                        Definition
                    </h4>
                    <p className='ct-text'> Die Zufallsvariable ist eine Zuordnung, die jedem Ereignis eines Zufallsexperiments eine Zahl zuordnet.</p>

                </div>
            </div>
    )
}