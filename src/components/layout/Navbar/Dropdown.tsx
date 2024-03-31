import { CiHeart, CiLogin, CiShoppingCart } from 'react-icons/ci';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-10 h-10'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
          <Link href='/logout'>Log Out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
