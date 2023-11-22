import React from 'react'
import Banner from '../Pages/Banner'
import BlogPage from '../Blogs/BlogPage'
import Fotter from '../Fotter/Fotter'

function Home() {
  return (
    <>
      <div className='hcreem'>
      <div>
      <Banner />
      <div className='max-w-full mx-auto'>
      <BlogPage />
      </div>
      </div>
      </div>
      
    </>

  )
}

export default Home