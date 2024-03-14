import React, { useState } from 'react';
import Link from 'next/link';
import { CiHeart, CiLogin, CiShoppingCart } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Switch from './Switch';
const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='lg:hidden relative'>
      <div
        className='flex flex-col w-8 gap-1 cursor-pointer '
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <div className='w-full h-1 bg-gray-700' />
        <div className='w-full h-1 bg-gray-700' />
        <div className='w-full h-1 bg-gray-700' />
      </div>
      {openMenu && (
        <div className='absolute z-50 w-[100svw] h-[calc(100svh-64px)] top-10 right-[-32px] bg-transparent backdrop-blur-2xl'>
          <ul
            className='p-12 h-full flex flex-col justify-between gap-y-4'
            onClick={() => setOpenMenu((prev) => false)}
          >
            <li className='hover:bg-secondary-foreground hover:text-secondary flex flex-col items-center justify-center bg-secondary p-3 rounded-lg gap-1'>
              Theme
              <Switch
                className='w-full h-8 rounded-full'
                classNameBall='w-1/2 h-8'
              />
            </li>
            <li className=' bg-secondary text-lg text-center flex flex-col gap-y-2 rounded-lg'>
              <Link
                className='hover:bg-secondary-foreground hover:text-secondary p-2 rounded-lg'
                href='/categories'
              >
                Categories
              </Link>
              <Link
                className='hover:bg-secondary-foreground hover:text-secondary p-2 rounded-lg'
                href='/new'
              >
                New
              </Link>
              <Link
                className='hover:bg-secondary-foreground hover:text-secondary p-2 rounded-lg'
                href='/trend'
              >
                Trend
              </Link>
            </li>
            <li className='hover:bg-secondary-foreground hover:text-secondary bg-secondary p-2 text-lg text-center rounded-lg'>
              Search
            </li>
            <li className=' bg-secondary p-2 text-center rounded-lg flex flex-col items-center gap-2'>
              <Link
                className='w-full hover:bg-secondary-foreground hover:text-secondary p-2 rounded-lg text-xl flex items-center justify-center'
                href='/favorites'
              >
                Favorites{' '}
                <CiHeart className='text-red-500 hover:fill-red-500  text-4xl ml-2' />
              </Link>
              <Link
                href='/cart'
                className='w-full flex items-center justify-center rounded-lg hover:bg-secondary-foreground hover:text-secondary'
              >
                <span className='text-lg'>Cart</span>
                <CiShoppingCart className=' text-4xl ml-2' />
              </Link>
              <Link
                href='/profile'
                className='w-full flex items-center justify-center rounded-lg hover:bg-secondary-foreground hover:text-secondary'
              >
                <span className='text-lg'>Profile</span>
                <CgProfile className=' text-4xl ml-2' />
              </Link>
            </li>
            <li className='hover:bg-secondary-foreground hover:text-secondary bg-secondary p-2 text-end mb-8 rounded-lg'>
              <div className='flex gap-x-2 items-center text-md w-full justify-center'>
                <CiLogin /> <span>Log in</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
