// import React from "react";
// import { Link } from "react-router-dom";
// const HomeBottomText = () => {
//   return (
//     <div className="font-[font2] flex items-center justify-center gap-4 lg:gap-4 text-zinc-50 mb-2 relative">
      
//         <p className=" absolute lg:right-0 lg:w-75 lg:bottom-[10vw] tracking-tight leading-5 sm:w-50 sm:bottom-20 sm:text-xs font-[font1] lg:text-sm sm:font-medium">
//          <span className="ml-15">K72</span> est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
//       </p>
      
//       <div className="lg:border-3 border-2 lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:px-10 px-4 border-white rounded-full uppercase">
//         <Link className="text-[6vw] sm:-mt-[1.5vw] sm:-mb-[2vw] " to="/project">
//           Projets
//         </Link>
//       </div>
//       <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-10 px-4 border-white rounded-full uppercase">
//         <Link className="text-[6vw] sm:-mt-[1.5vw] sm:-mb-[2vw]" to='/agence'>Agence</Link>
//       </div>
//     </div>
//   );
// };

// export default HomeBottomText;

import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-4 lg:gap-4 text-zinc-50 mb-2 relative">
      
      {/* Paragraph */}
      <p className="
        absolute
        right-0
        bottom-30
        w-80 
        h-20
        text-xs sm:text-sm lg:text-sm 
        font-[font1] sm:font-medium 
        tracking-tight leading-4.5
        lg:absolute lg:right-0 lg:w-[20%] lg:bottom-[10vw]
       
      ">
        <span className="ml-4">K72</span> est une agence qui pense chaque action
        pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la
        friction qui crée l’étincelle pour générer de l’émotion. Pour assurer
        une relation honnête, on est sans filtre, on dit ce qui doit être dit,
        on fait ce qui doit être fait.
      </p>
      
      {/* Buttons (unchanged) */}
      <div className="lg:border-3 border-2 lg:h-25 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:px-10 px-4 border-white rounded-full uppercase">
        <Link className="text-[6vw] sm:-mt-[1.5vw] sm:-mb-[2vw]" to="/project">
          Projets
        </Link>
      </div>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-10 px-4 border-white rounded-full uppercase">
        <Link className="text-[6vw] sm:-mt-[1.5vw] sm:-mb-[2vw]" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
