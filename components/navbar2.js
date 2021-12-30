/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='bg-teal-700 fixed inset-x-0 top-0 h-16 opacity-100 z-50 '>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" >
              <div className='flex justify-between'>
                    <div className='flex space-x-4'>
                        <div>
                            <Link href="/">
                                <a className="flex items-center py-5 px-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <span className="text-xl font-bold pl-2">Konrad Lorenz</span>
                                </a>
                            </Link>
                        </div>
                        <div className={`md:flex md:items-center hidden md:space-x-1`}>
                            <Link href='/faecher/uebersicht'>
                                <a className='md:py-5 md:px-3 text-teal-200 hover:text-white'>
                                    Lernen
                                </a>
                            </Link>

                            <Link href='/portfolio'>
                            <a className='md:py-5 md:px-3 text-teal-200 hover:text-white'>
                                Über mich
                            </a>
                            </Link>
                        </div>
                    </div>
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button" onClick={handleClick}>
                                <svg className="w-6 h-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    
                </div>
                
            </div>
            <div className={`${active ? '': 'hidden'}  md:hidden -mt-1`}>
                <Link href="/faecher/uebersicht">
                    <a href="#" className="block py-2 px-4 text-sm text-white bg-teal-800 hover:bg-teal-600">Lernen</a>
                </Link>
                <Link href="/portfolio">
                    <a href="#" className="block py-2 px-4 text-sm text-white bg-teal-800 hover:bg-teal-600">Über mich</a>
                </Link>
            </div>
        </nav>
    </>
  );
};
