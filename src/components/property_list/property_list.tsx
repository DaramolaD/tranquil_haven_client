import React from 'react'
import Heading from '../ui/heading/heading'
import { IoChevronDownOutline } from 'react-icons/io5'
import Button_2 from '../ui/button/button_2'
import PropertyCard from '../ui/propertyCard/propertyCard'
import { property_1, property_2, property_3, property_4, property_5, property_6 } from '@/assets'

type Props = {}

const properties = [
  {
    id: 1,
    img: property_1
  },
  {
    id: 2,
    img: property_2
  },
  {
    id: 3,
    img: property_3
  },
  {
    id: 4,
    img: property_4
  },
  {
    id: 5,
    img: property_5
  },
  {
    id: 6,
    img: property_6
  },
]

function Property_list({ }: Props) {
  return (
    <div className="w-full px-5 md:px-10 pt-[50px] grid max-w-screen-2xl">
      <Heading text="Popular Property Deals" />
      <div className="property_cont grid xl:grid-cols-4 gap-y-12 gap-x-12 justify-items-center mb-12 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        
        {properties.map((property): any => (<PropertyCard img={property.img} key={property.id}/>))}
        
      </div>
      <div className="btn justify-self-center">
        <Button_2 text="View More" />
      </div>
    </div>
  )
}

export default Property_list