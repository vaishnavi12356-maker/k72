// import React from "react";

// const ProjectCard = (props) => {

//   return (
//     <>
//       <div className=" w-1/2 h-full group hover:rounded-4xl overflow-hidden relative">
//         {/* parent with group  */}
//         <img
//           className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//           src={props.image1}
//           data-src="uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
//         ></img>
//         <div className="opacity-0 group-hover:opacity-100 w-full h-full bg-black/10 absolute top-0 left-0 flex items-center justify-center">
//           <h2 className="font-[font2] tracking-tighter uppercase text-[4vw] border-2 rounded-full font-bold leading-none px-4 py-0">
//             Vior le project
//           </h2>
//         </div>
//       </div>
//       <div className=" w-1/2 h-full group hover:rounded-4xl overflow-hidden relative">
//         {/* parent with group  */}
//         <img
//           className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//           src={props.image2}
//           data-src="uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
//         ></img>
//         <div className="opacity-0 group-hover:opacity-100 w-full h-full bg-black/10 absolute top-0 left-0 flex items-center justify-center">
//           <h2 className="font-[font2] tracking-tighter uppercase text-[4vw] border-2 rounded-full font-bold leading-none px-4 py-0">
//             Vior le project
//           </h2>
//         </div>
//       </div>
//     </>
    
//   );
// };

// export default ProjectCard;
import React from "react";

const ProjectCard = ({ image1, image2 }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-4 lg:gap-6">
      {/* Image 1 */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden rounded-3xl group">
        <img
          src={image1}
          alt="Project 1"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
          <h2 className="text-white font-bold text-[4vw] lg:text-[2rem] uppercase tracking-tight px-6 py-2 border-2 rounded-full">
            Voir le projet
          </h2>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden rounded-3xl group mt-3 md:mt-0">
        <img
          src={image2}
          alt="Project 2"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
          <h2 className="text-white font-bold text-[4vw] lg:text-[2rem] uppercase tracking-tight px-6 py-2 border-2 rounded-full">
            Voir le projet
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
