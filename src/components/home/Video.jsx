// import React from 'react'

// const Video = () => {
//   return (
//     <div className='w-full h-full'>
//       <video className='w-full h-full object-cover' autoPlay muted loop src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756967064~exp=1756970664~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=2cb85f98be7d558c3807cfc66e6a37d62a60a89cc38018c64c76184bc6504074&r=dXMtd2VzdDE%3D"></video>
//     </div>
//   )
// }

// export default Video

// import React from 'react'

// const Video = () => {
//   return (
//     <div  className='w-full h-full'>
//       <video
//       className="w-full h-full object-cover"
//       autoPlay
//       muted
//       loop
//       playsInline
//       src="/videos/k72.mp4"   // 👉 use a local or permanent file instead of expiring Vimeo link
//     />
//     </div>
    
//   )
// }

// export default Video
import React from 'react'
const Video = () => {
  return (
    <div className='w-full h-full'>
      <video
      // Add 'rounded-md' here
      className="w-full h-full object-cover rounded"
      autoPlay
      muted
      loop
      playsInline
      src="/videos/k72.mp4"
    />
    </div>
  )
}
export default Video