import Link from 'next/link'
import { useEffect } from 'react';

export default function navbar(){

    return(
            <nav className="bg-teal-700 fixed inset-x-0 top-0 h-16 opacity-100 z-50 ">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between">

                        <div className="flex space-x-4">

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
        
                            <div className="hidden md:flex items-center space-x-1">
                                <Link href="/faecher/template">
                                    <a href="#" className="py-5 px-3 text-teal-200 hover:text-white">Learn</a>
                                </Link>
                                <Link href="/portfolio">
                                    <a href="#" className="py-5 px-3 text-teal-200 hover:text-white">About me</a>
                                </Link>
                                
                            </div>
                        </div>      
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="" className="py-5 px-3">Login</a>
                            <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </button>
                        </div>

                    </div>
                </div>

            </nav>
    )
}
