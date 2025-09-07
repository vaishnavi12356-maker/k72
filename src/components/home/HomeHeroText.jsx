import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center text-zinc-50 lg:-mt-[0.8vw] mt-50 '>
     <div className='lg:text-[10vw] text-[12vw] uppercase leading-[10vw] flex items-center justify-center '>L'étincelle</div>
     <div className='lg:text-[10vw] text-[12vw]  leading-[9vw] uppercase flex items-start justify-center'>qui 
        <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-2'>
            <Video/>
        </div> 
        génère</div>
     <div className='lg:text-[10vw] text-[12vw]  leading-[9vw] uppercase flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText