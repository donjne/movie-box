import React from 'react'
import Head from "next/head";
import LogoJPG from '../public/Logo.png';
import Link from "next/link";
import { Logout } from '../components/Logout';
import Image from 'next/image';
import NavMenu from '../components/NavMenu';
import SomeWords from '../components/SomeWords';

function entered() {
  return (
    <>
      <Head>
        <title>Movie Box</title>
        <meta name="description" content="The Ultimate Finance Tracking App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-5 h-screen w-screen">
        {/* Side Section */}
        <div
          className="bg-[#ffffff] p-4 border-r border-gray-500 col-span-1 rounded-r-3xl"
        >
          <div className='flex justify-center items-center mb-6 gap-2'>
          <Image className="w-10 h-10"
            src={LogoJPG} 
            alt="logo"
          />
          <h1 className='font-bold text-2xl'>MovieBox</h1>
          </div>
          <NavMenu />
          <div className="text-1xl text-white p-3">
            <SomeWords />
          </div>
          <div className="flex hover:bg-[#ffd1d1] text-black h-[50px] p-6 rounded-md justify-between items-center">
            <Logout />
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div>
            <p>hello</p>
        </div>
      </main>
    </>
  )
}

export default entered