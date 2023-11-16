import React from 'react'
import Heading from '../ui/heading/heading'
import { IoChevronDownOutline } from 'react-icons/io5'
import Button_2 from '../ui/button/button_2'
import PropertyCard from '../ui/propertyCard/propertyCard'

type Props = {}

function Property_list({ }: Props) {
  return (
    <div className="w-full px-5 md:px-10 pt-[50px] grid max-w-screen-2xl">
      <Heading text="Popular Property Deals" />
      <div className="property_cont grid grid-cols-4 gap-y-12 gap-x-12 mb-12">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="btn justify-self-center">
        <Button_2 text="View More" />
      </div>
    </div>
  )
}

export default Property_list