import React from 'react'

type Props = {
    text: string
}

function Heading({text}: Props) {
  return (
    <div className="md:text-xl text-base text-primary-300 after:content-['x']">{text}</div>
  )
}

export default Heading