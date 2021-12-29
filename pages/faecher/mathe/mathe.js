import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');



export default function Mathe(){
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
                        Mathe
                    </h1>
                    <h2 className='ct-title-text'>
                        Ist alles da!
                    </h2>
                </div>
                <ul className='list-disc list-inside'>
                    <h3 className='link'><li><Link href="/faecher/mathe/funktion"><a className='link'>Funktion</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/mathe/ableitung"><a className='link'>Ableitung</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/uebersicht"><a className='link'>Zurück</a></Link></li></h3>

                </ul>
                
            </div>
    )
}