// // import React from 'react'
// // import ProjectCard from '../components/projects/ProjectCard';
// // import { useGSAP } from '@gsap/react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // const Projects = () => {
// //     const project = [{
// //     image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
// //     image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
// //   }, {
// //     image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
// //     image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
// //   }, {
// //     image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
// //     image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
// //   }
// //    , {
// //     image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
// //     image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
// //   }]

// //   // gsap.registerPlugin(ScrollTrigger)
// //   // useGSAP(function(){
// //   //   gsap.from('.hero',{
// //   //     height:0,
// //   //     scrollTrigger:{
// //   //         trigger:'.lol',//parent 
// //   //         stagger:0.9,
// //   //         markers:true,
// //   //         start:"top 100%",
// //   //         end:"top -300%",
// //   //         scrub:true
// //   //     }
// //   //   })
// //   // })
// //     gsap.registerPlugin(ScrollTrigger)
// //   useGSAP(function(){
// //     gsap.from('.hero',{
// //       height:0,
// //       scrollTrigger:{
// //           trigger:'.lol',//parent 
// //           stagger:1,
// //           markers:true,
// //           start:"top 100%",
// //           end:"top -300%",
// //           scrub:true
// //       }
// //     })
// //   })
// //   return (
// //     <div className='p-4'>
// //       <div className=" pt-[45vh]">
// //       <h2 className="font-[font2] text-[12vw] uppercase text-black">
// //         Projets
// //       </h2>   
// //     </div>
// //     <div className='-mt-[4.5vw] lol'>
   
// //    {project.map(function(elem,idx){
// //     return <div key={idx} className="hero w-full h-[600px] flex gap-3 mb-2">

// //     <ProjectCard image1={elem.image1} image2={elem.image2} />
// //     </div>
// //    })}
// //     </div>
// //     </div>
// //   )
// // }

// // export default Projects;
// import React from 'react'
// import ProjectCard from '../components/projects/ProjectCard';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const Projects = () => {
//     const project = [{
//     image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
//     image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
//   }, {
//     image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
//     image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
//   }, {
//     image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
//     image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
//   },]

//   gsap.registerPlugin(ScrollTrigger);

//   useGSAP(() => {
//     gsap.utils.toArray('.hero').forEach((hero, i) => {
//       gsap.from(hero, {
//         height: 0,
//         stagger:{
//           amount:0.5
//         },
//         // The duration should be based on scroll, so scrub is important here
//         scrollTrigger: {
//           height:'200px',
//           trigger: '.lol',
//           start: 'top 100%', // Start the animation when the top of the hero div is 80% from the top of the viewport
//           end: 'bottom -150%',  // End the animation when the top of the hero div is 20% from the top
//           scrub: true,
//           markers: true, // Uncomment for debugging
//         }
//       });
//     });
//   }, []);

//   return (
//     <div className='p-4'>
//       <div className="pt-[45vh]">
//         <h2 className="font-[font2] text-[12vw] uppercase text-black">
//           Projets
//         </h2>   
//       </div>
//       <div className='-mt-[4.5vw]'>
//         {project.map((elem, idx) => {
//           return (
//             <div key={idx} className="hero w-full lg:h-[750px] flex gap-3 mb-2 overflow-hidden">
//               <ProjectCard image1={elem.image1} image2={elem.image2} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Projects;

import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Projects = () => {
  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    }
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray('.hero').forEach((hero) => {
      gsap.from(hero, {
        height: 0,
        stagger: { amount: 0.9 },
        scrollTrigger: {
          trigger: hero,
          start: 'top 100%',
          end: 'bottom -200%',
          stagger:0.1,
          scrub: true,
          markers: true, // remove in production
        }
      });
    });
  }, []);

  return (
    <div className="p-4">
      {/* Page Title */}
      <div className="pt-[45vh]">
        <h2 className="font-[font2] text-[12vw] lg:text-[8vw] uppercase text-black">
          Projets
        </h2>
      </div>

      {/* Projects */}
      <div className="lg:-mt-[3vw]">
        {projects.map((project, idx) => (
          <div key={idx} className="hero w-full lg:h-[900px] h-[500px] flex gap-4 mb-3 overflow-hidden">
            <ProjectCard image1={project.image1} image2={project.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
