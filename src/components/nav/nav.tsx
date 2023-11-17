"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

type Props = {}

function Nav({ }: Props) {
    const [toggle, setToggle] = useState(true)
    return (
        <nav className='flex justify-between items-center rounded-full bg-primary-100 max-w-screen-2xl w-full px-4 py-3 pe-7 sm:pe-0 sm:py-0'>
            <div className="logo p-3 rounded-full text-primary-100 bg-primary-300">TH</div>
            <ul className="menu sm:flex justify-center items-center gap-4 lg:gap-6 md:gap-5 text-base hidden">
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
            <div className="contactBtn sm:inline-block hidden">
                <button className="bg-primary-300 rounded-r-full p-5 text-base">
                    <Link href="/contact" className='text-primary-100'>Contact</Link>
                </button>
            </div>
            <div className="sm:hidden inline-block w-9 h-9">
                {toggle ? <FiMenu className="w-full h-full text-primary-300" /> : <FiX className="w-full h-full text-primary-300" />}
            </div>
        </nav>
    )
}

export default Nav