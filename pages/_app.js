import Layout from '../components/layout'
import '../styles/globals.css'
import { useEffect } from 'react';
import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';


import 'katex/dist/katex.min.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    renderMathInElement(document.body,{
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
    ],
    fleqn: true
    });
  }, [Component]);
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
};
export default MyApp