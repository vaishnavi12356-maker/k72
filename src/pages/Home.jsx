import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (

    <div>
       <div className='w-screen h-screen fixed'>
      <Video/>
       </div>
      <div className='w-screen h-screen relative flex flex-col justify-between overflow-hidden'>
      <HomeHeroText/>
      <HomeBottomText/>
      </div>
   
    </div>
   
    
  )
}

export default Home


// 1.video
// 2.top Text
// 3.bottomtext