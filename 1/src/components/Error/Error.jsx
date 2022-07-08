import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-400 text-white p-3 rounded-md mb-3 text-center'>{mensaje}</div>
  )
}

export default Error