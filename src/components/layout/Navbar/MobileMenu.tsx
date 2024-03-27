import React, { useState } from 'react';
import Link from 'next/link';
import { CiHeart, CiLogin, CiShoppingCart } from 'react-icons/ci';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Switch from './Switch';
import Searchbar from './Searchbar';
import { MdAccountCircle } from 'react-icons/md';

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
                href='/trend'
              >
                Trend
              </Link>
            </li>
            <li className='hover:bg-secondary-foreground hover:text-secondary bg-secondary p-2 text-lg text-center rounded-lg  w-full md:w-1/2 self-center'>
              <Searchbar />
            </li>
            <li className='p-2 text-center rounded-lg flex flex-col items-center gap-2'>
              <div className='bg-secondary flex items-center justify-center rounded-lg hover:bg-secondary-foreground hover:text-secondary  w-full md:w-1/2 text-4xl'>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MdAccountCircle />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-[320px] lg:w-auto'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href='/profile' className='text-base'>
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Cart
                      <Link href='/cart'>
                        <CiShoppingCart className='text-2xl' />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href='/favorites' className='text-base'>
                        My Favorites
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href='/orders' className='text-base'>
                        Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href='/settings' className='text-base'>
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href='/logout'>Log Out</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </li>
            <li
              className='hover:bg-secondary-foreground hover:text-secondary flex flex-col items-center justify-center bg-secondary rounded-lg gap-1 w-1/2 mx-auto'
              onClick={() => setOpenMenu((prev) => false)}
            >
              Theme
              <Switch
                className='w-16 h-8 rounded-full'
                classNameBall='w-8 h-8'
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
