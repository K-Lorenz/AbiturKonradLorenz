import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');



export default function Template(){
    return(
            <div className='min-h-screen max-w-7xl  mx-auto'>
                <Head>
                    <title>
                        Funktionen
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Funktionen und ihre Eigenschaften
                    </h1>
                    <h2 className='ct-title-text'>
                        Monotone Monotomie..
                    </h2>
                </div>

            </div>
    )
}