import {Navbar} from './navbar2'
import TableOfContents from './tableOfContents'

export default function Layout({ children }) {
    return (
      <>
      <body className='dark'>
        <Navbar />
        <TableOfContents />
        <main className="dark:bg-slate-900 py-16">{children}</main>
      </body>
        
      </>
    )
  }