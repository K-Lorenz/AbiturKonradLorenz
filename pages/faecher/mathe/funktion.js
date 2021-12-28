import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'

export default function Template(){
    return(
            <div className='min-h-screen'>
                <Head>
                    <title>
                        Funktion
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Funktion
                    </h1>
                    <h2 className='ct-title-text'>
                        Funktionen ..blablabla.. ganzrational... zzzzZzZZzZzZZZZ blalbalblalballmvaoüih
                    </h2>
                </div>
                <div className='flex flex-col items-start'>
                    <h3 className="ct-sub-1">Definition</h3>
                    <p className="ct-text">Eine Funktion ist eine Zuordnung, bei der jedem Element der ersten Menge <b>genau ein Element</b> der zweiten Menge zugeordnet wird. <n/>
                        Darstellungsmöglichkeit z.B. <span>{"$f(x)=3$"}</span>
                    </p>

                    <h5 className="ct-sub-3">Beispiel</h5>
                    <p className='ct-text'>
                        <span>{"$f(x)=\\frac{1}{3}x^3 - x^2 - 3x + 4$"}</span> ist eine <b>ganzrationale</b> Funktion.
                    </p>

                    <h3 className='ct-sub-1'>Definition ganzrationale Funktion</h3>
                    <p className='ct-text'>
                        Eine ganzrationale Funktion kann in der Form: <span>{"$f(x)=a_n \\cdot x^n + a_{n-1}+...+a_1 \\cdot x+ a_0$"}</span> <br></br> <span>{"$n\\in \\mathbb{N}$ "}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{"$a\\in \\mathbb{R}$"}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{"$a \\neq 0$"}</span>
                       {' '}dargestellt werden.
                       <br></br>
                       <span>{"$f$"}</span>{' '} ist eine ganzrationale Funktion <span>{"$n$"}</span>-ten Grades. Die Menge der Zahlen, die eingesetzt werden dürfen: <span>{"$\\mathbb{D} = \\mathbb{R}$"}</span> <br></br>
                       Die Menge aller Werte von y: <span>{"$\\mathbb{W} = \\mathbb{R}$"}</span>
                    </p>
                    <h5 className='ct-sub-3'>Beispiel</h5>
                    <p className='ct-text'>
                        <span>{"$$f(x)=\\frac{1}{3}x^3 - x^2 - 3x + 4$$"}</span>
                    </p>
                    <div id="curve-1">Curve Placeholder</div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Besondere Punkte
                    </h1>
                    <h2 className='ct-title-text'>
                        Wendestelle wird zu Extremstelle... Exremstelle zur Nullstelle... und der Sattelpunkt uhhhhh...
                    </h2>
                </div>
                <div className='flex flex-col items-start'>
                        <ol className='list-decimal list-inside'>
                            <h3 className="ct-sub-1"><li>Y-Achsenabschnitt</li></h3>
                            <h4 className="ct-sub-2">Definition</h4>
                            <p className="ct-text">
                                Der <span>{"$y$"}</span>-Achsenabschnitt ist der Schnittpunkt des Graphen mit der <span>{"$y$"}</span>-Achse.(<span>{"$x=0$"}</span>).
                            </p>
                            <h5 className='ct-sub-3'>Beispiel zur Berechnung</h5>
                            <p className="ct-text">
                                <span>{"$$\\begin{align*}\\begin{split} f(x)&=\\frac{1}{3}x^3 - x^2 - 3x + 4\\\\f(0)&=\\frac{1}{3}\\cdot0^3 - 0^2 - 3\\cdot0 + 4 \\\\ f(0)&=4\\end{split} \\end{align*}$$"}</span>
                                also ist der <span>{"$y$"}</span>-Achsenabschnitt bei <span>{"$A(0\\vert4)$"}</span>
                            </p>
                            <h3 className="ct-sub-1"><li>Nullstellen</li></h3>
                            <h4 className="ct-sub-2">Definition</h4>
                            <p className='ct-text'>
                                Eine Nullstelle ist eine Stelle an dem der Graph die <span>{"$x$"}</span>-Achse schneidet.(<span>{"$f(x)=0$"}</span>)
                            </p>
                            <h3 className="ct-sub-1"><li>Hochpunkt / Tiefpunkt / Sattelpunkt</li></h3>
                            <h4 className="ct-sub-2">Definition</h4>
                            <h3 className="ct-sub-1"><li>Y-Achsenabschnitt</li></h3>
                        </ol>
                </div>
            </div>
    )
}