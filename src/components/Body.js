import React from 'react'
import Editor from './Editor'
import Output from './Output'
import Footer from './Footer'
const Body = () => {
  return (
    <div className='bg-black'>
      <Editor />
      <Output />
    </div>
  )
}

export default Body
