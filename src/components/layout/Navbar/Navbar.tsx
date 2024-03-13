'use client';
import Link from 'next/link';
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { GiMetalHand } from 'react-icons/gi';
import Switch from './Switch';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className='p-8 bg-transparent backdrop-blur-sm h-16 border-b border-accent sticky top-0'>
      <div className='flex items-center justify-between h-full text-lg md:text-base'>
        <Link className='text-5xl flex items-center justify-center' href='/'>
          <GiMetalHand />
          <h1 className='text-3xl font-bold text-foreground'>HardStone</h1>
        </Link>
        <div className='hidden lg:flex'>Search</div>
        <div className='items-center gap-4 hidden md:flex'>
          <Menu />
        </div>
        <div className='lg:flex hidden'>
          <Switch />
        </div>
        <div className='text-4xl hidden lg:block'>
          <Link href='/cart'>
            <CiShoppingCart />
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
