import React from 'react'
import Image from 'next/image'
import Heading from '../ui/heading/heading'
import { hero_2 } from "../../assets/index"
import Button from '../ui/button/button'

function About() {
  return (
    <div className='w-full px-5 md:px-10 pt-[50px] grid max-w-screen-2xl'>
        <Heading text="About" />
        <div className="about_cont grid grid-cols-2 gap-3 justify-between">
            <Image src={hero_2} alt='company_about_img'/>
            <div className='about_content'>
              <h3></h3>
              <p></p>
              <Button text="Contact Us"/>
            </div>
        </div>
    </div>
  )
}

export default About