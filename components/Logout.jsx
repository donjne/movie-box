import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import logout from '../public/Logout.svg'


export const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    router.push("/"); // Redirect to the home page
  };

  return (
    <button className="flex justify-center items-center" onClick={handleLogout}>
      <Image                 
        src={logout} 
        alt="IMDb Logo"
        className="w-10 h-10 mx-2" />
      <span className="font-bold">Logout</span>
    </button>
  );
};

