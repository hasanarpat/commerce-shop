'use client';

import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const UserAvatar = () => {
  const { user } = useUser();

  return (
    <>
      <Avatar className='w-16 h-16'>
        <AvatarImage
          src={user?.hasImage ? user.imageUrl : 'https://github.com/shadcn.png'}
        />
        <AvatarFallback>
          {user?.firstName?.slice(0, 1).toUpperCase() +
            ' ' +
            user?.lastName?.slice(0, 1).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <span className='flex items-center gap-1'>
        <span className='text-xl font-bold first-letter:uppercase'>
          {user?.firstName}
        </span>
        <span className='text-xl font-bold first-letter:uppercase'>
          {user?.lastName}
        </span>
      </span>
    </>
  );
};

export default UserAvatar;
