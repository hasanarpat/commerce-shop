'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import Link from 'next/link';

import { SignOutButton, useUser } from '@clerk/nextjs';

import { FaSignOutAlt } from 'react-icons/fa';
import { CiShoppingCart } from 'react-icons/ci';

const Dropdown = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-10 h-10'>
          <AvatarImage
            src={
              user?.hasImage ? user.imageUrl : 'https://github.com/shadcn.png'
            }
          />
          <AvatarFallback>
            {user?.firstName &&
              user?.lastName &&
              user?.firstName?.slice(0, 1).toUpperCase() +
                user?.lastName?.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[320px] lg:w-auto'>
        <DropdownMenuLabel className='text-center'>
          <Link href='/profile'>My Profile</Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-base'>
          <Link href='/profile'>{user?.firstName + ' ' + user?.lastName}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/cart'>
            Cart
            <CiShoppingCart className='text-2xl inline' />
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
          <SignOutButton>
            <Button
              className='w-full flex items-center gap-2 font-base text-gray-500'
              variant='outline'
            >
              Sign Out <FaSignOutAlt className='inline text-xl' />
            </Button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
