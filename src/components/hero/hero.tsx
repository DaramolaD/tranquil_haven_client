"use client"
import React, { useState } from 'react'
import Button from '../ui/button/button'
import Image from 'next/image'
import { hero_img } from "../../assets/index"
import Selection from '../ui/selection/selection'
import { locations, lifetyle, priceRange, propertyTypes } from '@/assets/data'


const Hero = () => {
    return (
        <div className="relative hero flex justify-center w-full md:px-5 pt-[200px]">
            <div className="text-primary-200 px-5 relative max-w-screen-2xl grid">
                <div className="grid grid-cols-4 gap-y-12 gap-x-12 justify-items-stretch justify-between lg:gap-x-12">
                    <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-extrabold lg:col-span-2 col-span-4'>
                        We craft your desired home
                    </h1>
                    <div className="capital grid gap-5 h-fit self-center sm:col-span-2 col-span-4 lg:w-3/5 lg:justify-self-center w-full">
                        <div className="grid grid-cols-2 gap-3 gap-x-6">
                            <h3>Capital <br /> raised</h3>
                            <h3>Properties <br /> owned</h3>
                            <h4 className='text-2xl font-bold'>$3.5M+</h4>
                            <h4 className='text-2xl font-bold'>5k+</h4>
                        </div>

                        <p>Welcome to Tranquil Haven, California's No. 1 real estate choice. Beyond transactions, we're devoted to crafting your dream, future home, reflecting your unique vision and aspirations</p>
                    </div>
                    <div className="hero_testi lg:col-span-1 sm:col-span-2 col-span-4 lg:self-initial self-center">
                        <p className="pb-10">Join 120+ delighted clients who have found their sanctuary. Choose excellence; don't settle. Ready to discover you? Connect with us today.</p>
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