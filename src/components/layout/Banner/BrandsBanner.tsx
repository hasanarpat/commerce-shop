import Image from 'next/image';
import React from 'react';
import { GiMetalHand } from 'react-icons/gi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { FiTruck } from 'react-icons/fi';
import { MdContactSupport } from 'react-icons/md';

const BrandsBanner = () => {
  return (
    <div className='box-content flex justify-between items-center  bg-secondary'>
      <ul className='bg-stone-300  first:bg-white flex w-full gap-2 p-2 py-4 md:px-24 lg:justify-center lg:gap-8'>
        <li className='relative w-16 h-12 hover:bg-secondary text-black flex items-center justify-center text-4xl'>
          <GiMetalHand />
        </li>
        <li className='relative w-16 h-12 hover:bg-secondary'>
          <Image
            fill
            alt='logo'
            src='/assets/images/cat-bant-logo.svg'
            className='object-cover'
          />
        </li>
        <li className='relative w-16 h-12 hover:bg-secondary'>
          <Image
            fill
            alt='logo'
            src='/assets/images/hd-56.svg'
            className='object-cover'
          />
        </li>
        <li className='relative w-16 h-12 hover:bg-secondary'>
          <Image
            fill
            alt='logo'
            src='/assets/images/ns-02.svg'
            className='object-cover'
          />
        </li>
        <li className='relative w-16 h-12 hover:bg-secondary'>
          <Image
            fill
            alt='logo'
            src='/assets/images/wolverine-logo.svg'
            className='object-cover'
          />
        </li>
        <ul className='ml-auto flex w-fit lg:gap-4 box-content'>
          <li className='cursor-pointer w-fit h-12 p-1 rounded text-black hover:bg-secondary hover:text-white flex items-center justify-center gap-3'>
            <RiCustomerService2Line className='text-2xl' />
            <span>+123456789</span>
          </li>
          <li className='cursor-pointer p-1 rounded w-fit h-12 text-black hover:bg-secondary hover:text-white flex items-center justify-center gap-3'>
            <FiTruck />
            <span>Sipariş Takip</span>
          </li>
          <li className='cursor-pointer p-1 rounded w-fit h-12 text-black hover:bg-secondary hover:text-white flex items-center justify-center gap-3'>
            <MdContactSupport />

            <span>Destek</span>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default BrandsBanner;
