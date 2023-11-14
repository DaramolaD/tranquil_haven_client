"use client"
import React, { useState } from 'react'
import Button from '../ui/button/button'
import Image from 'next/image'
import { hero_img } from "../../assets/index"
import Selection from '../ui/selection/selection'
import { continents, priceRange, propertyTypes } from '@/assets/data'

type Props = {}

const Hero = (props: Props) => {
    // const [type, setType] = useState("")
    // const [priceRange, setPriceRange] = useState("")
    // const [continent, setContinent] = useState("")
    return (
        <div className="relative hero  w-full md:px-5 pt-64">
            <div className="text-primary-200 px-5 relative max-w-screen-2xl">
                <div className="grid grid-cols-4 gap-y-12 gap-x-12 justify-items-stretch justify-between lg:gap-x-12">
                    <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-extrabold lg:col-span-2 col-span-4'>
                        We craft the future dwelling
                    </h1>
                    <div className="capital grid gap-5 sm:col-span-2 col-span-4 lg:w-3/5 lg:justify-self-center w-full">
                        <div className="grid grid-cols-2 gap-3 gap-x-6">
                            <h3>Capital <br /> raised</h3>
                            <h3>Properties <br /> owned</h3>
                            <h4 className='text-2xl font-bold'>$3.5M+</h4>
                            <h4 className='text-2xl font-bold'>5k+</h4>
                        </div>

                        <p>Designed for your ease, enhancing the allure of your current lifestyle while also laying the foundation for a more beautiful and harmonious future for you and your beloved family.</p>
                    </div>
                    <div className="hero_testi lg:col-span-1 sm:col-span-2 col-span-4 lg:self-initial self-center">
                        <p>Introduction</p>
                        <p className="pb-10">A vision for liveable, sustainable & affordable.</p>
                        <Button text="Get started" />
                    </div>
                    <Image src={hero_img} alt='hero_img' className='rounded-xl lg:col-span-3 col-span-4 w-full h-full max-h-96' />
                </div>
                {/* <div className="relative search bg-white max-w-full rounded-md w-full flex items-center justify-center transform -translate-y-8">
                    <div className="input_cont flex p-5 gap-8 w-4/5 rounded-full justify-center bg-primary-110 shadow-lg shadow-gray-500">
                        <div className="flex items-center p-2 px-5 bg-primary-100">
                            <p>Img</p>
                            <select onChange={(e) => setType(e.target.value)}>
                                <option disabled>Select type</option>
                                <option value="bench">Beach</option>
                                <option value="mountain">Mountain</option>
                                <option value="village">Village</option>
                            </select>
                        </div>
                        <div className="flex items-center p-2 px-5 bg-primary-100">
                            <p>Img</p>
                            <select onChange={(e) => setPriceRange(e.target.value)}>
                                <option disabled>Select Price Range</option>
                                <option value="0">0-100,000</option>
                                <option value="1">100,000-200,000</option>
                                <option value="2">200,000-300,000</option>
                                <option value="3">300-400,000</option>
                                <option value="4">400,000-500,000</option>
                            </select>
                        </div>
                        <div className="flex items-center p-2 px-5 bg-primary-100">
                            <p>Img</p>
                            <select onChange={(e) => setContinent(e.target.value)}>
                                <option disabled>Select Continent</option>
                                <option value="0">Europe</option>
                                <option value="1">Asia</option>
                                <option value="2">Africa</option>
                                <option value="3">South America</option>
                                <option value="4">North America</option>
                                <option value="5">Oceania</option>
                            </select>
                        </div>
                    </div>
                </div> */}
                <Selection data={continents}/>
                {/* <Selection data={priceRange}/> */}
                {/* <Selection data={propertyTypes}/> */}
            </div>
        </div>
    )
}

export default Hero