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
                <div>
                    <h3>Monotonie</h3>
                    <h4>Definition</h4>
                    <p className='ct-text'>
                        Unter Monotonie versteht man den <b>Verlauf einer Funktion</b>. Sie gibt an, ob die Funktion <em>steigt, fällt oder konstant</em> verläuft. Es gibt dabei <em>vier verschiedenen Arten der Monotonie</em>.
                    </p>
                    <h4>Definitionen der Fälle der Monotonie</h4>
                    <p className='ct-text'>
                        Man wähle <b>2 beliebige Stellen</b> einer Funktion (z.B. <span className='fm-s'>{"$x_1$"}</span> und <span className='fm-s'>{"$x_2$"}</span>), die nacheinander kommen(<span className='fm-s'>{"$x_1<x_2$"}</span>).
                        <br/> Wenn für <b>alle</b> Funktionswerte (<span className='fm-s'>{"$f(x_1)$"}</span> bzw. <span className='fm-s'>{"$f(x_2)$"}</span>) gilt, dass:
                    </p>
                    <ul className='list-disc list-inside'>
                        <p className='ct-text'>
                            <li> <span className='fm-s'>{"$f(x_1)<f(x_2)$"}</span> Dann ist die Funktion <b>strengmonoton steigend/wachsend</b>.</li>
                            <div className='py-3'><b>oder:</b></div>
                            <li> <span className='fm-s'>{"$f(x_1) \\leq f(x_2)$"}</span> Dann ist die Funktion <b>monoton steigend/wachsend</b>.</li>                            
                            <div className='py-3'><b>oder:</b></div>
                            <li> <span className='fm-s'>{"$f(x_1)>f(x_2)$"}</span> Dann ist die Funktion <b>strengmonoton fallend</b>.</li>
                            <div className='py-3'><b>oder:</b></div>
                            <li> <span className='fm-s'>{"$f(x_1)\\geq f(x_2)$"}</span> Dann ist die Funktion <b>monoton fallend</b>.</li>
                        </p>
                    </ul>
                    <h5>Berechnung</h5>
                    <p className='ct-text'>
                        Um eine mögliche Monotonie einer Funktion festzustellen bildet man die Ableitung. <br/>
                        Wenn der Wert der Ableitung
                        <ul className='list-disc list-inside'>
                            <li><b>größer 0</b> ist, dann ist die Funktion <b>strengmonoton steigend</b>. <br/></li>
                            <li><b>kleiner 0</b> ist, dann ist die Funktion <b>strengmonoton fallend</b>. <br/></li>
                        </ul>
                        In <b>allen anderen Fällen</b>, bzw. wenn in der Ableitung <b>x vorkommt</b> gibt es <b>keine strenge Monotonie</b>. <br></br>
                        Um eine normale Monotonie oder eine Monotonie in einem Intervall nachzuweisen, muss man zuerst die Extremstellen berechnen und nach dem Verhalten um diese suchen.
                    </p>
                    <h3>Krümmungsverhalten</h3>
                    <h4>Definition</h4>
                    <p className='ct-text'>
                        Das Krümmungsverhalten beschreibt die <b>Krümmung einer Funktion</b> (<em>Linksgekrümmt/Rechtgekrümmt</em>). <br/>Eine Merkhilfe um leicht zu erkennen in welche Richtung eine Funktion gekrümmt ist, ist die
                        Vorstellung, dass der Graph der Funktion eine aufgemahlte Linie auf dem Boden ist und man als Fahrradfahrer auf dieser Linie entlangfährt. Die Lenkrichtung ist gleich der Krümmung der Funktion.
                    </p>
                    <h5>Berechnung</h5>
                    <p className='ct-text'>
                        Um das Krümmungsverhalten einer Funktion zu untersuchen, bildet man die 2. Ableitung. <br/>
                        Wenn der Wert der 2. Ableitung:
                        <ul className='list-disc list-inside'>
                            <li><b>größer 0</b> ist, dann hat die Funktion eine <b>Linkskrümmung/konvex</b>. <br/></li>
                            <li><b>kleiner 0</b> ist, dann hat die Funktion eine <b>Rechtskrümmung/konkav</b>. <br/></li>
                        </ul>       
                        In <b>allen anderen Fällen</b>, bzw. wenn in der 2. Ableitung <b>x vorkommt</b> gibt es <b>keine einzelne Krümmung</b> der Funktion. <br></br>
                        Um eine Krümmung in einem Intervall nachzuweisen, muss man zuerst die Wendestellen berechnen und nach dem Verhalten der Funktion um diese suchen.
                    </p>
                    <h3>Symmetrie</h3>
                    <h4>Definition</h4>
                    <p className='ct-text'>
                        Es wird unterschieden zwischen (<span className='fm-s'>{"$y$"}</span>)-Achsensymmetrie und Punktsymmetrie. <br/>
                        
                    </p>
                </div>
            </div>
    )
}