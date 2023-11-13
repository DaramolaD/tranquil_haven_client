import React from 'react'

type Props = {
    text: string
}

const Button = ({text}: Props) => {
  return (
    <div className='rounded-xl w-fit p-3 bg-primary-200 capitalize text-primary-100'>{text}</div>
  )
}

export default Button