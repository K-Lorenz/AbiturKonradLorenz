import Navbar from './navbar'

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