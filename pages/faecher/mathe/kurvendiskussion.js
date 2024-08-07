import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
import functionPlot from 'function-plot'
import React, { useEffect, useRef } from 'react'
import isMobile from 'is-mobile'
import { getCookies, getCookie, setCookies, removeCookies} from 'cookies-next';
import { useRouter } from 'next/router'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Funktion() {
    const router = useRouter()
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
              fn: '1/3x^3-x^2-3x+4',
              graphType: 'polyline',
            }]
          })

          functionPlot({
            xAxis:{domain:[-10, 10]},
            target: '#curve-2',
            width,
            height,
            data: [{
              fn: '1/3x^3-x^2-3x+4',
              graphType: 'polyline',
            },{
                points:[
                    [0, 4]
                ],
                fnType: 'points',
                graphType: 'scatter'
            }],
          })
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
                    Kurvendiskussion
                </title>
            </Head>

            {/* Title */}
            <div className='flex flex-col items-center'>
                <h1 className="ct-title">
                    Kurvendiskussion
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

                <h3><a id="ganzrationale-funktion">Definition ganzrationale Funktion</a></h3>
                <p className='ct-text'>
                    Eine ganzrationale Funktion kann in der Form: <span className='fm-s c-em'>{"$f(x)=a_n \\cdot x^n + a_{n-1} \\cdot x^{n-1}+...+a_1 \\cdot x+ a_0$"}</span> <br></br> <span className='fm-s'><span className='pr-3'>{"$n\\in \\mathbb{N}$ "}</span><span className='pr-3'>{"$a\\in \\mathbb{R}$"}</span><span>{"$a \\neq 0$"}</span></span>
                    {' '}dargestellt werden.
                    <br></br>
                    <em><span >{"$f$"}</span>&nbsp;ist eine ganzrationale Funktion <span className='pl-2'>{"$n$"}</span>-ten Grades.</em> Die Menge der Zahlen, die eingesetzt werden dürfen: <span className='fm-s'>{"$\\mathbb{D} = \\mathbb{R}$"}</span> <br></br>
                    Die Menge aller Werte von y: <span className='fm-s'>{"$\\mathbb{W} = \\mathbb{R}$"}</span>
                </p>
                <h5>Beispiel</h5>
                <div className=' flex flex-row flex-wrap curve'>
                    <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$f(x)=\\frac{1}{3}x^3 - x^2 - 3x + 4$$"}</span> 
                        </div>
                    </p>
                    <div id="curve-1" className=''></div>
                </div>
                <hr></hr>
                
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
                            Der <b><span className='fm-s'>{"$y$"}</span>-Achsenabschnitt</b> ist der <em>Schnittpunkt des Graphen mit der <span className='pl-2'>{"$y$"}</span>-Achse</em> (<span className='fm-s'>{"$x=0$"}</span>).
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
                        <div className='flex flex-wrap flex-auto curve'>
                            <div id="curve-2" className='flex-auto'></div>
                        </div>
                        <h3><li><a id="nullstellen" className='anchor'>Nullstellen</a></li></h3>
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
                                        <span className='fm-lg'>{"$$f(x)=2x^2-8$$"}</span>
                                    </div>
                                </p>
                                <p className='ct-text'>
                                    Setze <span className='fm-s'>{"$f(x)=0$"}</span>.
                                </p>
                                <div className=' flex flex-row curve flex-wrap'>
                                    <div className='ct-text'>
                                        <div className='fm-ct'>
                                            <span className='fm-lg'>{"$$\\begin{alignat*} 00&=2x^2-8 &&\\vert +8 \\\\ 8&= 2x^2  &&\\vert \\div 2 \\\\ 4&=x^2 &&\\vert \\sqrt{\\: }\\\\ x&= \\begin{Bmatrix*} x_1=&2 \\\\ x_2=&-2 \\end{Bmatrix*}\\end{alignat*}$$"}</span>
                                        </div>
                                    </div>
                                    <div id="curve-3" className=''></div>
                                </div>
                                
                                <p className='ct-text'>
                                    <em>Beachte</em>: Bei Funktionen 2. Grades sind <b>0, 1 oder 2 Lösungen möglich</b>. Bei 0 Lösungen ist der Wert vor der Wurzelziehung negativ (<span className='fm-s'>{"$x^2=-2$"}</span>). Bei genau einer Lösung ist der Wert vor der Wurzelziehung 0 (<span className='fm-s'>{"$x^2=0$"}</span>).
                                    Bei 2 Lösungen ist der Wert vor der Wurzelziehung positiv(<span className='fm-s'>{"$x^2=2$"}</span>).
                                </p> 
                            </li>
                            <li className='ct-text'>Berechnung durch <b>Ausklammern</b> und unter Verwendung des&nbsp;
                                <Link href="#a">
                                    <a id="ausklammern"className='link anchor'>
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
                                <div className=' flex flex-row curve flex-wrap'>
                                    <p className='ct-text'>
                                        <div className='fm-ct'>
                                            <span className='fm-lg'>{"$$\\begin{alignat*} 00&=4x^2+16x &&\\vert T \\\\ 0&=4x\\cdot (x+4) \\\\ x&= \\begin{Bmatrix*} x_1=&0 \\\\ x_2=&-4  \\end{Bmatrix*}\\end{alignat*}$$"}</span>
                                        </div>
                                    </p>
                                    <div id="curve-4" className=''></div>
                                </div>
                            </li>
                            <li className='ct-text'>
                                Berechnung mithilfe von&nbsp;
                                <Link href="#a">
                                    <a className='link'>
                                        Substitution
                                    </a>
                                </Link>
                                <p className='ct-text'>
                                    <div className='fm-ct'>
                                        <span className='fm-lg'>{"$$f(x)=4x^4+16x^2$$"}</span>
                                    </div>
                                </p>
                                <p className='ct-text'>
                                    Substituiere für <span className='fm-s'>{"$x^2=z$"}</span>.
                                </p>
                                <p className='ct-text'>
                                    <div className='fm-ct'>
                                        <span className='fm-lg'>{"$$f(x)=4z^2+16z$$"}</span>
                                    </div>
                                </p>
                                <p className='ct-text'>
                                    Berechne <span className='fm-s'>{"$z$"}</span> mithilfe von&nbsp;
                                    <AnchorLink href="#ausklammern">
                                        <a className='link'>
                                            Ausklammern
                                        </a>
                                    </AnchorLink>
                                </p>
                                <p className='ct-text'>
                                    <div className='fm-ct'>
                                        <span className='fm-lg'>{"$$\\begin{alignat*} 00&=4z^2+16z &&\\vert T \\\\ 0&=4z\\cdot (z+4) \\\\ z&= \\begin{Bmatrix*} z_1=&0 \\\\ z_2=&-4  \\end{Bmatrix*}\\end{alignat*}$$"}</span>
                                    </div>
                                </p>
                                <p className='ct-text'>
                                    Resubstitution mit&nbsp; <span className='fm-s'>{"$x=\\pm \\sqrt{z}$"} </span>.
                                    <br></br> Nullstellen von <span className='fm-s'>{"$f$"}</span> also:
                                </p>
                                <p className='ct-text'>
                                    <div className='fm-ct'>
                                        <span className='fm-lg'>{"$$x= \\begin{Bmatrix*} x_1=&0 \\end{Bmatrix*}$$"}</span>
                                    </div>
                                </p>
                                <div className=' flex flex-row curve flex-wrap'>
                                    <p className='ct-text'>
                                        <div className='fm-ct'>
                                            <span className='fm-lg'>{"$$f(x)=4x^4+16x^2$$"}</span>
                                        </div>
                                    </p>
                                    <div id="curve-5" className=''></div>
                                </div>
                            </li>
                            <li className='ct-text'>
                                Berechnung mithilfe der&nbsp;
                                <Link href="#a">
                                    <a className='link'>
                                        ABC-Formel
                                    </a>
                                </Link>
                                <p className='ct-text'>
                                    <div className='fm-ct'>
                                        <span className='fm-lg'>{"$$f(x)=4x^2+16x-8$$"}</span>
                                    </div>
                                </p>
                                <p className='ct-text'>
                                    Setze <span className='fm-s'>{"$f(x)=0$"}</span>.
                                </p>
                                <p className='ct-text'>
                                    <div className='fm-ct'>
                                        <span className='fm-lg'>{"$$0=4x^2+16x-8$$"}</span>
                                    </div>
                                </p>
                                <p className='ct-text'>
                                    Benutze die <b>ABC-Formel</b> um die Nullstellen zu berechnen.
                                </p>
                                <p className='ct-text'>
                                    <div className='fm-ct'>
                                        <span className='fm-lg'>{"$$\\begin{alignat*} 0x_{1/2}&=\\frac{-16 \\pm \\sqrt{16^2-4\\cdot 4 \\cdot (-8)}}{2 \\cdot 4} &&\\vert T \\\\ x_{1/2}&=\\frac{-16 \\pm \\sqrt{256-(-128)}}{8} &&\\vert T \\\\ x_{1/2}&=\\frac{-16 \\pm 8\\cdot \\sqrt{6}}{8} &&\\vert T \\\\ x_{1/2}&=-2 \\pm \\sqrt{6} &&\\vert T \\\\x&= \\begin{Bmatrix*} x_1=-2- \\sqrt{6} \\approx& -4,449 \\\\x_2=-2+ \\sqrt{6} \\approx& 0,449  \\end{Bmatrix*}\\end{alignat*}$$"}</span>
                                    </div>
                                </p>
                                <div className=' flex flex-row curve flex-wrap'>
                                    <p className='ct-text'>
                                        <div className='fm-ct'>
                                            <span className='fm-lg'>{"$$f(x)=4x^2+16x-8$$"}</span>
                                        </div>
                                    </p>
                                    <div id="curve-6" className=''></div>
                                </div>
                            </li>
                        </ol>
                        <h3><li>Hochpunkt / Tiefpunkt / Sattelpunkt</li></h3>
                        <h4>Definition</h4>
                        <p className='ct-text'>
                            Bei einem <b>Hoch-, Tief-, oder Sattelpunkt</b> ist der Wert der <em>ersten Ableitung gleich null</em>(<span className='fm-s'>{"$f'(x)=0$"}</span>). <br></br>
                            Es sind also die <AnchorLink href="#nullstellen" className='link'>Nullstellen</AnchorLink> der ersten <Link href="/faecher/mathe/ableitung"><a className='link'>Ableitung</a></Link>.
                        </p>
                        <div className=' flex flex-row curve flex-wrap'>
                            <p className='ct-text'>
                                <div className='fm-ct'>
                                    <span className='fm-lg'>{"$$f(x)=x^3-3x$$"}</span>
                                </div>
                            </p>
                            <div id="curve-7" className=''></div>
                        </div>
                        <div className=' flex flex-row curve flex-wrap'>
                            <p className='ct-text'>
                                <div className='fm-ct'>
                                    <span className='fm-lg'>{"$$f'(x)=3x^2-3$$"}</span>
                                </div>
                            </p>
                            <div id="curve-8" className=''></div>
                        </div>
                        <h5>Beispiel zur Berechnung</h5>
                        <p className='ct-text'>
                            Berechne die <AnchorLink href="#nullstellen"> <a className='link'>Nullstellen</a></AnchorLink> der ersten <Link href="/faecher/mathe/ableitung"><a className='link'>Ableitung</a></Link> mithilfe vom <Link href="#nullstellen"><a className='link'> Satz des Nullprodukts</a></Link>.
                        </p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 0&=3x^2-3 &&\\vert -3\\\\ 3&=3x^2 &&\\vert \\div 3\\\\x^2&=1 &&\\vert \\sqrt{}{}\\\\x&= \\begin{Bmatrix*} x_1=&-1 \\\\x_2=&1 \\end{Bmatrix*}\\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'>
                            <em>Setze die Nullstellen in die 2. Ableitung ein</em> (<span className='fm-s'>{"$f''(x)=6x$"}</span>), um herauszufinden um was für eine Extremstelle es sich handelt.
                        </p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 f''(-1)&=6 \\cdot (-1) \\\\ &=-6\\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'>und:</p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 f''(1)&=6 \\cdot (1) \\\\ &=6\\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'>Wenn der Wert der 2. Ableitung <span className='fm-s c-em'>{"$f''(x_1)<0$"}</span> ist, dann handelt es sich an dieser Stelle um ein <em>Maxima</em>. <br/> Wenn der Wert der 2. Ableitung <span className='fm-s c-em'>{"$f''(x_2)>0$"} </span> ist, dann handelt es sich an dieser Stelle um ein <em>Minima</em>. <br/>
                            Falls <span className='fm-s c-em'>{"$f''(x)=0$"}</span> und <span className='fm-s c-em'>{"$f'''(x)\\ne0$"}</span>ist, handelt es sich um einen <em>Sattelpunkt</em>. <br/>
                            Also ist <span className='fm-s '>{"$x_1$"}</span>  ein Maxima und  <span className='fm-s '>{"$x_2$"}</span> ein Minima.</p> 
                        <p className='ct-text'>
                            <em>Setze die Nullstellen in <span className='fm-s c-em'>{"$f(x)$"}</span> ein, um die Punkte zu berechnen.</em>
                        </p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 f(-1)&=(-1)^3 - 3\\cdot (-1) \\\\ &=-1 - (-3) \\\\ &=2\\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 f(1)&=(1)^3 - 3\\cdot (1) \\\\ &=1 - 3\\\\ &=-2\\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'><b>Hochpunkt:</b><span className='fm-s'>{"$H(-1 \\vert 2)$"}</span> <br/> <b>Tiefpunkt:</b><span className='fm-s'>{"$T(1 \\vert -2)$"}</span></p>
                        <h3><li>Wendepunkt</li></h3>
                        <h4>Definition</h4>
                        <p className='ct-text'>
                            Ein <b>Wendepunkt</b> ist ein Punkt des Graphen, an dem der Graph <b>seine Richtung ändert</b>. Um mögliche Wendestellen zu berechnen, <em>setzt man die 2. Ableitung gleich null</em>(<span className='fm-s'>{"$f''(x)=0$"}</span>). Um zu überprüfen ob die berechneten Stellen tatsächlich Wendestellen sind, setzt man sie in die <b>3. Ableitung</b>. Wenn sie ungleich null ist handelt es sich um eine Wendestelle(<span className='fm-s'>{"$f'''(x)\\ne 0$"}</span>).
                        </p>
                        <div className=' flex flex-row curve flex-wrap'>
                            <p className='ct-text'>
                                <div className='fm-ct'>
                                    <span className='fm-lg'>{"$$f(x)=x^3-3x$$"}</span>
                                </div>
                            </p>
                            <div id="curve-9" className=''></div>
                        </div>
                        <h5>Beispiel zur Berechnung</h5>
                        <p className='ct-text'><em>Bilde die 2. und 3. Ableitung der Funktion.</em></p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 f(x)&=x^3-3x \\\\ f''(x)&=6x\\\\ f'''(x)&=6 \\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'>Setze die <em>2. Ableitung gleich null</em> (<span className='fm-s'>{"$f''(x)=0$"}</span>)</p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 0&=6x \\\\ x&=0\\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'>Setze die <em>mögliche Wendestelle in die 3. Ableitung</em> ein, um zu überprüfen, ob es sich tatsächlich um eine Wendestelle handelt(<span className='fm-s'>{"$f'''(0)=6$"}</span>).
                            Der Wert ist <b>größer als 0</b>, also eine Wendestelle von <b>Links nach Rechts</b>. <br/> Wenn der Wert <b>kleiner als Null</b> ist, dann ist es ein Wechsel von <b>Rechts nach Links</b>. <br/>
                            Falls der Wert <b>gleich null</b> ist, muss man den <b>Vorzeichenwechsel der 2. Ableitung</b> betrachten. 
                        </p>
                        <p className='ct-text'>
                            <em>Setze die Nullstelle in <span className='fm-s c-em'>{"$f(x)$"}</span> ein, um die Punkt zu berechnen.</em>
                        </p>
                        <p className='ct-text'>
                            <div className='fm-ct'>
                                <span className='fm-lg'>{"$$\\begin{alignat*} 0 f(0)&=(0)^3 - 3\\cdot (0) \\\\ &=0\\end{alignat*}$$"}</span>
                            </div>
                        </p>
                        <p className='ct-text'><b>Wendepunkt:</b><span className='fm-s'>{"$W(0 \\vert 0)$"}</span></p>
                    </ol>
            </div>
        </div>
    )
}