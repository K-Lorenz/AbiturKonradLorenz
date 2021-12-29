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
                <div className=''>
                    <h3>Definition</h3>
                    <p className="ct-text">Eine Funktion ist eine <b>Zuordnung</b>, bei der <em>jedem Element der ersten Menge genau ein Element der zweiten Menge</em> zugeordnet wird. <n/>
                        Darstellungsmöglichkeit z.B.<span className='fm-s'>{"$f(x)=3$"}</span>
                    </p>

                    <h5>Beispiel</h5>
                    <p className='ct-text'>
                        <span className='fm-s'>{"$f(x)=\\frac{1}{3}x^3 - x^2 - 3x + 4$"}</span> ist eine <b>ganzrationale</b> Funktion.
                    </p>

                    <h3>Definition ganzrationale Funktion</h3>
                    <p className='ct-text'>
                        Eine ganzrationale Funktion kann in der Form: <span className='fm-s dark:bg-red-900'>{"$f(x)=a_n \\cdot x^n + a_{n-1} \\cdot x^{n-1}+...+a_1 \\cdot x+ a_0$"}</span> <br></br> <span className='fm-s'><span>{"$n\\in \\mathbb{N}$ "}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{"$a\\in \\mathbb{R}$"}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{"$a \\neq 0$"}</span></span>
                       {' '}dargestellt werden.
                       <br></br>
                       <em><span >{"$f$"}</span>{' '} ist eine ganzrationale Funktion &nbsp; <span>{"$n$"}</span>-ten Grades.</em> Die Menge der Zahlen, die eingesetzt werden dürfen: <span className='fm-s'>{"$\\mathbb{D} = \\mathbb{R}$"}</span> <br></br>
                       Die Menge aller Werte von y: <span className='fm-s'>{"$\\mathbb{W} = \\mathbb{R}$"}</span>
                    </p>
                    <h5>Beispiel</h5>
                    <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$f(x)=\\frac{1}{3}x^3 - x^2 - 3x + 4$$"}</span>
                        </div>
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
                <div className=''>
                        <ol className='list-decimal list-inside'>
                            <h3><li>Y-Achsenabschnitt</li></h3>
                            <h4>Definition</h4>
                            <p className="ct-text">
                                Der <b><span>{"$y$"}</span>-Achsenabschnitt</b> ist der <em>Schnittpunkt des Graphen mit der &nbsp;<span>{"$y$"}</span>-Achse</em> (<span className='fm-s'>{"$x=0$"}</span>).
                            </p>
                            <h5>Beispiel zur Berechnung</h5>
                            <p className='ct-text'>
                                <div className='fm-ct'>
                                    <span className='fm-lg'>{"$$\\begin{align*}\\begin{split} f(x)&=\\frac{1}{3}x^3 - x^2 - 3x + 4\\\\f(0)&=\\frac{1}{3}\\cdot0^3 - 0^2 - 3\\cdot0 + 4 \\\\ f(0)&=4\\end{split} \\end{align*}$$"}</span>
                                </div>
                            </p>    
                            <p className="ct-text">
                                also ist der <span className='fm-s'>{"$y$"}</span>-Achsenabschnitt bei <span className='fm-s'>{"$A(0\\vert4)$"}</span>
                            </p>
                            <h3><li><a id="nullstellen">Nullstellen</a></li></h3>
                            <h4>Definition</h4>
                            <p className='ct-text'>
                                Eine <b>Nullstelle</b> ist eine Stelle an dem der Graph die <em><span>{"$x$"}</span>-Achse schneidet</em>.(<span className='fm-s'>{"$f(x)=0$"}</span>)
                            </p>
                            <h5>Beispiele zur Berechnung</h5>
                            <ol className='list-decimal list-inside'>
                                <li className='ct-text'>
                                    Berechnung durch <b>Wurzelziehen</b>
                                    <p className='ct-text'>
                                        <div className='fm-ct'>
                                            <span className='fm-lg'>{"$$\\begin{alignat*} 00&=2x^2-8 &&\\vert +8 \\\\ 8&= 2x^2  &&\\vert \\div 2 \\\\ 4&=x^2 &&\\vert \\sqrt{\\: }\\\\ x&= \\begin{Bmatrix} x_1=2 \\\\ \\textcolor{red}{x_2=-2} \\end{Bmatrix}\\end{alignat*}$$"}</span>
                                        </div>
                                    </p>
                                    <p className='ct-text'>
                                        <em>Beachte</em>: Es sind <b>0, 1 oder 2 Lösungen möglich</b>. Bei 0 Lösungen ist der Wert vor der Wurzelziehung negativ (<span className='fm-s'>{"$x^2=-2$"}</span>). Bei genau einer Lösung ist der Wert vor der Wurzelziehung 0 (<span className='fm-s'>{"$x^2=0$"}</span>).
                                    </p> 
                                </li>
                                <li className='ct-text'>Berechnung durch <b>Ausklammern</b> und unter Verwendung des&ensp;
                                    <Link href="#a">
                                        <a className='link'>
                                            Satz vom Nullprodukt
                                        </a>
                                    </Link>
                                    <p className='ct-text'>
                                        <div className='fm-ct'>
                                            <span className='fm-lg'>{"$$f(x)=4x^2+16x$$"}</span>
                                        </div>
                                    </p>
                                    <p className='ct-text'>
                                        Setze <span className='fm-s'>{"$f(x)=0$"}</span>.
                                    </p>
                                    <p className='ct-text'>
                                        <div className='fm-ct'>
                                            <span className='fm-lg'>{"$$\\begin{alignat*} 00&=4x^2+16x &&\\vert T \\\\ 0&=4x\\cdot (x+4) \\\\ x&= \\begin{Bmatrix} x_1=0 \\\\ x_2=-4  \\end{Bmatrix}\\end{alignat*}$$"}</span>
                                        </div>
                                    </p>
                                </li>
                                <li className='ct-text'>
                                    Berechnung mithilfe von <b>Substitution</b>.

                                </li>
                                <li className='ct-text'>
                                    Berechnung mithilfe der <b>ABC-Formel</b>.
                                </li>
                            </ol>
                            <h3><li>Hochpunkt / Tiefpunkt / Sattelpunkt</li></h3>
                            <h4>Definition</h4>
                            <p className='ct-text'>
                                Bei einem <b>Hoch-, Tief-, oder Sattelpunkt</b> ist der Wert der <em>ersten Ableitung gleich null</em>(<span className='fm-s'>{"$f'(x)=0$"}</span>). <br></br>
                                Es sind also die <a href="#nullstellen" className='link'>Nullstellen</a> der ersten <Link href="/faecher/mathe/ableitung"><a className='link'>Ableitung</a></Link>.
                            </p>
                            
                        </ol>
                </div>
            </div>
    )
}