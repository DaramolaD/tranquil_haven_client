import React from 'react'

type Props = {
    text: string
}

const Button = ({text}: Props) => {
  return (
    <button className='rounded-xl w-fit p-3 bg-primary-300 capitalize text-primary-100'>
      {text}
      </button>
  )
}

export default Button