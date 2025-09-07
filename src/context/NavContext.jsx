import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navColor, setNavColor] = useState("white"); // default white
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/project") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [location]);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;
