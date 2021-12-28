import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');



export default function Template(){
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
                        Big Header
                    </h1>
                    <h2 className='ct-title-text'>
                        Header text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </h2>
                </div>


                {/* Content */}

                <div className='flex flex-col items-start'></div>
                <div className='flex flex-col items-start'>

                    <h3 className="ct-sub-1"></h3>
                    <h3 className="ct-sub-1">
                        SubHeader No.1
                    </h3>

                    <h4 className="ct-sub-2"></h4>
                    <h4 className="ct-sub-2">
                        Subheader No.2
                    </h4>

                    <h5 className="ct-sub-3"></h5>
                    <h5 className="ct-sub-3">
                        Subheader No.3
                    </h5>

                    <p className="ct-text"></p>
                    <p className="ct-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <span className='ct-text'>
                        {
                            "\\[ \\begin{align*}\\begin{split} f(x)&=x^2+3x+4 \\\\ f(x)&=x2131\\end{split} \\end{align*}    \\]"
                        }     
                    </span>
                    
                </div>
            </div>
    )
}