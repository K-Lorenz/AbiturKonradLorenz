import {Navbar} from './navbar2'

export default function Layout({ children }) {
    return (
      <>
      <body className='dark'>
        <Navbar />
        <main className="dark:bg-slate-900 py-16">{children}</main>
      </body>
        
      </>
    )
  }