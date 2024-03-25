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
import Searchbar from './Searchbar';
import { Button } from '@/components/ui/button';
import { RiProfileFill } from 'react-icons/ri';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { Separator } from '@/components/ui/separator';
import { MdAccountCircle, MdOutlineLocalShipping } from 'react-icons/md';
import { FaListCheck } from 'react-icons/fa6';

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
          <ul className='p-12 h-full flex flex-col justify-start gap-y-8'>
            <li
              className='lg text-center flex flex-col gap-y-4 items-center'
              onClick={() => setOpenMenu((prev) => false)}
            >
              <Link
                className='bg-secondary hover:bg-secondary-foreground hover:text-secondary p-2 rounded-lg  w-full md:w-1/2'
                href='/categories'
              >
                Categories
              </Link>
              <Link
                className='bg-secondary hover:bg-secondary-foreground hover:text-secondary p-2 rounded-lg  w-full md:w-1/2'
                href='/new'
              >
                New
              </Link>
              <Link
                className='bg-secondary hover:bg-secondary-foreground hover:text-secondary p-2 rounded-lg  w-full md:w-1/2'
                href='/trend'
              >
                Trend
              </Link>
            </li>
            <li className='hover:bg-secondary-foreground hover:text-secondary bg-secondary p-2 text-lg text-center rounded-lg  w-full md:w-1/2 self-center'>
              <Searchbar />
            </li>
            <li
              className='p-2 text-center rounded-lg flex flex-col items-center gap-2'
              onClick={() => setOpenMenu((prev) => false)}
            >
              <Link
                className='bg-secondary hover:bg-secondary-foreground hover:text-secondary rounded-lg text-xl flex items-center justify-center  w-full md:w-1/2'
                href='/favorites'
              >
                Favorites
                <CiHeart className='text-red-500 hover:fill-red-500  text-4xl ml-2' />
              </Link>
              <Link
                href='/cart'
                className='bg-secondary flex items-center justify-center rounded-lg hover:bg-secondary-foreground hover:text-secondary  w-full md:w-1/2'
              >
                <span className='text-lg'>Cart</span>
                <CiShoppingCart className=' text-4xl ml-2' />
              </Link>
              <div className='bg-secondary flex items-center justify-center rounded-lg hover:bg-secondary-foreground hover:text-secondary  w-full md:w-1/2'>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='bg-transparent hover:invisible'>
                        <MdAccountCircle className='text-3xl' />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='flex flex-col min-w-48 gap-2 p-4 px-2'>
                        <NavigationMenuLink className='text-lg'>
                          <Link
                            href='/profile'
                            className='flex items-center gap-4'
                          >
                            John Doe
                            <MdAccountCircle className='text-xl' />
                          </Link>
                        </NavigationMenuLink>
                        <Separator />
                        <NavigationMenuLink className='text-lg'>
                          <Link
                            href='/favorites'
                            className='flex items-center gap-4'
                          >
                            Favorites
                            <FaListCheck className='text-xl' />
                          </Link>
                        </NavigationMenuLink>
                        <Separator />
                        <NavigationMenuLink className='text-lg'>
                          <Link
                            href='/orders'
                            className='flex items-center gap-4'
                          >
                            Orders
                            <MdOutlineLocalShipping className='text-xl' />
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </li>
            <li className='hover:bg-secondary-foreground hover:text-secondary bg-secondary p-2 text-end mb-8 rounded-lg w-full md:w-1/2 self-center'>
              <div className='flex gap-x-2 items-center text-md w-full justify-center'>
                <CiLogin /> <span>Log in</span>
              </div>
            </li>
            <li
              className='hover:bg-secondary-foreground hover:text-secondary flex flex-col items-center justify-center bg-secondary rounded-lg gap-1'
              onClick={() => setOpenMenu((prev) => false)}
            >
              Theme
              <Switch
                className='w-full h-8 rounded-full'
                classNameBall='w-1/2 h-8'
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
