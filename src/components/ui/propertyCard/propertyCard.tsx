import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Button_3 from '../button/button_3'
import { hero_img } from '@/assets'
import { GiBathtub } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'

type Props = {
    img: StaticImageData
}

function PropertyCard({img}: Props) {
    
    return (
        <div className='w-fit rounded-xl shadow-[0_7px_20px_-13px_rgba(128,128,128,1)] h-full pb-3 sm:pb-0'>
            <Image src={img} alt="property_img" className="rounded-t-xl max-h-[250px] min-h-[190px] h-[50%]" sizes='100vw'/>
            <div className="content px-6 py-5 grid gap-3">
                <h4 className='text-text-100'>The Most Luxury House</h4>
                <div className="icon_cont flex items-center gap-2">
                    <CiLocationOn />
                    <p className="text-text-110 text-xs">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="features flex items-center gap-5">
                    <div className="feature flex items-center gap-2 text-xs">
                        <IoBedOutline />
                        <span>3 bedroom</span>
                    </div>
                    <div className="feature flex items-center gap-2 text-xs">
                        <GiBathtub />
                        <span>2</span>
                    </div>
                </div>
                <div className="flex items-center justify-between price_cont border-solid border-spacing-y-5 mt-2 pt-5 pb-5 border-t-[1px] border-y-border-100">
                    <p className='price text-primary-300 text-[14px]'>$860,500</p>
                    <Button_3 text="View" />
                </div>
            </div>
        </div>
    )
}

export default PropertyCard