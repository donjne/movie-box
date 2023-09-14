import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import calendar from '../public/Calendar.svg';
import home from '../public/Home.svg';
import movies from '../public/Movie-Projector.svg';
import tvshow from '../public/TV-Show.svg'

const NavItem = ({ name, icon, onClick, isActive }) => {
  let route = "/entered";
  if (name === "Home") {
    route = "/home";
  } else if (name === "Movies") {
    route = "/movies";
  } else if (name === "TV Series") {
    route = "/tv-series";
  } else if (name === "Upcoming") {
    route = "/upcoming";
  }

  return (
    <li
      className={`w-full h-[50px] rounded-md hover:bg-[#ffd1d1] cursor-pointer mb-3 flex items-center pl-7 pt-5 pb-6 ${
        isActive ? "bg-[#ffd1d1] text-red-700" : "text-black"
      }`}
      onClick={onClick}
    >
      <Link href={route}>
          <div className="flex items-center">
          <Image
            src={icon} // Pass the icon (SVG) as a prop
            alt={name}
            className="w-10 h-10 mx-4" // Apply the same styles here
          />
            <span className="font-bold">{name}</span>
          </div>
      </Link>
    </li>
  );
};

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState("Movies");

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <ul>
  <NavItem
    name="Home"
    icon={home} // Pass the icon (SVG) here
    onClick={() => handleItemClick("Home")}
    isActive={activeItem === "Home"}
  />
  <NavItem
    name="Movies"
    icon={movies} // Pass the icon (SVG) here
    onClick={() => handleItemClick("Movies")}
    isActive={activeItem === "Movies"}
  />
  <NavItem
    name="TV Series"
    icon={tvshow} // Pass the icon (SVG) here
    onClick={() => handleItemClick("TV Series")}
    isActive={activeItem === "TV Series"}
  />
  <NavItem
    name="Upcoming"
    icon={calendar} // Pass the icon (SVG) here
    onClick={() => handleItemClick("Upcoming")}
    isActive={activeItem === "Upcoming"}
  />
</ul>

  );
};

export default NavMenu;
