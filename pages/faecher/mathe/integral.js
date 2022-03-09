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
        }, []);

    
    
    return(
        <div className='min-h-screen max-w-7xl  mx-auto'>
            <Head>
                <title>
                    Integral
                </title>
            </Head>

            {/* Title */}
            <div className='flex flex-col items-center'>
                <h1 className="ct-title">
                    Integral
                </h1>
                <h2 className='ct-title-text'>
                    Uiiiiiii Flächeninhalt... Geometrie??
                </h2>
            </div>
            <div className=''>
                <h3>Definition</h3>
                <p className='ct-text'>
                    Das Integral wird verwendet, um den Flächeninhalt zwischen einem Graphen und der X-Achse zu berechnen. <br/>
                    Für die Integralrechnung benötigt man verschiedene Sachen, die hier zusammengefasst werden.
                </p>
                <ol className='list-decimal list-inside'>
                    <h3><li>Stammfunktion</li></h3>
                    <h4>Definition</h4>
                    <p className='ct-text'>
                        Eine Stammfunktion ist die Funktion, die abgeleitet die Ursprungsfunktion bildet. Also:
                    </p>
                    <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$F'(x) = f(x)$$"}</span>
                        </div>
                    </p>
                    <p className='ct-text'>
                        Um die Stammfunktion zu berechnen benutzt man den Hauptsatz der Differential- und Integralrechnung(HDI). Er stellt die Verbindung zwischen Ableiten und Integrieren her.
                        Das Integrieren kann man als Umkehrung des Ableitens auffassen. Also:
                    </p>
                    <p className='ct-text'>
                        <div className='fm-ct'>
                            <span className='fm-lg'>{"$$F(x) = \\int f(x)dx$$"}</span>
                        </div>
                    </p>
                    <h4>Beispiel</h4>
                    <h3><li>Integralfunktion</li></h3>
                    <h3><li>Bestimmtes und Unbestimmtes Integral</li></h3>
                    <h3><li>Flächenintegral</li></h3>
                    <h3><li>Differenzfunktion</li></h3>
                    <h3><li>Rotationskörper</li></h3>
                    <h3><li>Uneigentliche Integrale</li></h3>
                    <h3><li>Mittelwert</li></h3>

                </ol>
            </div>
           
        </div>
    )
}