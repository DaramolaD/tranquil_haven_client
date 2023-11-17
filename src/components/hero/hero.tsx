"use client"
import React, { useState } from 'react'
import Button from '../ui/button/button'
import Image from 'next/image'
import { avatar_1, avatar_2, avatar_3, avatar_4, hero_img } from "../../assets/index"
import Selection from '../ui/selection/selection'
import { locations, lifetyle, priceRange, propertyTypes } from '@/assets/data'
import "./hero.css"

const avatars = [
    {
        id: 1,
        avatar: avatar_1
    },
    {
        id: 2,
        avatar: avatar_2
    },
    {
        id: 3,
        avatar: avatar_3
    },
    {
        id: 4,
        avatar: avatar_4
    },
]

const Hero = () => {
    return (
        <div className="relative hero flex justify-center w-full md:px-5 pt-[200px]">
            <div className="text-primary-200 px-5 relative max-w-screen-2xl grid">
                <div className="grid grid-cols-4 gap-y-12 gap-x-12 justify-items-stretch justify-between lg:gap-x-12">
                    <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-extrabold lg:col-span-2 col-span-4'>
                        We craft your desired home
                    </h1>
                    <div className="capital grid gap-5 h-fit self-center sm:col-span-2 col-span-4 lg:w-3/5 lg:justify-self-center w-full">
                        <div className="grid grid-cols-3 gap-3 gap-x-6">
                            <h3 className="">Sales  <br /> in 2022</h3>
                            <h3 className="">Clients <br /> Served</h3>
                            <h3 className="">5-Star  <br /> Reviews</h3>
                            <h4 className='text-xl font-bold text-primary-300 '>$201M+</h4>
                            <h4 className='text-xl font-bold text-primary-300 '>448</h4>
                            <h4 className='text-xl font-bold text-primary-300 '>427+</h4>
                        </div>

                        <p>Welcome to Tranquil Haven, California&apos;s No. 1 real estate choice. Beyond transactions, we&apos;re devoted to crafting your dream, future home, reflecting your unique vision and aspirations</p>
                    </div>
                    <div className="hero_testi lg:col-span-1 sm:col-span-2 col-span-4 lg:self-initial self-center grid gap-5">
                        <p className="">Join 427+ delighted clients who have found their sanctuary. Choose excellence; don&apos;t settle. Ready to discover your? Connect with us today.</p>
                        <div className="avatar flex">
                            {avatars.map((avatar) => (
                                <Image src={avatar.avatar} key={avatar.id} alt='avatar_img' className='img w-[50px] h-[50px] rounded-full border-primary-300 border-2' />
                            ))}
                        </div>
                        <Button text="Contact Us" />
                    </div>
                    <Image src={hero_img} alt='hero_img' className='rounded-xl lg:col-span-3 col-span-4 w-full h-full max-h-96' />
                </div>
                <div className="selection_cont max-w-[95%] w-full lg:w-fit grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 rounded-3xl md:flex flex-wrap gap-5 justify-center items-center bg-primary-110 md:rounded-full p-8 py-5 transform -translate-y-8 justify-self-center shadow-[0_7px_20px_-13px_rgba(128,128,128,1)]">
                    <Selection data={locations} title="Location" />
                    <Selection data={propertyTypes} title="Property-Type" />
                    <Selection data={priceRange} title="Price" />
                    <Selection data={lifetyle} title="Lifestyle" />
                </div>

            </div>
        </div>
    )
}

export default Hero