import Link from 'next/link'
import Head from 'next/head'
import Latex from 'react-latex'
import 'katex/dist/katex.min.css'

export default function FirstPost(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Portfolio</title>
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold p-1">Hi!</h1>
                <p className="text-2xl">
                    my name is
                </p>
                <h1 className="text-8xl font-bold p-4">Konrad Lorenz</h1>
                <p className="text-xl p-10">you can read about me in my blog. <br/>
                My blog is very interesting. <br/>
                My Person isn't... <br/>
                But there is a lot to talk about in this world. So let me start by saying: <br/> <br/>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p className="text-xl p-10">you can read about me in my blog. <br/>
                My blog is very interesting. <br/>
                My Person isn't... <br/>
                But there is a lot to talk about in this world. So let me start by saying: <br/> <br/>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p className="text-xl p-10">you can read about me in my blog. <br/>
                My blog is very interesting. <br/>
                My Person isn't... <br/>
                But there is a lot to talk about in this world. So let me start by saying: <br/> <br/>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>                
                <div className='text-3xl'>
                    Here you can go {' '}
                    <Link href="/">
                        <a className="text-blue-600 hover:text-blue-500">
                            Back
                        </a>
                    </Link>
                </div>
                
            </main>
        </div>
    )

}