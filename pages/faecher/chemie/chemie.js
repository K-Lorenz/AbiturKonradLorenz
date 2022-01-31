import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
var Latex = require('react-latex');



export default function Mathe(){
    return(
            <div className='min-h-screen max-w-7xl  mx-auto'>
                <Head>
                    <title>
                        Chemie
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Chemie
                    </h1>
                    <h2 className='ct-title-text'>
                        Zusammenfassungen von: Julia Lorenz<br/> geprüft Herr Degner.(2019)
                    </h2>
                </div>
                <ul className='list-disc list-inside'>
                    <h3 className='link'><li><Link href="/faecher/chemie/energetik"><a className='link'>Chemische Energetik</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/chemie/gleichgewichte"><a className='link'>Chemische Gleichgewichte</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/chemie/saeure_base_gg"><a className='link'>Chemische Säure-Base-Gleichgewichte</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/chemie/naturstoffe"><a className='link'>Naturstoffe</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/chemie/aromaten"><a className='link'>Aromaten</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/chemie/kunststoffe"><a className='link'>Kunststoffe</a></Link></li></h3>
                    <h3 className='link'><li><Link href="/faecher/chemie/elektrochemie"><a className='link'>Elektrochemie</a></Link></li></h3>

                </ul>
                
            </div>
    )
}