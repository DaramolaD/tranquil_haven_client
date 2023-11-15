import React from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'

type Props = {
    text: string
}

const Button_2 = ({text}: Props) => {
  return (
    <button className='rounded-xl w-fit p-3 bg-primary-300 capitalize text-primary-100 flex items-center gap-3'>
      {text} <IoChevronDownOutline />
      </button>
  )
}

export default Button_2