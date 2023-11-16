import React from 'react'

type Props = {
    text: string
}

const Button_3 = ({text}: Props) => {
  return (
    <button className='text-[14px] rounded-[20px] w-fit py-[5px] px-[15px] bg-bg-100 text-text-100 capitalize flex items-center gap-3'>
      {text}
      </button>
  )
}

export default Button_3