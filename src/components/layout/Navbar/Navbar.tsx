'use client';
import Link from 'next/link';
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { GiMetalHand } from 'react-icons/gi';
import Switch from './Switch';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Searchbar from './Searchbar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MdAccountCircle } from 'react-icons/md';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className='p-8 bg-transparent backdrop-blur-sm h-16 border-b border-accent sticky top-0 z-50'>
      <div className='flex items-center justify-between h-full text-lg md:text-base'>
        <Link className='text-5xl flex items-center justify-center' href='/'>
          <GiMetalHand />
          <h1 className='text-3xl font-bold text-foreground'>HardStone</h1>
        </Link>
        <div className='hidden lg:flex'>
          <Searchbar />
        </div>
        <div className='items-center gap-4 hidden md:flex'>
          <Menu />
        </div>
        <div className='lg:flex hidden'>
          <Switch />
        </div>
        <div className='text-4xl hidden lg:block'>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MdAccountCircle />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
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
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
