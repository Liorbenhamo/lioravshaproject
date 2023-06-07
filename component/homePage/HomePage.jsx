import React from 'react'
import Carousel from '../carousel/Carousel'

function HomePage() {
  return (
    <div>
<div></div>
<div className='events-carousel' >
    <Carousel show={1} infiniteLoop={true}>

    </Carousel>
</div>
    </div>
  )
}

export default HomePage