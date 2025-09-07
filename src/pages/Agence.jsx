import React, { useRef } from "react";
import { useGSAP } from "@gsap/react"; //hook which help the gsap code smoothly
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {
  //useRef its help to ref the element
  //initalise scroll trigger
  //ti use scroll trigger
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top center%", // when top of image reaches center of viewport
        end: "bottom -110%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub: 1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: function (elem) {
          let index;
          if (elem.progress < 1) {
            index = Math.floor(elem.progress * imageArray.length);
          } else {
            index = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[index];
        },
      },
    });
  });

  return (
    <div className="bg-black">
      <div className="section1 py-1 ">
        <div
          ref={imageDivRef}
          className="lg:h-[20vw] absolute top-[11vw] left-[30vw] rounded-3xl w-[15vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full rounded-3xl object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-50">
            <h1 className="text-[20vw] leading-[17vw] uppercase text-center">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 pl-[5%] mt-20 sm:text-3xl sm:font-semibold">
            <p className="lg:text-5xl space-x-40  ">
              <span className="lg:pl-70 inline-block pl-20">Notre</span> curiosité
              nourrit notre créativité. On reste humbles et on dit non aux gros
              egos, même le vôtre. Une marque est vivante. Elle a des valeurs,
              une personnalité, une histoire. Si on oublie ça, on peut faire de
              bons chiffres à court terme, mais on la tue à long terme. C’est
              pour ça qu’on s’engage à donner de la perspective, pour bâtir des
              marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
        <h2 className="text-6xl text-center pt-40">Section 2</h2>
      </div>
    </div>
  );
};

export default Agence;

// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Agence = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const imageDivRef = useRef(null);

//   useEffect(() => {
//     const image = imageDivRef.current;

//     gsap.to(image, {
//       scrollTrigger: {
//         trigger: image,        // image itself triggers the pin
//         start: "top center",   // when top of image reaches center of viewport
//         end: "bottom 100px",   // end pin when the bottom of image reaches 100px from top
//         scrub: true,
//         pin: true,
//         markers: true,
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <div className="section1 relative min-h-screen">
//         <div
//           ref={imageDivRef}
//           className="h-[19vw] w-[15vw] rounded-3xl mx-auto mt-[10vh] overflow-hidden"
//         >
//           <img
//             className="h-full w-full rounded-3xl object-cover"
//             src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
//             alt=""
//           />
//         </div>

//         <div className="relative font-[font2]">
//           <div className="mt-[55vh] text-center">
//             <h1 className="text-[20vw] leading-[17vw] uppercase">
//               Soixan7e
//               <br />
//               Douze
//             </h1>
//           </div>
//           <div className="pl-[40%] mt-20">
//             <p className="text-5xl space-x-40">
//               <span className="pl-70 inline-block">Notre</span> curiosité nourrit notre créativité. On reste humbles et on dit
//               non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
//               valeurs, une personnalité, une histoire. Si on oublie ça, on peut
//               faire de bons chiffres à court terme, mais on la tue à long terme.
//               C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
//               des marques influentes.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="section2 h-screen flex justify-center items-center">
//         <h2 className="text-6xl text-center">Section 2</h2>
//       </div>
//     </div>
//   );
// };

// export default Agence;
