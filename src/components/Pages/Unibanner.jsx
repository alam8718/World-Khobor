import React from 'react'

function Unibanner({text}) {
  return (
    <>
      <div className="py-40 bg-[#2E3532] text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl font-bold mb-5 text-[#F9A620] ">
          {text}
        </h1>
      </div>
    </>
  )
}

export default Unibanner