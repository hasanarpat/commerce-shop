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
import { MdAccountCircle } from 'react-icons/md';

const Dropdown = () => {
  return (
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
  );
};

export default Dropdown;
