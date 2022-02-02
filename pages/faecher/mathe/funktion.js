import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
import functionPlot from 'function-plot'
import React, { useEffect, useRef } from 'react'
import isMobile from 'is-mobile'
import { getCookies, getCookie, setCookies, removeCookies} from 'cookies-next';
import { useRouter } from 'next/router'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function funktion(){
    useEffect(() => {
        let contentsBounds = document.body.getBoundingClientRect();
        let width = 800;
        let height = 500;
        let ratio = (contentsBounds.width/3) / width;
        if(isMobile()){
            ratio = (contentsBounds.width/1.3) / width;
        }
        width *= ratio;
        height *= ratio;
        functionPlot({
            xAxis:{domain:[-10, 10]},
            width,
            height,
            target: '#curve-1',
            
            data: [{
              fn: 'x^2',
              graphType: 'polyline',
            }]
          })

          functionPlot({
            xAxis:{domain:[-10, 10]},
            target: '#curve-2',
            width,
            height,
            data: [{
              fn: 'log(x)',
              graphType: 'polyline',
          }]})
          functionPlot({
            xAxis:{domain:[-14, 14]},
            target: '#curve-3',
            width,
            height,
            data: [{
              fn: '2x^2-8',
              graphType: 'polyline',
            },{
                points:[
                    [2, 0],
                    [-2, 0]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          })
          functionPlot({
            xAxis:{domain:[-30, 40]},
            target: '#curve-4',
            width,
            height,
            data: [{
              fn: '4x^2+16x',
              graphType: 'polyline',
            },{
                points:[
                    [0, 0],
                    [-4, 0]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          })
          functionPlot({
            xAxis:{domain:[-10, 10]},
            target: '#curve-5',
            width,
            height,
            data: [{
              fn: '4x^4+16x^2',
              graphType: 'polyline',
            },{
                points:[
                    [0, 0]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          })
          functionPlot({
            xAxis:{domain:[-8, 4]},
            target: '#curve-6',
            width,
            height,
            data: [{
              fn: '4x^2+16x-8',
              graphType: 'polyline',
            },{
                points:[
                    [-4.449, 0],
                    [0.449, 0]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          })
          functionPlot({
            xAxis:{domain:[-10, 10]},
            target: '#curve-7',
            width,
            height,
            data: [{
              fn: 'x^3-3x',
              graphType: 'polyline',
            },{
                points:[
                    [1, -2],
                    [-1, 2]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          })
          functionPlot({
            xAxis:{domain:[-10, 10]},
            target: '#curve-8',
            width,
            height,
            data: [{
              fn: '3x^2-3',
              graphType: 'polyline',
            },{
                points:[
                    [1, 0],
                    [-1, 0]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          }),
          functionPlot({
            xAxis:{domain:[-10, 10]},
            target: '#curve-9',
            width,
            height,
            data: [{
              fn: 'x^3-3x',
              graphType: 'polyline',
            },{
                points:[
                    [0, 0]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          })   
      }, []);
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
                        Monotone Monotonie..
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
                        Um eine normale Monotonie oder eine Monotonie in einem Intervall nachzuweisen, muss man zuerst die <b>Extremstellen berechnen und nach dem Verhalten um diese suchen</b>.
                    </p>
                    <h3>Krümmungsverhalten</h3>
                    <h4>Definition</h4>
                    <p className='ct-text'>
                        Das Krümmungsverhalten beschreibt die <b>Krümmung einer Funktion</b> (<em>Linksgekrümmt/Rechtgekrümmt</em>). <br/>Eine Merkhilfe um leicht zu erkennen in welche Richtung eine Funktion gekrümmt ist, ist die
                        Vorstellung, dass der Graph der Funktion eine aufgemahlte Linie auf dem Boden ist und man als Fahrradfahrer auf dieser Linie entlangfährt. Die Lenkrichtung ist gleich der Krümmung der Funktion.
                    </p>
                    <h5>Berechnung</h5>
                    <p className='ct-text'>
                        Um das Krümmungsverhalten einer Funktion zu untersuchen, <em>bildet man die 2. Ableitung</em>. <br/>
                        Wenn der Wert der 2. Ableitung:
                        <ul className='list-disc list-inside'>
                            <li><b>größer 0</b> ist, dann hat die Funktion eine <b>Linkskrümmung/konvex</b>. <br/></li>
                            <li><b>kleiner 0</b> ist, dann hat die Funktion eine <b>Rechtskrümmung/konkav</b>. <br/></li>
                        </ul>       
                        In <b>allen anderen Fällen</b>, bzw. wenn in der 2. Ableitung <b>x vorkommt</b> gibt es <b>keine einzelne Krümmung</b> der Funktion. <br></br>
                        Um eine Krümmung in einem Intervall nachzuweisen, muss man zuerst die <b>Wendestellen berechnen und nach dem Verhalten der Funktion um diese suchen</b>.
                    </p>
                    <h3>Symmetrie</h3>
                    <h4>Definition</h4>
                    <p className='ct-text'>
                        Es wird unterschieden zwischen <em>(<span className='fm-s'>{"$y$"}</span>)-Achsensymmetrie und Punktsymmetrie</em>. <br/>
                        Um das Symmetrieverhalten zu bestimmen, muss man <span className='fm-s'>{"$f(-x)$"}</span> untersuchen <br/>
                        Eine Funktion ist...
                        <ul className='list-disc list-inside'>
                            <li><b>achsensymmetrisch zur <span className='fm-s'>{"$y$"}</span>-Achse</b> wenn <span className='fm-s'>{"$f(-x)=f(x)$"}</span> gilt. <br/></li>
                            <li><b>punktsymmetrisch zum Ursprung</b> wenn <span className='fm-s'>{"$f(-x)=-f(x)$"}</span> gilt. <br/></li>
                        </ul>   
                    </p>
                    <h3>Grenzverhalten</h3>
                    <h4>Definition</h4>
                    <p className='ct-text'>
                        <em>Der Grenzwert zeigt wie sich <span className='fm-s'>{"$y$"}</span>-Werte verhalten</em>, wenn die <span className='fm-s'>{"$x$"}</span>-Stellen in eine bestimmte Richtung gehen.
                        Hier wird unterschieden zwischen:
                        <ul className='list-disc list-inside'>
                            <li>Die<span className='fm-s'>{"$x$"}</span>-Stellen gehen gegen<b> unendlich.</b><br/></li>
                            <li>Die<span className='fm-s'>{"$x$"}</span>-Stellen gehen gegen eine <b>endliche Stelle <span className='fm-s'>{"$x_0$"}</span></b><br/></li>
                        </ul>  
                    </p>
                    <h4>Beispiele</h4>
                    <h5><span className='fm-s'>{"$x$"}</span>-Stellen gegen unendlich</h5>
                    <p className='ct-text'>
                        Gegeben sei der Graph der Funktion <span className='fm-s'>{"$f(x)=x^2$"}</span>.
                    </p>
                    <div className=' flex flex-row flex-wrap curve'>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$f(x)=x^2$$"}</span> 
                            </div>
                        </p>
                        <div id="curve-1" className=''></div>
                    </div>
                    <p className='ct-text'>
                        <b>Aufgabe:</b> Untersuche die Funktion <span className='fm-s'>{"$f(x)=x^2$"}</span> auf ihr Grenzverhalten für <span className='fm-s'>{"$x \\to \\infty$"}</span> und <span className='fm-s'>{"$x \\to - \\infty$"}</span>. <br/> <br/>
                        Um das Verhalten zu überprüfen erstellt man eine <em>Wertetabelle und lässt <span className='fm-s c-em'>{"$x$"}</span> gegen <span className='fm-s c-em'>{"$+ \\infty$"}</span> laufen</em>. Es wird recht schnell klar, dass das Verhalten der Werte von <span className='fm-s'>{"$f(x)$"}</span> auch gegen <span className='fm-s'>{"$+ \\infty$"}</span> gehen.
                        Durch das Quadrat in der Funktion sieht man, das die Werte für x gegen <span className='fm-s'>{"$- \\infty$"}</span> auch gegen <span className='fm-s'>{"$+ \\infty$"}</span> laufen. <br/>
                        <em>Mathematisch ausgedrückt also: <span className='fm-s c-em'>{"$\\lim_{x \\to + \\infty} x^2 = + \\infty$"}</span> und <span className='fm-s c-em'>{"$\\lim_{x \\to - \\infty} x^2 = + \\infty$"}</span></em>
                    </p>
                    <h5><span className='fm-s'>{"$x$"}</span>-Stellen gegen endliche Stelle <span className='fm-s'>{"$x_0$"}</span></h5>
                    <p className='ct-text'>
                        Ähnlich wie bei dem Verhalten für <span className='fm-s'>{"$x \\to \\infty$"}</span> kann man <span className='fm-s'>{"$x$"}</span> auch an einen Wert annähern lassen.
                        Dies ist zum Beispiel bei der <span className='fm-s'>{"$e$"}</span>-Funktion nützlich.
                    </p>
                    <p className='ct-text'>
                        <b>Aufgabe:</b> Untersuche die Funktion <span className='fm-s'>{"$f(x)=\\ln{(x)}$"}</span> auf ihr Grenzverhalten für <span className='fm-s'>{"$x \\to 0$"}</span>
                    </p>
                    <div className=' flex flex-row flex-wrap curve'>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$f(x)=ln(x)$$"}</span> 
                            </div>
                        </p>
                        <div id="curve-2" className=''></div>
                    </div>
                    <p className='ct-text'>
                        Genau wie bei der Untersuchung gegen unendlich, <em>nähert man sich der Stelle an</em>. In diesem Fall ist zu erkennen, dass wenn <span className='fm-s'>{"$x \\to 0$"}</span> geht, <span className='fm-s'>{"$f(x) \\to - \\infty$"}</span> geht. <br/>
                        <em>Also Mathematisch ausgedrückt: <span className='fm-s c-em'>{"$\\lim_{x \\to 0} \\ln{(x)} = - \\infty$"}</span></em>
                    </p>
                </div>
            </div>
    )
}