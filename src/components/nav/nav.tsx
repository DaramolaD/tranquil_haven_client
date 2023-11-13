import Link from 'next/link'
import React from 'react'

type Props = {}

function Nav({ }: Props) {
    return (
            <nav className='flex justify-between items-center rounded-full pl-4 bg-primary-100 container'>
                <div className="logo p-3 rounded-full text-primary-100 bg-primary-200">AA</div>
                <ul className="menu flex justify-center items-center gap-4 lg:gap-6 md:gap-5 text-base">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/property">Property</Link>
                        
                    </li>
                </ul>
                <div className="contactBtn">
                    <button className="bg-primary-200 rounded-r-full p-4 text-base">
                        <Link href="/contact" className='text-primary-100'>Contact</Link>
                    </button>
                </div>
            </nav>
    )
}

export default Nav