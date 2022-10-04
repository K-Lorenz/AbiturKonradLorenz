import Link from 'next/link'
import Head from 'next/head'
import Latex from 'react-latex'
import 'katex/dist/katex.min.css'

export default function FirstPost(){
    return(
        <div className='min-h-screen'>
                <Head>
                    <title>
                        Konrad Lorenz
                    </title>
                </Head>

                {/* Title */}

                <div className='flex flex-col items-center'>
                    <h1 className="ct-title">
                        Hi, I'm Konrad Lorenz
                    </h1>
                    <h2 className='ct-title-text'>
                        How did you end up here...? <br/>
                        Well, if you're already here might aswell take a <b>look</b>
                    </h2>
                </div>

                {/* Content */}

                <div className=''>

                    <h3>
                        What I have archived so far:
                    </h3>
                    <h4>
                        1. Finished High School
                    </h4>
                    <p className="ct-text">
                        I managed to successfully finish with school. 2022 I wrote my final exam("Abitur") and passed with a just about better than average grade of 2.1.
                        Why only 2.1? I seemed to always follow the things that I enjoy, rather than what school tried to teach me. Thats how this website came to life!
                        I was supposed to study, but instead i managed to find an excuse to do some programming and wrote this website...(to study of course!)
                    </p>
                    <h4 >
                        2. Got into a Dual Student Programm at Accenture
                    </h4>
                    <p className="ct-text">
                        I'm happy to anounce that i recently(Sept. 22) started my career at Accenture. Here I hope to learn skills and knowledge to help me turn my hobby
                        into my job. So far I really enjoyed my time here and I hope that I will get my Bachelor and after that maybe even a Master. In any case this is a 
                        big step for me, but I look forward to fight my way through every little obstacle I might encounter.
                    </p>
                    <h4>
                        3. Did a lot of silly projects(time eaters)
                    </h4>
                    <h5>
                        1. Wrote a Ubereats/Lieferando fake in C#/WPF
                    </h5>
                    <h5>
                        2. Created a Discord bot in Async C# and Python
                    </h5>
                    <h5>
                        3. Played around with Pandas and a lot more Python
                    </h5>
                    <h5>
                        4. Tried teaching myself Machine Learning, failed miserably, ran out of time and made this Website
                    </h5>
                </div>
            </div>
    )

}