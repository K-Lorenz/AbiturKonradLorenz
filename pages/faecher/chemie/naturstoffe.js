import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');


export default function Template(){
    return(
            <div className='min-h-screen'>
                <Head>
                    <title>
                        Naturstoffe
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Naturstoffe
                    </h1>
                    <h2 className='ct-title-text'>
                        Header text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </h2>
                </div>
                {/* Content */}

                <div className=''>
                    <p className='ct-text'>content</p>
                </div>
            </div>
    )
}