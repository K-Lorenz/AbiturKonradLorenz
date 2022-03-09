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
            </div>
           
        </div>
    )
}