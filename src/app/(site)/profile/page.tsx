import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const Profile = () => {
  return (
    <div className='p-8'>
      <UserProfile
        appearance={{
          // Search for elements and integrate site theme for clerk components
          elements: {
            formButtonPrimary:
              'bg-slate-500 hover:bg-slate-400 text-sm normal-case',
          },
        }}
      />
    </div>
  );
};

export default Profile;
