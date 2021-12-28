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
                <h3 className="ct-sub-1">
                    Definition
                </h3>
                <p className="ct-text">
                    <Latex>
                        Die Ableitung einer Funktion $f$ an einer Stelle $x$ gibt die Steigung des Graphen der Funktion an einer Stelle an.
                        Bezeichnet wird sie normalerweise mit $f'(x)$ und die 2. Ableitung mit $f''(x)$ usw.
                    </Latex>
                </p>
                <span className='ct-text'>
                    {
                        "\\[ \\begin{align*}\\begin{split} f(x)&=x^2+3x+4 \\\\ f'(x)&=2x+3 \\\\ f''(x)&=2\\end{split} \\end{align*}    \\]"
                    }     
                </span>

                <h3 className="ct-sub-1">
                    Ableitungsregeln
                </h3>
                <h4 className="ct-sub-2">Potenzregel</h4>
                <span className='ct-text'>
                    {
                        "\\[ \\begin{align*}\\begin{split} f(x)&=x^r \\\\ f'(x)&=r\\cdot x^{r-1}\\end{split} \\end{align*}    \\]"
                    }     
                </span>
                <h4 className="ct-sub-2">Summenregel</h4>
                <span className='ct-text'>
                    {
                        "\\[ \\begin{align*}\\begin{split} (f(x)+g(x))' = f'(x)+g'(x)\\end{split} \\end{align*}    \\]"
                    }     
                </span>
                <h4 className="ct-sub-2">Faktorregel</h4>
                <span className='ct-text'>
                    {
                        "\\[ \\begin{align*}\\begin{split} (c\\cdot f(x))' = c \\cdot f'(x)\\end{split} \\end{align*}    \\]"
                    }     
                </span>
                <h4 className="ct-sub-2">Produktregel</h4>
                <span className='ct-text'>
                    {
                        "\\[ \\begin{align*}\\begin{split} f(x)&=u(x)\\cdot v(x)\\\\ f'(x)&=u'(x) \\cdot v + v' \\cdot u\\end{split} \\end{align*}    \\]"
                    }     
                </span>
                <h4 className="ct-sub-2">Kettenregel</h4>
                <span className='ct-text'>
                    {
                        "\\[ \\begin{align*}\\begin{split} f(x)&=u(v(x))\\\\ f'(x)&=u'(v(x)\\cdot v'\\end{split} \\end{align*}    \\]"
                    }     
                </span>
            </div>

        </div>
    )
}

