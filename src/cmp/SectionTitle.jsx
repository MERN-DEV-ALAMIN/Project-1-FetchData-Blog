import React from 'react'

const SectionTitle = ({mainTitle, subTitle}) => {
  return (
    <div>
    <div>
        <h1 className='text-4xl text-center'>{mainTitle} </h1>
        <p className='text-center mt-2'>{subTitle} </p>
    </div>
    </div>
  )
}

export default SectionTitle