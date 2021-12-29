import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
import Image from 'next/image'
var Latex = require('react-latex');

export default function Ableitung(){

    return (
        <div className='min-h-screen'>
            <Head>
                <title>
                    Ableitung
                </title>
            </Head>
            <div className='flex flex-col items-center'>
                <h1 className="ct-title">
                    Ableitung
                </h1>
                <h2 className='ct-title-text'>
                    Ableitungen werden häufig in der Analysis gebraucht. Sind also essentiell für 'ne gute Note.
                </h2>
            </div>
            <div className='flex flex-col items-start'>
                <h3>
                    Definition
                </h3>
                <p className="ct-text">
                    Die Ableitung einer Funktion <span className='fm-s'>{"$f$"}</span> an einer Stelle <span className='fm-s'>{"$x$"}</span> gibt die <em>Steigung des Graphen der Funktion an einer Stelle an.</em>
                    Bezeichnet wird sie normalerweise mit <span className='fm-s'>{"$f'(x)$"}</span> und die 2. Ableitung mit <span className='fm-s'>{"$f''(x)$"}</span> usw.
                </p>
                <p className='ct-text'>
                    <div className='fm-ct'>
                        <span className='fm-lg'>{"$$\\begin{align*}\\begin{split} f(x)&=x^2+3x+4 \\\\ f'(x)&=2x+3 \\\\ f''(x)&=2\\end{split} \\end{align*}$$"}</span>
                    </div>
                </p>
                <h3>
                    Ableitungsregeln
                </h3>
                <h4>Potenzregel</h4>
                <p className='ct-text'>
                    <div className='fm-ct'>
                        <span className='fm-lg'>{"$$\\begin{align*}\\begin{split} f(x)&=x^r \\\\ f'(x)&=r\\cdot x^{r-1}\\end{split} \\end{align*}$$"}</span>
                    </div>
                </p>

                <h4>Summenregel</h4>
                <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$\\begin{align*}\\begin{split} \\Big(f(x)+g(x)\\Big)' = f'(x)+g'(x)\\end{split} \\end{align*}$$"}</span>
                        </div>
                    </p>
                <h4>Faktorregel</h4>
                <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$\\begin{align*}\\begin{split} \\Big(c\\cdot f(x)\\Big)' = c \\cdot f'(x)\\end{split} \\end{align*}$$"}</span>
                        </div>
                    </p>
                <h4>Produktregel</h4>
                <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$\\begin{align*}\\begin{split} f(x)&=u(x)\\cdot v(x)\\\\ f'(x)&=u'(x) \\cdot v + v' \\cdot u\\end{split} \\end{align*}$$"}</span>
                        </div>
                    </p>
                <h4>Kettenregel</h4>

                <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$\\begin{align*}\\begin{split} f(x)&=u(v(x))\\\\ f'(x)&=u'(v(x)\\cdot v'\\end{split} \\end{align*}$$"}</span>
                        </div>
                    </p>
            </div>

        </div>
    )
}

