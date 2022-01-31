import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');


export default function Template(){
    return(
            <div className='min-h-screen max-w-7xl  mx-auto'>
                <Head>
                    <title>
                        Energetik
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Energetik
                    </h1>
                    <h2 className='ct-title-text'>
                        Header text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </h2>
                </div>
                {/* Content */}

                <div className=''>
                    <ol className='list-decimal list-inside'>
                        <h3><li>Systeme</li></h3>
                        <h4>Definition</h4>
                        <p className='ct-text'>
                            Mit System ist ein <em>thermodynamisches System</em> gemeint. Es kann mit den <em>Gesetzen der Thermodynamik</em> beschrieben werden. Den Bereich außerhalb des Systems nennt man Umgebung.
                            <br/> <b>Es wird unterteilt in:</b>
                        </p>
                        <h3><li>Stoffliche und energetische Aspekte</li></h3>
                        <h3><li>kalorimetrische Messung (Reaktionsenthalpie)</li></h3>
                        <h3><li>Energieerhaltungssatz, Satz von Hess, <span className='fm-s'>{"$\\Delta_R H$"}</span> aus Standardbildungsenthalpien</li></h3>
                        <h3><li>Entropie</li></h3>
                        <h3><li>Gibbs-Helmholtz-Gleichung</li></h3>
                        <h3><li>Grenzen der energetischen Betrachtungsweise</li></h3>
                    </ol>
                </div>
            </div>
    )
}