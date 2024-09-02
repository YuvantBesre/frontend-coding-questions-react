import React, { forwardRef } from 'react'

const Note = forwardRef(({ data, position }, ref) => {
  console.log(ref);
  
  return (
    <div 
      ref={ref}
      className='note' 
      style={{
        top : position.y || 100,
        left : position.x || 100
      }}
    >
        📌 {data}
    </div>
  )
})

export default Note