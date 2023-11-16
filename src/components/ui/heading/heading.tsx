import React from 'react'

type Props = {
    text: string
}

function Heading({text}: Props) {
  return (
    <div className="heading w-full pb-12">
    <div className="w-fit relative md:text-xl text-base text-primary-300 after:content-[''] after:absolute after:w-1/2 after:bottom-[-5px] after:h-[4px] after:bg-primary-300 after:left-0">{text}</div>
    </div>
  )
}

export default Heading