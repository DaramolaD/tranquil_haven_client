import React from 'react'
import Heading from '../ui/heading/heading'
import { IoChevronDownOutline } from 'react-icons/io5'
import Button_2 from '../ui/button/button_2'

type Props = {}

function Property_list({}: Props) {
  return (
    <div>
        <Heading text="Popular Property Deals"/>
        <Button_2 text="View More"/>
    </div>
  )
}

export default Property_list