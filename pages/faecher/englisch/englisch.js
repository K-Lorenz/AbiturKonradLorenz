import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');



export default function Englisch(){
    return(
            <div className='min-h-screen'>
                <Head>
                    <title>
                        Template
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Englisch
                    </h1>
                    <h2 className='ct-title-text'>
                        Ist alles da!
                    </h2>
                </div>
                <ul className='list-disc list-inside'>


                </ul>
                
            </div>
    )
}