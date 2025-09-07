import React from "react";
import { useGSAP } from "@gsap/react"; //hook which help the gsap code smoothly
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stair = (props) => {
  const currentPath = useLocation().pathname;//give the current path

  const stairParentRef = useRef(null);

  const pageRef = useRef(null);
  useGSAP(function () {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });
    gsap.from(pageRef.current,{  //pageref takling about full page
        opacity:0,
        delay:1,
        scale:1.2
    })
  },[currentPath]);
  return (
   <div>
     <div ref={stairParentRef} className="w-full h-screen flex fixed z-20 top-0">
      <div className="w-full h-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
    <div ref = {pageRef}>
        {props.children}
    </div>
   </div>
  );
};

export default Stair;
