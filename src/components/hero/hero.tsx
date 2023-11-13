import React from 'react'
import Button from '../ui/button/button'
import Image from 'next/image'
import { hero_img } from "../../assets/index"

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="hero pt-56 container">
            <div className="container text-primary-200 px-5">
                <div className="grid grid-cols-4 gap-y-12 gap-x-12 justify-items-stretch justify-between">
                    <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-extrabold lg:col-span-2 col-span-3'>
                        We craft the future dwelling 
                    </h1>
                    <div className="capital grid gap-5 col-span-2">
                        <div className="grid grid-cols-2 gap-3 gap-x-6">
                            <h3>Capital raised</h3>
                            <h3>Properties owned</h3>
                            <h4 className='text-2xl font-bold'>$3.5M+</h4>
                            <h4 className='text-2xl font-bold'>5k+</h4>
                        </div>

                        <p>Designed for your ease, enhancing the allure of your current lifestyle while also laying the foundation for a more beautiful and harmonious future for you and your beloved family.</p>
                    </div>
                    <div className="hero_testi col-span-2">
                        <p>Introduction</p>
                        <p className="pb-10">A vision for liveable, sustainable & affordable.</p>
                        <Button text="Get started" />
                    </div>
                    <Image src={hero_img} alt='hero_img' className='rounded-xl lg:col-span-2 col-span-3 w-full h-full max-h-96' />
                </div>
                <div className="search bg-white max-w-max rounded-md transform translate-x-1/4 -translate-y-8 w-full">
                    <div className="input_cont flex p-5 gap-8">
                        <div className="flex items-center p-2 px-5">
                            <p>Img</p>
                            <select name="location" id="location">
                                <option value="london">London</option>
                                <option value="lagos">Lagos</option>
                            </select>
                        </div>
                        <div className="flex items-center p-2 px-5">
                            <p>Img</p>
                            <select name="Property" id="property">
                                <option value="mansion">Mansion</option>
                                <option value="bed_room">Bed_room</option>
                            </select>
                        </div>
                        <div className="flex items-center p-2 px-5">
                            <p>Img</p>
                            <select name="price" id="Price">
                                <option value="100000">100000</option>
                                <option value="200000">200000</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero