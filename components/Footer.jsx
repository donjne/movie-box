import React from 'react'
import Image from 'next/image';
import facebook from '../public/facebook.svg';
import instagram from '../public/instagram.svg';
import twitter from '../public/twitter.svg';
import youtube from '../public/youtube.svg';
import Link from 'next/link';



function Footer() {
  return (
    <div>
        <div className='flex justify-center items-center space-x-8'>
        <Image 
        src={facebook} // Replace with your IMDb logo image path
        alt="Facebook Logo"
        className="w-6 h-10 mx-2"
        />
        <Image 
        src={instagram} // Replace with your IMDb logo image path
        alt="Instagram Logo"
        className="w-6 h-10 mx-2"
        />
        <Image 
        src={twitter} // Replace with your IMDb logo image path
        alt="Twitter Logo"
        className="w-6 h-10 mx-2"
        />
        <Image 
        src={youtube} // Replace with your IMDb logo image path
        alt="Youtube Logo"
        className="w-6 h-10 mx-2"
        />
        </div>
        <div className='font-semibold flex justify-center space-x-8 p-10'>
          <Link href="/terms-and-conditions">Conditions of Use</Link>
          <Link href="/privacy-and-policy">Privacy and policy</Link>
          <Link href="/press-room">Press Room</Link>
        </div>
        <div className='font-semibold flex justify-center text-gray-500 pb-12'>
        <p>&copy; 2023 MovieBox by David Nwankwoala</p>
        </div>
        </div>
  )
}

export default Footer